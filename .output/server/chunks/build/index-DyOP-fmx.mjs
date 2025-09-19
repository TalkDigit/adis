import { u as usePage } from './Page-B3QKidQr.mjs';
import { b as useI18n, e as useRoute, f as useRouter, g as useSeoMeta, c as callOnce } from './server.mjs';
import { computed, withAsyncContext, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { k as keyConvert } from './index-Bo_8ZrUJ.mjs';
import { g as getData } from './index-DrkyPFoa.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'consola/core';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const PageStore = usePage(), { locale } = useI18n();
    useRoute();
    useRouter();
    const Page = computed(() => {
      const data = PageStore.HomePage;
      if (data == null) {
        PageStore.fetchHomePage();
        return false;
      }
      useSeoMeta({
        title: null,
        ogTitle: null,
        twitterTitle: null,
        description: data.data.description && data.data.description[locale.value] ? data.data.description[locale.value] : null,
        ogDescription: data.data.description && data.data.description[locale.value] ? data.data.description[locale.value] : null,
        twitterDescription: data.data.description && data.data.description[locale.value] ? data.data.description[locale.value] : null
      });
      return data.data;
    });
    [__temp, __restore] = withAsyncContext(() => callOnce(PageStore.fetchHomePage, "$PslAyef5YX")), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(Page)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
        ssrRenderList(unref(Page).modul, (item) => {
          _push(`<!--[-->`);
          if (unref(getData)(item, "durum")) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent("Module" + unref(keyConvert)(item.key)), {
              data: item,
              page: unref(Page)
            }, null), _parent);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DyOP-fmx.mjs.map
