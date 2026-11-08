// Real-time Telemetry Serverless Endpoint for Vercel (/api/telemetry)
// Deduplicates both Online Users and Total Visits by persistent visitorId (UV, not PV).

const activeClients = globalThis.__oglActiveClients || (globalThis.__oglActiveClients = new Map())
const seenVisitors = globalThis.__oglSeenVisitors || (globalThis.__oglSeenVisitors = new Set())
const statsState = globalThis.__oglStatsState || (globalThis.__oglStatsState = { copies: 0 })

const ONLINE_TTL_MS = 35000

function pruneExpired(now) {
  for (const [vid, ts] of activeClients.entries()) {
    if (now - ts > ONLINE_TTL_MS) {
      activeClients.delete(vid)
    }
  }
}

export default function handler(req, res) {
  const now = Date.now()
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`)
  const action = url.searchParams.get('action') || 'heartbeat'
  const visitorId = url.searchParams.get('visitorId') || ''

  if (visitorId) {
    // Unique visitor deduplication: only counts once per unique visitorId
    seenVisitors.add(visitorId)

    if (action === 'leave') {
      activeClients.delete(visitorId)
    } else {
      activeClients.set(visitorId, now)
    }
  }

  if (action === 'copy') {
    statsState.copies += 1
  }

  pruneExpired(now)

  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store, max-age=0')
  res.statusCode = 200
  res.end(
    JSON.stringify({
      online: Math.max(action === 'leave' ? 0 : 1, activeClients.size),
      views: seenVisitors.size,
      copies: statsState.copies,
    })
  )
}
