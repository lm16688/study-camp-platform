import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, "./app"),  // 设置项目根目录为 app 文件夹
  base: './',
  plugins: [inspectAttr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app/src"),  // 调整 alias 指向 app/src
    },
  },
  build: {
    outDir: path.resolve(__dirname, "./dist"),  // 构建输出到项目根目录的 dist
    emptyOutDir: true,
  },
});
