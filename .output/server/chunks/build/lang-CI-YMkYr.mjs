import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useLangControl } from './langControl-Bnu8gFMY.mjs';
import { b as useI18n } from './server.mjs';
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

const _sfc_main = {
  __name: "lang",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const langStore = useLangControl();
    const { locale } = useI18n();
    const isDropdownOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dropdown language" }, _attrs))}><button class="langBtn">${ssrInterpolate(unref(locale))}</button><ul class="${ssrRenderClass([{ show: isDropdownOpen.value }, "dropdown-menu"])}">`);
      if (unref(locale) === "tr") {
        _push(`<li><a${ssrRenderAttr("href", unref(langStore).route.en)} class="dropdown-item">EN</a></li>`);
      } else {
        _push(`<li><a${ssrRenderAttr("href", unref(langStore).route.tr)} class="dropdown-item">TR</a></li>`);
      }
      _push(`</ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/module/lang.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=lang-CI-YMkYr.mjs.map
