import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({ plugins: [react(), VitePWA({ registerType: 'autoUpdate', includeAssets: [], manifest: { name: 'Folio Reader', short_name: 'Folio', description: 'Your personal offline reading space', theme_color: '#f6f4ef', background_color: '#f6f4ef', display: 'standalone', orientation: 'any', start_url: '/', icons: [] }, workbox: { navigateFallback: '/index.html', globPatterns: ['**/*.{js,css,html,svg,png,woff2}'] } })], server: { host: '0.0.0.0' } });
