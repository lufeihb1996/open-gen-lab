// Real-time Telemetry Serverless Endpoint for Vercel (/api/telemetry)
// - Globally persistent cumulative UV (views) & script copies across all Vercel cold starts and regions
// - Strict per-user deduplication: 1 user device/browser = 1 visit (never double-counted on refresh)

import fs from 'node:fs'
import path from 'node:path'

const TMP_FILE = path.join('/tmp', 'ogl-telemetry-state.json')
const REMOTE_BASE = 'https://abacus.jasoncameron.dev'
const NAMESPACE = 'open_gen_lab_lufei1996'
const ONLINE_TTL_MS = 35000

function loadTmpState() {
  try {
    if (fs.existsSync(TMP_FILE)) {
      const raw = JSON.parse(fs.readFileSync(TMP_FILE, 'utf-8'))
      return {
        visitors: new Set(Array.isArray(raw.visitors) ? raw.visitors : []),
        views: Number(raw.views || 0),
        copies: Number(raw.copies || 0),
        lastSyncTs: 0,
      }
    }
  } catch {
    // ignore
  }
  return { visitors: new Set(), views: 4, copies: 0, lastSyncTs: 0 }
}

function saveTmpState(st) {
  try {
    fs.writeFileSync(
      TMP_FILE,
      JSON.stringify({
        visitors: Array.from(st.visitors).slice(-5000),
        views: st.views,
        copies: st.copies,
      }),
      'utf-8'
    )
  } catch {
    // ignore
  }
}

const activeClients = globalThis.__oglActiveClients || (globalThis.__oglActiveClients = new Map())
const state = globalThis.__oglPersistentState || (globalThis.__oglPersistentState = loadTmpState())

async function remoteCounter(op, key) {
  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 2500)
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

async function syncFromRemoteIfNeeded(now, force = false) {
  if (!force && now - state.lastSyncTs < 8000) return
  state.lastSyncTs = now
  const [rViews, rCopies] = await Promise.all([
    remoteCounter('get', 'visitors'),
    remoteCounter('get', 'copies'),
  ])
  if (typeof rViews === 'number' && rViews > state.views) {
    state.views = rViews
  }
  if (typeof rCopies === 'number' && rCopies > state.copies) {
    state.copies = rCopies
  }
}

function pruneExpired(now) {
  for (const [vid, ts] of activeClients.entries()) {
    if (now - ts > ONLINE_TTL_MS) {
      activeClients.delete(vid)
    }
  }
}

export default async function handler(req, res) {
  const now = Date.now()
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`)
  const action = url.searchParams.get('action') || 'heartbeat'
  const visitorId = (url.searchParams.get('visitorId') || '').trim()

  if (visitorId) {
    if (action === 'leave') {
      activeClients.delete(visitorId)
    } else {
      activeClients.set(visitorId, now)
    }
  }

  let dirty = false

  // Only increment UV when client reports first-time visit AND server hasn't seen this visitorId
  if (action === 'new_visit' && visitorId && !state.visitors.has(visitorId)) {
    state.visitors.add(visitorId)
    const newViews = await remoteCounter('hit', 'visitors')
    state.views = typeof newViews === 'number' ? Math.max(state.views + 1, newViews) : state.views + 1
    state.lastSyncTs = now
    dirty = true
  } else if (action === 'copy') {
    const newCopies = await remoteCounter('hit', 'copies')
    state.copies = typeof newCopies === 'number' ? Math.max(state.copies + 1, newCopies) : state.copies + 1
    state.lastSyncTs = now
    dirty = true
  } else {
    if (visitorId && !state.visitors.has(visitorId)) {
      state.visitors.add(visitorId)
      dirty = true
    }
    await syncFromRemoteIfNeeded(now, action === 'visit')
  }

  state.views = Math.max(state.views, state.visitors.size)
  if (dirty) {
    saveTmpState(state)
  }

  pruneExpired(now)

  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store, max-age=0')
  res.statusCode = 200
  res.end(
    JSON.stringify({
      online: Math.max(action === 'leave' ? 0 : 1, activeClients.size),
      views: state.views,
      copies: state.copies,
    })
  )
}
