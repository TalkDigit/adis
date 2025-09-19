import { d as defineEventHandler, u as useRuntimeConfig } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'vue';
import 'node:fs';
import 'node:url';
import 'consola/core';

const tr = defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();
    const domain = "https://adis.talksolutions.dev";
    let response = [
      ...[
        "/"
      ].map((url) => {
        return {
          loc: domain + url,
          lastmod: (/* @__PURE__ */ new Date()).toISOString(),
          changefreq: "daily",
          priority: 1
        };
      })
    ];
    const apiKey = "5666d5e1ba99a8dac3863b7ba36535ae";
    const getData = (url, type = "GET") => {
      return $fetch(config.public.apiBase + url, {
        method: type
        //body  : body,
      });
    };
    await Promise.all([
      getData("tr/moduldata/sayfalar", "POST").then((pages) => {
        var _a;
        if (pages == null ? void 0 : pages.success) {
          response = [
            ...response,
            ...[{
              loc: domain,
              lastmod: (/* @__PURE__ */ new Date()).toISOString(),
              changefreq: "daily",
              priority: 1
            }]
          ];
          for (let i = 0; i < ((_a = pages == null ? void 0 : pages.data) == null ? void 0 : _a.length); i++) {
            const category = pages == null ? void 0 : pages.data[i];
            response = [
              ...response,
              ...[{
                loc: domain + "/" + category.data.slug.tr,
                lastmod: (/* @__PURE__ */ new Date()).toISOString(),
                changefreq: "daily",
                priority: 1
              }]
            ];
          }
        }
      })
    ]);
    return response;
  } catch (error) {
    console.error("Error fetching sitemap data:", error);
    return [];
  }
});

export { tr as default };
//# sourceMappingURL=tr.mjs.map
