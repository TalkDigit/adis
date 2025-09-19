import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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
  __name: "HomeLinkBanner",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    const { data } = __props;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "HomeFuture" }, _attrs))}><div class="container"><div class="futureContent"><div><div class="flextitle">`);
      if (unref(getData)(__props.data, "baslik")) {
        _push(`<h3 data-aos="fade-up" data-aos-duration="1000">${(_a = unref(getData)(__props.data, "baslik")) != null ? _a : ""}</h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="futureBottom">`);
      if (unref(getData)(__props.data, "kalin_baslik")) {
        _push(`<b data-aos="fade-up" data-aos-duration="2000" class="mobileNone">${(_b = unref(getData)(__props.data, "kalin_baslik")) != null ? _b : ""}</b>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(getData)(__props.data, "aciklama")) {
        _push(`<p>${(_c = unref(getData)(__props.data, "aciklama")) != null ? _c : ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/module/HomeLinkBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=HomeLinkBanner-vtbseajP.mjs.map
