import __nuxt_component_0 from './SocialSlider-Y-IWpOy9.mjs';
import { u as useHead } from './server.mjs';
import { resolveComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "HomeSocial",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    useHead({
      script: [{ src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" }]
    });
    const { data } = __props;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_lottie_player = resolveComponent("lottie-player");
      const _component_ModuleSocialSlider = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "socialSection" }, _attrs))}><div class="container"><div class="socialTitle">`);
      if (unref(getData)(__props.data, "baslik")) {
        _push(`<h5 data-aos="fade-up">${(_a = unref(getData)(__props.data, "baslik")) != null ? _a : ""}</h5>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(getData)(__props.data, "aciklama")) {
        _push(`<p data-aos="fade-up" data-aos-duration="1000">${(_b = unref(getData)(__props.data, "aciklama")) != null ? _b : ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div><div class="lottie">`);
      _push(ssrRenderComponent(_component_lottie_player, {
        src: "/assets/json/circle.json",
        background: "transparent",
        speed: "1",
        style: { "width": "100%", "max-width": "1920px", "height": "1920px" },
        loop: "",
        autoplay: ""
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ModuleSocialSlider, null, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/module/HomeSocial.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=HomeSocial-YJGX9EkG.mjs.map
