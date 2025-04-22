import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [compress()],
  plugins: [react()],
  optimizeDeps: {
    include: ['some-large-library'],
    exclude: ['some-other-library'],
  },
})
