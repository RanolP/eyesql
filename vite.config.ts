import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), svgrPlugin()],
});
