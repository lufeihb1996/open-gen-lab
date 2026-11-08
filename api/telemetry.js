// Real-time Telemetry Serverless Endpoint for Vercel & Vite (/api/telemetry)
// Globally synchronizes across all Vercel Serverless instances and local dev via Abacus Valkey (Redis):
// 1. Online Users (online): 20s time-bucketed global presence deduplicated per device
// 2. Unique Visitors (views): Permanent Redis deduplication by both visitorId AND (IP + Device Class)
// 3. Script Copies (copies): Atomic global counter incremented on every workflow/Colab copy

import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

const TMP_FILE = path.join('/tmp', 'ogl-telemetry-v3.json')
const REMOTE_BASE = 'https://abacus.jasoncameron.dev'
const NAMESPACE = 'ogl_v3_prod_lufei'
const ONLINE_TTL_MS = 25000
const BUCKET_MS = 20000

function sha1Short(input) {
  return crypto.createHash('sha1').update(String(input)).digest('hex').slice(0, 12)
}

function getClientIp(req) {
  const xff = req.headers?.['x-forwarded-for']
  if (typeof xff === 'string' && xff.trim()) {
    return xff.split(',')[0].trim()
  }
  const realIp = req.headers?.['x-real-ip']
  if (typeof realIp === 'string' && realIp.trim()) {
    return realIp.trim()
  }
  return req.socket?.remoteAddress || '127.0.0.1'
}

function isLocalAddress(ip) {
  return !ip || ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.') || ip.startsWith('10.') || ip.includes('localhost')
}

function getDeviceClass(req, clientDev) {
  if (clientDev === 'mobile' || clientDev === 'desktop') return clientDev
  const ua = String(req.headers?.['user-agent'] || '').toLowerCase()
  if (/iphone|ipad|ipod|android|mobile|harmonyos|phone/.test(ua)) {
    return 'mobile'
  }
  return 'desktop'
}

function loadTmpState() {
  try {
    if (fs.existsSync(TMP_FILE)) {
      const raw = JSON.parse(fs.readFileSync(TMP_FILE, 'utf-8'))
      return {
        seenHashes: new Set(Array.isArray(raw.seenHashes) ? raw.seenHashes : []),
        views: Number(raw.views || 5),
        copies: Number(raw.copies || 0),
        online: Number(raw.online || 1),
        lastSyncTs: 0,
      }
    }
  } catch {
    // ignore
  }
  return {
    seenHashes: new Set(),
    views: 5,
    copies: 0,
    online: 1,
    lastSyncTs: 0,
  }
}

function saveTmpState(st) {
  try {
    fs.writeFileSync(
      TMP_FILE,
      JSON.stringify({
        seenHashes: Array.from(st.seenHashes).slice(-5000),
        views: st.views,
        copies: st.copies,
        online: st.online,
      }),
      'utf-8'
    )
  } catch {
    // ignore on platforms without /tmp
  }
}

const activeClients = globalThis.__oglActiveV3 || (globalThis.__oglActiveV3 = new Map())
const checkedInBucket = globalThis.__oglBucketV3 || (globalThis.__oglBucketV3 = new Map())
const state = globalThis.__oglStateV3 || (globalThis.__oglStateV3 = loadTmpState())

async function remoteCall(op, key) {
  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 3000)
    const resp = await fetch(`${REMOTE_BASE}/${op}/${NAMESPACE}/${key}`, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    })
    clearTimeout(timer)
    if (!resp.ok) return null
    const data = await resp.json()
    return typeof data.value === 'number' ? data.value : null
  } catch {
    return null
  }
}

function pruneLocalActive(now) {
  for (const [k, ts] of activeClients.entries()) {
    if (now - ts > ONLINE_TTL_MS) {
      activeClients.delete(k)
    }
  }
}

async function ensureUserCountedOnce(vidHash, ipDevHash) {
  if (state.seenHashes.has(vidHash) || state.seenHashes.has(ipDevHash)) {
    state.seenHashes.add(vidHash)
    state.seenHashes.add(ipDevHash)
    return false
  }

  // Check global Redis in parallel: has either this browser (vidHash) OR this (IP + DeviceClass) visited before?
  const [uVal, dVal] = await Promise.all([
    remoteCall('get', `u_${vidHash}`),
    vidHash === ipDevHash ? Promise.resolve(null) : remoteCall('get', `d_${ipDevHash}`),
  ])

  const alreadySeenGlobally = (typeof uVal === 'number' && uVal >= 1) || (typeof dVal === 'number' && dVal >= 1)
  state.seenHashes.add(vidHash)
  state.seenHashes.add(ipDevHash)

  if (alreadySeenGlobally) {
    // Link both keys if one was missing (e.g. mobile switched from Wi-Fi to 5G)
    if (uVal === null) remoteCall('hit', `u_${vidHash}`).catch(() => {})
    if (vidHash !== ipDevHash && dVal === null) remoteCall('hit', `d_${ipDevHash}`).catch(() => {})
    return false
  }

  // Brand-new unique user! Mark both keys and atomically increment uv_total
  const [, , newUv] = await Promise.all([
    remoteCall('hit', `u_${vidHash}`),
    vidHash === ipDevHash ? Promise.resolve(1) : remoteCall('hit', `d_${ipDevHash}`),
    remoteCall('hit', 'uv_total'),
  ])
  if (typeof newUv === 'number') {
    state.views = Math.max(state.views, newUv)
  } else {
    state.views += 1
  }
  return true
}

