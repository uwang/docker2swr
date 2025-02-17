import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindICSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), WindICSS()],
})
