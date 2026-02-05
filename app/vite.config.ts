import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { inspectAttr } from 'kimi-plugin-inspect-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  // 不需要 root，因为 vite.config.ts 已经在 app 目录
  base: './',
  plugins: [inspectAttr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
})
