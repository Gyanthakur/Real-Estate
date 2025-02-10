// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       // '/api': 'http://localhost:8000',
//       '/api': 'https://real-estate-12wq.onrender.com',

//     },
//   },
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://real-estate-zpov.onrender.com",
        changeOrigin: true, // ✅ Ensures the request appears as if it's from the backend
        secure: false, // ✅ Ignore SSL issues (only if necessary)
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
