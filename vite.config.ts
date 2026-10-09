import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';
import {BLOG_LAUNCHED} from './src/content/blog';
import {buildBlogRss} from './src/content/blog/rss';

const SITE_URL = process.env.SITE_URL ?? 'https://rcaas.tech';

// Writes /blog/rss.xml at build (and serves it in dev), only once the blog has launched.
const blogRss = (): Plugin => ({
  name: 'blog-rss',
  configureServer(server) {
    server.middlewares.use('/blog/rss.xml', (_req, res, next) => {
      if (!BLOG_LAUNCHED) return next();
      res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
      res.end(buildBlogRss(SITE_URL));
    });
  },
  generateBundle() {
    if (!BLOG_LAUNCHED) return;
    this.emitFile({type: 'asset', fileName: 'blog/rss.xml', source: buildBlogRss(SITE_URL)});
  },
});

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), blogRss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
