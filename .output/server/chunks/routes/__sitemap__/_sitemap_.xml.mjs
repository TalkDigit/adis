import { d as defineEventHandler, x as useSitemapRuntimeConfig, A as withoutLeadingSlash, B as withoutTrailingSlash, C as getRouterParam, i as createError, D as createSitemap } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'vue';
import 'node:fs';
import 'node:url';
import 'consola/core';

const _sitemap__xml = defineEventHandler(async (e) => {
  const runtimeConfig = useSitemapRuntimeConfig(e);
  const { sitemaps } = runtimeConfig;
  const sitemapName = withoutLeadingSlash(withoutTrailingSlash((getRouterParam(e, "sitemap") || e.path)?.replace(".xml", "").replace(runtimeConfig.sitemapsPathPrefix || "", "")));
  const isChunking = typeof sitemaps.chunks !== "undefined" && !Number.isNaN(Number(sitemapName));
  if (!(sitemapName in sitemaps) && !isChunking) {
    return createError({
      statusCode: 404,
      message: `Sitemap "${sitemapName}" not found.`
    });
  }
  return createSitemap(e, isChunking ? {
    ...sitemaps.chunks,
    sitemapName
  } : sitemaps[sitemapName], runtimeConfig);
});

export { _sitemap__xml as default };
//# sourceMappingURL=_sitemap_.xml.mjs.map
