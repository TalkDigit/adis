import __nuxt_component_0 from './greenok-BVp7BJdg.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { g as getData } from './index-DrkyPFoa.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
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
  __name: "HomeMore",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    const { data } = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsGreenok = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "homeMore" }, _attrs))}><div class="container"><h5 data-aos="fade-up" data-aos-duration="1000">ENERJ\u0130 VE <br>SANAY\u0130 DAHA<b> FAZLASI</b></h5><div class="moreFlex"><div class="row"><!--[-->`);
      ssrRenderList(__props.data.element.module, (item) => {
        var _a;
        _push(`<div class="col-sm-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1000"><a${ssrRenderAttr("href", unref(getData)(item, "link"))}>`);
        _push(ssrRenderComponent(_component_IconsGreenok, null, null, _parent));
        _push(` <span>${(_a = unref(getData)(item, "baslik")) != null ? _a : ""}</span></a></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/module/HomeMore.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=HomeMore-PnXGSNTQ.mjs.map
