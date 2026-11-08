import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import telemetryHandler from './api/telemetry.js'

function realTelemetryPlugin() {
  return {
    name: 'real-telemetry-api',
    configureServer(server) {
      server.middlewares.use('/api/telemetry', (req, res) => {
        telemetryHandler(req, res)
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/telemetry', (req, res) => {
        telemetryHandler(req, res)
      })
    },
  }
}

export default defineConfig({
  plugins: [vue(), realTelemetryPlugin()],
})
