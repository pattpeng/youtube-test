import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/youtube-test/',
  "homepage": "https://pattpeng.github.io/youtube-test/",
  plugins: [react()],
})
