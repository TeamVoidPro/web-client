import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    port: 3000,
  },
  // make @ point to the root src directory
    resolve: {
        alias: {
            '@': '/src'
        }
    }
})
