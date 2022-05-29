// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        demo1: resolve(__dirname, 'demo1.html'),
        demo2: resolve(__dirname, 'demo2.html'),
      }
    }
  }
})