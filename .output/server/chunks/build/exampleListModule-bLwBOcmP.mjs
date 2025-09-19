import { unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { g as getData } from './index-DrkyPFoa.mjs';
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
  __name: "exampleListModule",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    const { data } = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(__props.data.element.module, (item) => {
        var _a;
        _push(`<div><p>${(_a = unref(getData)(item, "baslik")) != null ? _a : ""}</p></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/module/exampleListModule.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=exampleListModule-bLwBOcmP.mjs.map
