import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    // Opción para habilitar el enrutamiento del lado del cliente.
    // Todas las rutas desconocidas se redirigen al punto de entrada de la aplicación (index.html).
    // Esto permite que React Router controle las rutas.
    historyApiFallback: true
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }}}
})

