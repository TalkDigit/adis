import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "41.369",
    height: "41.37",
    viewBox: "0 0 41.369 41.37"
  }, _attrs))}><g id="Group_5896" data-name="Group 5896" transform="translate(-1482.25 -1176.25)"><path id="Path_16703" data-name="Path 16703" d="M2,21.435C2,6.86,6.86,2,21.435,2S40.869,6.86,40.869,21.435,36.009,40.87,21.435,40.87,2,36.01,2,21.435Z" transform="translate(1481.5 1175.5)" fill="none" stroke="#a1ca3c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path><path id="Path_16704" data-name="Path 16704" d="M18,27.548l7.774-7.774L18,12" transform="translate(1475.191 1197.581) rotate(-45)" fill="none" stroke="#a1ca3c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path><path id="Path_16705" data-name="Path 16705" d="M12,18H38.324" transform="translate(1467.572 1207.71) rotate(-45)" fill="none" stroke="#a1ca3c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></g></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/greenok.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=greenok-BVp7BJdg.mjs.map
