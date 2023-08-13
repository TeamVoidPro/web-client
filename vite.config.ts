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
            '@': '/src',
            '@types': '/src/types',
            '@images': '/src/assets/images',
            '@assets': '/src/assets',
            '@components': '/src/components',
            '@pages': '/src/pages',
            '@router': '/src/router',
            '@store': '/src/store',
            '@utils': '/src/utils',
            '@views': '/src/views',
            '@layouts': '/src/layouts',
            '@plugins': '/src/plugins',
        }
    }
})
