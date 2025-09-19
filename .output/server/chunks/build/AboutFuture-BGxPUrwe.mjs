import __nuxt_component_0 from './righttwo-YDkk0B_8.mjs';
import { u as useHead } from './server.mjs';
import { resolveComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { g as getData } from './index-DrkyPFoa.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
  __name: "AboutFuture",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    useHead({
      script: [{ src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" }]
    });
    const { data } = __props;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_lottie_player = resolveComponent("lottie-player");
      const _component_IconsRighttwo = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "aboutFuture" }, _attrs))}><div class="container"><div class="futureTitle"><h4>`);
      if (unref(getData)(__props.data, "ilk_satir")) {
        _push(`<label>${(_a = unref(getData)(__props.data, "ilk_satir")) != null ? _a : ""}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<br>`);
      if (unref(getData)(__props.data, "ikinci_satir")) {
        _push(`<span>${(_b = unref(getData)(__props.data, "ikinci_satir")) != null ? _b : ""}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h4>`);
      if (unref(getData)(__props.data, "aciklama")) {
        _push(`<p>${(_c = unref(getData)(__props.data, "aciklama")) != null ? _c : ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_lottie_player, {
        src: "/assets/json/about.json",
        background: "transparent",
        speed: "1",
        style: { "width": "982px", "height": "981px" },
        loop: "",
        autoplay: ""
      }, null, _parent));
      _push(`<div class="bottomAbout"><div>`);
      if (unref(getData)(__props.data, "alt_baslik")) {
        _push(`<h5>${(_d = unref(getData)(__props.data, "alt_baslik")) != null ? _d : ""}</h5>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(getData)(__props.data, "link_baslik")) {
        _push(`<a class="mobile__none"${ssrRenderAttr("href", unref(getData)(__props.data, "link"))}>${ssrInterpolate(unref(getData)(__props.data, "link_baslik"))} `);
        _push(ssrRenderComponent(_component_IconsRighttwo, null, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(getData)(__props.data, "alt_aciklama")) {
        _push(`<p>${(_e = unref(getData)(__props.data, "alt_aciklama")) != null ? _e : ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(getData)(__props.data, "link_baslik")) {
        _push(`<a class="desktop__none"${ssrRenderAttr("href", unref(getData)(__props.data, "link"))}>${ssrInterpolate(unref(getData)(__props.data, "link_baslik"))} `);
        _push(ssrRenderComponent(_component_IconsRighttwo, null, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/module/AboutFuture.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AboutFuture-BGxPUrwe.mjs.map
