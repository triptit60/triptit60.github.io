import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,//automatically open the  app in the browser
    port: 3000,//set the server port 
  },
});
