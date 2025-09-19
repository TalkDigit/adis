import __nuxt_component_0 from './Target-Br3Gz6np.mjs';
import __nuxt_component_1 from './flag-CjcDd6xr.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "VisionMission",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    const { data } = __props;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_IconsTarget = __nuxt_component_0;
      const _component_IconsFlag = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "visionMission" }, _attrs))}><div class="container"><div class="row"><div class="col-sm-12 col-md-6 col-lg-6"><div class="visionContent vision">`);
      _push(ssrRenderComponent(_component_IconsTarget, null, null, _parent));
      _push(`<div>`);
      if (unref(getData)(__props.data, "vision_baslik")) {
        _push(`<h4>${(_a = unref(getData)(__props.data, "vision_baslik")) != null ? _a : ""}</h4>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(getData)(__props.data, "vision_aciklama")) {
        _push(`<p>${(_b = unref(getData)(__props.data, "vision_aciklama")) != null ? _b : ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="col-sm-12 col-md-6 col-lg-6"><div class="visionContent mission">`);
      _push(ssrRenderComponent(_component_IconsFlag, null, null, _parent));
      _push(`<div>`);
      if (unref(getData)(__props.data, "mission_baslik")) {
        _push(`<h4>${(_c = unref(getData)(__props.data, "mission_baslik")) != null ? _c : ""}</h4>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(getData)(__props.data, "mission_aciklama")) {
        _push(`<p>${(_d = unref(getData)(__props.data, "mission_aciklama")) != null ? _d : ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/module/VisionMission.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=VisionMission-Cuoo378u.mjs.map
