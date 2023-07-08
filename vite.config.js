import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
})

// reactpress run build setup
// export default defineConfig(({ command }) => {
//   if (command === 'build') {
//     return {
//       base: "/wp-content/reactpress/apps/pavlik-photography/dist/",
//       plugins: [react()],
//     }
//   } else {
//     return {
//       plugins: [react()],
//     }
//   }
// })
