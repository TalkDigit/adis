import _sfc_main$1 from './HomeTab-DGMXXpD0.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { g as getData } from './index-DrkyPFoa.mjs';
import './rightold-CE7bTiP4.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './info-DzkEbfEJ.mjs';
import './Mapss-k2t6IpTx.mjs';
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
  __name: "HomeTabSection",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    const { data } = __props;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_ModuleHomeTab = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "homeTab" }, _attrs))}><div class="container"><div class="row"><div class="col-sm-12 col-md-12 col-lg-4">`);
      if (unref(getData)(__props.data, "baslik")) {
        _push(`<h5 data-aos="fade-up" data-aos-duration="1000">${(_a = unref(getData)(__props.data, "baslik")) != null ? _a : ""}</h5>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(getData)(__props.data, "editor")) {
        _push(`<div>${(_b = unref(getData)(__props.data, "editor")) != null ? _b : ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-sm-12 col-md-12 col-lg-8">`);
      _push(ssrRenderComponent(_component_ModuleHomeTab, null, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/module/HomeTabSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=HomeTabSection-C4FNBKoz.mjs.map
