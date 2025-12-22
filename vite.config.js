import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'avatar-redirect',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // If requesting avatar.jfif directly, serve HTML page instead
          if (req.url === '/avatar.jfif' && req.headers.accept?.includes('text/html')) {
            const htmlPath = path.join(__dirname, 'public', 'avatar-viewer.html')
            if (fs.existsSync(htmlPath)) {
              const html = fs.readFileSync(htmlPath, 'utf-8')
              res.setHeader('Content-Type', 'text/html')
              res.end(html)
              return
            }
          }
          next()
        })
      }
    }
  ],
})
