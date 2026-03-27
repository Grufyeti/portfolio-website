import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild',
    cssMinify: 'esbuild',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        webdesignWienerNeustadt: resolve(
          __dirname,
          'webdesign-wiener-neustadt/index.html',
        ),
        websiteRelaunchKleineUnternehmen: resolve(
          __dirname,
          'website-relaunch-kleine-unternehmen/index.html',
        ),
        hostingDeploymentReverseProxy: resolve(
          __dirname,
          'hosting-deployment-reverse-proxy/index.html',
        ),
      },
    },
  },
});
