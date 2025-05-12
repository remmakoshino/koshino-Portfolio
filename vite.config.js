// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/koshino-Portfolio/', // GitHub Pages用のベースパス
  plugins: [react()],
})

