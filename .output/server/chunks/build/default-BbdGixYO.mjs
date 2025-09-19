import __nuxt_component_0 from './Header-CaUENOkz.mjs';
import __nuxt_component_1 from './Footer-Ch46idXr.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './langControl-Bnu8gFMY.mjs';
import './virtual_public-D74N5MyP.mjs';
import './headset-D27Ix1sv.mjs';
import './facebook-B3kJY8f3.mjs';
import './instagram-zuZzNgzb.mjs';
import './twitter-CJGovR8_.mjs';
import './linkedin-DopAoBJC.mjs';
import './mail-s6sRdTD0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutsHeader = __nuxt_component_0;
  const _component_LayoutsFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_LayoutsHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if (_ctx.$route.path !== "/iletisim" && _ctx.$route.path !== "/en/contact") {
    _push(ssrRenderComponent(_component_LayoutsFooter, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-BbdGixYO.mjs.map
