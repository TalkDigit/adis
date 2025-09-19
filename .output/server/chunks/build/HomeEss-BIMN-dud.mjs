import __nuxt_component_0 from './Container-BoUm00_a.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { g as getData } from './index-DrkyPFoa.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'consola/core';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
import 'vue-router';

const _sfc_main = {
  __name: "HomeEss",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    const { data } = __props;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_ModuleContainer = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "essContainer" }, _attrs))}><div class="container"><div class="essContent">`);
      if (unref(getData)(__props.data, "baslik")) {
        _push(`<h5 data-aos="fade-up" data-aos-duration="1000">${(_a = unref(getData)(__props.data, "baslik")) != null ? _a : ""}</h5>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(getData)(__props.data, "alt_baslik")) {
        _push(`<span>${(_b = unref(getData)(__props.data, "alt_baslik")) != null ? _b : ""}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(getData)(__props.data, "aciklama")) {
        _push(`<p>${(_c = unref(getData)(__props.data, "aciklama")) != null ? _c : ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ModuleContainer, null, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/module/HomeEss.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=HomeEss-BIMN-dud.mjs.map
