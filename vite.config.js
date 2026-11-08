import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const DATA_FILE = path.resolve(process.cwd(), '.telemetry-data.json')

function loadState() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const parsed = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'))
      return {
        visitors: new Set(Array.isArray(parsed.visitors) ? parsed.visitors : []),
        copies: Number(parsed.copies || 0),
      }
    }
  } catch {
    // ignore
  }
  return { visitors: new Set(), copies: 0 }
}

function saveState(state) {
  try {
    fs.writeFileSync(
      DATA_FILE,
      JSON.stringify(
        {
          visitors: Array.from(state.visitors),
          views: state.visitors.size,
          copies: state.copies,
        },
        null,
        2
      ),
      'utf-8'
    )
  } catch {
    // ignore
  }
}

function realTelemetryPlugin() {
  const activeClients = new Map()
  const state = loadState()
  const ONLINE_TTL_MS = 35000

  function handleTelemetry(req, res) {
    const now = Date.now()
    const url = new URL(req.url, 'http://localhost')
    const action = url.searchParams.get('action') || 'heartbeat'
    const visitorId = url.searchParams.get('visitorId') || ''

    let dirty = false
    if (visitorId) {
      if (!state.visitors.has(visitorId)) {
        state.visitors.add(visitorId)
        dirty = true
      }
      if (action === 'leave') {
        activeClients.delete(visitorId)
      } else {
        activeClients.set(visitorId, now)
      }
    }

    if (action === 'copy') {
      state.copies += 1
      dirty = true
    }

    if (dirty) {
      saveState(state)
    }

    for (const [vid, ts] of activeClients.entries()) {
      if (now - ts > ONLINE_TTL_MS) {
        activeClients.delete(vid)
      }
    }

    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.setHeader('Cache-Control', 'no-store, max-age=0')
    res.statusCode = 200
    res.end(
      JSON.stringify({
        online: Math.max(action === 'leave' ? 0 : 1, activeClients.size),
        views: state.visitors.size,
        copies: state.copies,
      })
    )
  }

  return {
    name: 'real-telemetry-api',
    configureServer(server) {
      server.middlewares.use('/api/telemetry', handleTelemetry)
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/telemetry', handleTelemetry)
    },
  }
}

export default defineConfig({
  plugins: [vue(), realTelemetryPlugin()],
  server: { port: 8090, host: '127.0.0.1' },
})
