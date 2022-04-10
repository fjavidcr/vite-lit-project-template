import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
    lib: {
      entry: 'index.html',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})
