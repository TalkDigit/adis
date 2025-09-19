import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { g as getData } from './index-DrkyPFoa.mjs';
import { g as getAssets } from './index-Bp1SuHYF.mjs';
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
  __name: "HomeMultiCard",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    const { data } = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "energySection" }, _attrs))}><div class="container"><div class="row"><!--[-->`);
      ssrRenderList(__props.data.element.module, (item) => {
        var _a, _b;
        _push(`<div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-4"><div class="energyContent" data-aos="zoom-in" data-aos-duration="1000"><div class="energyIcon"><img width="auto" height="auto"${ssrRenderAttr("src", unref(getAssets)(unref(getData)(item, "icon")))}></div><h4>${(_a = unref(getData)(item, "baslik")) != null ? _a : ""}</h4><p>${(_b = unref(getData)(item, "aciklama")) != null ? _b : ""}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/module/HomeMultiCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=HomeMultiCard-BZ5XCUcv.mjs.map
