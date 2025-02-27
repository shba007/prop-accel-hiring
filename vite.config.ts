import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: process.env.VITE_APP_BASE_URL ? `${process.env.VITE_APP_BASE_URL}/` : '',
})
