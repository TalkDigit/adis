import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "26.5",
    height: "26.5",
    viewBox: "0 0 26.5 26.5"
  }, _attrs))}><g id="Group_5897" data-name="Group 5897" transform="translate(-1482.75 -1176.75)"><path id="Path_16703" data-name="Path 16703" d="M2,14.5C2,5.126,5.126,2,14.5,2S27,5.126,27,14.5,23.874,27,14.5,27,2,23.874,2,14.5Z" transform="translate(1481.5 1175.5)" fill="none" stroke="#0c4282" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path id="Path_16704" data-name="Path 16704" d="M18,22.022l5.011-5.011L18,12" transform="translate(1476.242 1173.028)" fill="none" stroke="#0c4282" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path id="Path_16705" data-name="Path 16705" d="M12,18H27.782" transform="translate(1471.5 1172.039)" fill="none" stroke="#0c4282" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></g></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/right.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const right = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { right as default };
//# sourceMappingURL=right-BiVHQQ1A.mjs.map
