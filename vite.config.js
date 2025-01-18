// https://vitejs.dev/config/
// export default defineConfig({
//   base: '/',
//   plugins: [react(), svgr()],
// });

// Tentando dar fix no deploy
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  base: isGitHubPages ? '/petsz/' : '/', // Define o base dinamicamente
  build: {
    outDir: 'docs', // Pasta de saída para GitHub Pages
  },
  plugins: [react(), svgr()],
});
