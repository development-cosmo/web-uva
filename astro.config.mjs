// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

/**
 * Integración nativa de Sitemap compatible con Astro 4 y Vercel
 * (Evita el bug de `_routes.reduce` de @astrojs/sitemap 3.4+ en Astro 4)
 */
function uvaSitemapIntegration() {
  let siteConfig;
  return {
    name: 'uva-sitemap',
    hooks: {
      'astro:config:done': ({ config }) => {
        siteConfig = config;
      },
      'astro:build:done': async ({ dir, pages }) => {
        const baseUrl = siteConfig?.site || 'https://www.uvasoft.co';
        const urls = pages.map((p) => {
          const cleanPath = p.pathname.startsWith('/') ? p.pathname.slice(1) : p.pathname;
          return new URL(cleanPath, baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`).href;
        });

        const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>`;

        const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${new URL('sitemap-0.xml', baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`).href}</loc></sitemap>
</sitemapindex>`;

        const outDir = fileURLToPath(dir);
        await fs.writeFile(`${outDir}/sitemap-0.xml`, sitemapXml, 'utf-8');
        await fs.writeFile(`${outDir}/sitemap-index.xml`, sitemapIndexXml, 'utf-8');
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://www.uvasoft.co',
  integrations: [
    react(),
    tailwind(),
    uvaSitemapIntegration(),
  ],
  trailingSlash: 'always',
});