async function checkInOnlineBucket(now, ipDevHash) {
  const bucket = Math.floor(now / BUCKET_MS)
  if (checkedInBucket.get(ipDevHash) === bucket) {
    return bucket
  }

  const hbKey = `hb_${bucket}_${ipDevHash}`
  const existing = await remoteCall('get', hbKey)
  checkedInBucket.set(ipDevHash, bucket)

  if (existing === null) {
    const newBucketCount = await remoteCall('hit', `on_${bucket}`)
    await remoteCall('hit', hbKey)
    if (typeof newBucketCount === 'number') {
      state.online = Math.max(1, newBucketCount, activeClients.size)
    }
  }
  return bucket
}

async function syncTotalsAndOnline(now, bucket, force = false) {
  if (!force && now - state.lastSyncTs < 3500) {
    return
  }
  state.lastSyncTs = now

  const needPrevBucket = (now % BUCKET_MS) < 11000
  const [rViews, rCopies, curOn, prevOn] = await Promise.all([
    remoteCall('get', 'uv_total'),
    remoteCall('get', 'copies_total'),
    remoteCall('get', `on_${bucket}`),
    needPrevBucket ? remoteCall('get', `on_${bucket - 1}`) : Promise.resolve(0),
  ])

  if (typeof rViews === 'number' && rViews >= 0) {
    state.views = Math.max(state.views, rViews)
  }
  if (typeof rCopies === 'number' && rCopies >= 0) {
    state.copies = Math.max(state.copies, rCopies)
  }

  const remoteOnline = Math.max(
    typeof curOn === 'number' ? curOn : 0,
    needPrevBucket && typeof prevOn === 'number' ? prevOn : 0
  )
  state.online = Math.max(1, remoteOnline, activeClients.size)
}

export default async function handler(req, res) {
  const now = Date.now()
  const url = new URL(req.url, `http://${req.headers?.host || 'localhost'}`)
  const action = url.searchParams.get('action') || 'heartbeat'
  const rawVisitorId = (url.searchParams.get('visitorId') || '').trim() || 'anon'
  const clientDev = (url.searchParams.get('dev') || '').trim()

  const ip = getClientIp(req)
  const devClass = getDeviceClass(req, clientDev)
  const vidHash = sha1Short(rawVisitorId)
  const ipDevHash = isLocalAddress(ip) ? vidHash : sha1Short(`${ip}|${devClass}`)

  if (action === 'leave') {
    activeClients.delete(ipDevHash)
    pruneLocalActive(now)
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.setHeader('Cache-Control', 'no-store, max-age=0')
    res.statusCode = 200
    res.end(
      JSON.stringify({
        online: Math.max(0, activeClients.size),
        views: state.views,
        copies: state.copies,
      })
    )
    return
  }

  activeClients.set(ipDevHash, now)
  pruneLocalActive(now)

  const bucket = Math.floor(now / BUCKET_MS)
  let dirty = false

  if (action === 'copy') {
    const [newCopies] = await Promise.all([
      remoteCall('hit', 'copies_total'),
      checkInOnlineBucket(now, ipDevHash),
    ])
    if (typeof newCopies === 'number') {
      state.copies = Math.max(state.copies + 1, newCopies)
    } else {
      state.copies += 1
    }
    await syncTotalsAndOnline(now, bucket, true)
    dirty = true
  } else {
    const [uvChanged] = await Promise.all([
      ensureUserCountedOnce(vidHash, ipDevHash),
      checkInOnlineBucket(now, ipDevHash),
    ])
    await syncTotalsAndOnline(now, bucket, uvChanged || action === 'visit' || action === 'new_visit')
    if (uvChanged) dirty = true
  }

  if (dirty) {
    saveTmpState(state)
  }

  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store, max-age=0')
  res.statusCode = 200
  res.end(
    JSON.stringify({
      online: Math.max(1, state.online, activeClients.size),
      views: state.views,
      copies: state.copies,
    })
  )
}
