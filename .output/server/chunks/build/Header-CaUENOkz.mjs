import { e as useRoute, b as useI18n } from './server.mjs';
import { u as useLangControl } from './langControl-Bnu8gFMY.mjs';
import { ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _imports_1 } from './virtual_public-D74N5MyP.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'consola/core';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _imports_0 = publicAssetsURL("/assets/images/logo/logoneww.mp4");
const _sfc_main = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const isActive = ref(false);
    ref("");
    const isMenuOpen = ref(false);
    const isMobile = ref(false);
    const search = ref(null);
    const route = useRoute();
    useLangControl();
    const { locale } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(_attrs)} data-v-d290715c><div class="container" data-v-d290715c><div class="headerFlex" data-v-d290715c><a href="/" class="video" data-v-d290715c><video autoplay loop muted playsinline class="bg-video" data-v-d290715c><source${ssrRenderAttr("src", _imports_0)} type="video/mp4" data-v-d290715c></video></a><div class="headerRight" data-v-d290715c><ul class="${ssrRenderClass({ active: isMenuOpen.value })}" data-v-d290715c><li class="${ssrRenderClass({ active: unref(route).path === _ctx.$t("hakkimizdaLink") })}" data-v-d290715c><a${ssrRenderAttr("href", _ctx.$t("hakkimizdaLink"))} data-v-d290715c>${ssrInterpolate(_ctx.$t("hakkimizda"))}</a></li><li class="${ssrRenderClass({ active: unref(route).path === _ctx.$t("projelerLink") })}" data-v-d290715c><a${ssrRenderAttr("href", _ctx.$t("projelerLink"))} data-v-d290715c>${ssrInterpolate(_ctx.$t("projeler"))}</a></li><li class="${ssrRenderClass({ active: unref(route).path === _ctx.$t("iletisimLink") })}" data-v-d290715c><a${ssrRenderAttr("href", _ctx.$t("iletisimLink"))} data-v-d290715c>${ssrInterpolate(_ctx.$t("iletisim"))}</a></li></ul>`);
      if (isActive.value && isMobile.value) {
        _push(`<div class="search-popup" data-v-d290715c><div class="search-popup-content" data-v-d290715c><input${ssrRenderAttr("value", search.value)} class="search-input" placeholder="Search" data-v-d290715c><button class="close-btn" data-v-d290715c>\u2716</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a href="/" data-v-d290715c><img class="desktopnone"${ssrRenderAttr("src", _imports_1)} data-v-d290715c></a><div class="hamburgerbg" data-v-d290715c><div class="${ssrRenderClass([{ active: isMenuOpen.value }, "hamburger"])}" data-v-d290715c><span data-v-d290715c></span><span data-v-d290715c></span><span data-v-d290715c></span></div></div></div></div></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layouts/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d290715c"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=Header-CaUENOkz.mjs.map
