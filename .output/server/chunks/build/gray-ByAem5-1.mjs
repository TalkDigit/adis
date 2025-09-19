import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "125.997",
    height: "126",
    viewBox: "0 0 125.997 126"
  }, _attrs))}><g id="Group_5872" data-name="Group 5872" transform="translate(-1482.75 -1176.75)"><path id="Path_16703" data-name="Path 16703" d="M2,64.25C2,17.566,17.566,2,64.25,2S126.5,17.566,126.5,64.25,110.932,126.5,64.25,126.5,2,110.934,2,64.25Z" transform="translate(1481.5 1175.5)" fill="none" stroke="#d6d6d6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path id="Path_16704" data-name="Path 16704" d="M18,61.8,42.9,36.9,18,12" transform="translate(1519.023 1203.044)" fill="none" stroke="#d6d6d6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path id="Path_16705" data-name="Path 16705" d="M12,18H90.423" transform="translate(1471.5 1221.944)" fill="none" stroke="#d6d6d6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></g></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/gray.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=gray-ByAem5-1.mjs.map
