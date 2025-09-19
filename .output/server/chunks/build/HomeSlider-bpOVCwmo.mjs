import { u as useHead } from './server.mjs';
import { ref, resolveComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { g as getData } from './index-DrkyPFoa.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'consola/core';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _imports_0 = publicAssetsURL("/assets/images/sliderImg.webp");
const _sfc_main = {
  __name: "HomeSlider",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    const lottieRef = ref(null);
    useHead({
      script: [{ src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" }]
    });
    const { data } = __props;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_lottie_player = resolveComponent("lottie-player");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "HomeEnergy" }, _attrs))}><div class="container"><div class="row"><div class="col-sm-12 col-md-6 col-lg-6" data-aos="fade-up" data-aos-duration="3000"><div class="energyContent">`);
      if (unref(getData)(__props.data, "baslik")) {
        _push(`<span>${(_a = unref(getData)(__props.data, "baslik")) != null ? _a : ""}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(getData)(__props.data, "alt_baslik")) {
        _push(`<h2>${(_b = unref(getData)(__props.data, "alt_baslik")) != null ? _b : ""}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a${ssrRenderAttr("href", unref(getData)(__props.data, "link"))}>${ssrInterpolate(unref(getData)(__props.data, "link_baslik"))} `);
      _push(ssrRenderComponent(_component_lottie_player, {
        ref_key: "lottieRef",
        ref: lottieRef,
        src: "/assets/json/adis-buton2.json",
        background: "transparent",
        speed: "1",
        style: { "width": "40px", "height": "40px" }
      }, null, _parent));
      _push(`</a></div></div><div class="col-sm-12 col-md-6 col-lg-6 afterImg"><img width="auto" height="auto"${ssrRenderAttr("src", _imports_0)} alt=""></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/module/HomeSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=HomeSlider-bpOVCwmo.mjs.map
