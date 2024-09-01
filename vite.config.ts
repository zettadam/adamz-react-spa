import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import webFontDownload from 'vite-plugin-webfont-dl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), webFontDownload()],
  resolve: {
    alias: {
      '~/': new URL('./src/', import.meta.url).pathname,
    },
  },
})
