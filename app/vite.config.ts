import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [inspectAttr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  root: 'app', // 添加这一行，指定根目录为 app 文件夹
  build: {
    outDir: '../dist', // 可选：如果你希望构建输出在根目录的 dist 文件夹中
    emptyOutDir: true
  }
});
