import _sfc_main$1 from './About-CaeuryrI.mjs';
import _sfc_main$2 from './VisionMission-Cuoo378u.mjs';
import _sfc_main$3 from './AboutFuture-BGxPUrwe.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-DrkyPFoa.mjs';
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
import './Target-Br3Gz6np.mjs';
import './flag-CjcDd6xr.mjs';
import './righttwo-YDkk0B_8.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ModuleAbout = _sfc_main$1;
  const _component_ModuleVisionMission = _sfc_main$2;
  const _component_ModuleAboutFuture = _sfc_main$3;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_ModuleAbout, null, null, _parent));
  _push(ssrRenderComponent(_component_ModuleVisionMission, null, null, _parent));
  _push(ssrRenderComponent(_component_ModuleAboutFuture, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/aboutUs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { aboutUs as default };
//# sourceMappingURL=aboutUs-CEinyHwH.mjs.map
