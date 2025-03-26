import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Usa polling para detectar cambios en archivos
    },
    host: true, // Permite acceder desde otros dispositivos si es necesario
    strictPort: true, // Evita que cambie el puerto si está ocupado
    port: 5173, // Especifica un puerto (puedes cambiarlo si quieres)
  }
})