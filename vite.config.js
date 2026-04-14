import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor'
            if (id.includes('framer-motion')) return 'motion'
            if (id.includes('sanity')) return 'sanity'
            return 'vendor'
          }
        }
      }
    }
  }
})