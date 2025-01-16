import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
// export default defineConfig({
//   base: '/',
//   plugins: [react(), svgr()],
// });

// Tentando dar fix no deploy
export default defineConfig({
  base: '/petsz/', // Se não for necessário no Vercel, pode ser removido
  build: {
    outDir: 'docs', // Define a pasta de saída
  },
  plugins: [react(), svgr()],
});
