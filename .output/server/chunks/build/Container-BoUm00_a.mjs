import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'consola/core';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _imports_0 = publicAssetsURL("/assets/images/kutu-min.webp");
const _sfc_main = {
  mounted() {
    this.observeMarkers();
  },
  methods: {
    observeMarkers() {
      const markers = (void 0).querySelectorAll(".marker");
      const options = {
        threshold: 0.5
        // Marker %50 görünür olduğunda tetiklenir
      };
      const observer = new IntersectionObserver((entries, observer2) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      }, options);
      markers.forEach((marker) => observer.observe(marker));
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "containerImg" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} width="857" height="522" alt="Raf G\xF6rseli"><div class="marker" data-line="vertical" style="${ssrRenderStyle({ "width": "90px", "height": "90px", "top": "-14%", "right": "22%" })}"><span class="label">Raf</span></div><div class="marker" data-line="diagonal-left" style="${ssrRenderStyle({ "width": "113px", "height": "113px", "top": "-14%", "right": "9%" })}"><span class="label">Mod\xFCl</span></div><div class="marker" data-line="diagonal-right" style="${ssrRenderStyle({ "width": "221px", "height": "221px", "top": "3%", "right": "-9%" })}"><span class="label">S\u0131v\u0131 So\u011Futma <br> \xDCnitesi</span></div><div class="marker" data-line="dashed-vertical" style="${ssrRenderStyle({ "width": "153px", "height": "153px", "top": "58%", "right": "-3%" })}"><span class="label">Kontrol <br> Paneli</span></div><div class="marker" data-line="dashed-diagonal" style="${ssrRenderStyle({ "width": "206px", "height": "206px", "bottom": "-43%", "right": "24%" })}"><span class="label">HV Kutu</span></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/module/Container.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=Container-BoUm00_a.mjs.map
