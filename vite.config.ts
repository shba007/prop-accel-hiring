import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_APP_BASE_URL ? `${process.env.VITE_APP_BASE_URL}/` : '',
})
