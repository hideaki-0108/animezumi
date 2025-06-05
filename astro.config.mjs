// @ts-check
import {
  defineConfig
} from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '/',
  outDir: 'dist/',
  build: {
    assets: '_astro'
  }
});