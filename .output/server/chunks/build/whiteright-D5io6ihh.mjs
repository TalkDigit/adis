import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "25.604",
    height: "25.605",
    viewBox: "0 0 25.604 25.605"
  }, _attrs))}><g id="Group_5916" data-name="Group 5916" transform="translate(-1482.75 -1176.75)"><path id="Path_16703" data-name="Path 16703" d="M2,14.052C2,5.014,5.014,2,14.052,2S26.1,5.014,26.1,14.052,23.091,26.1,14.052,26.1,2,23.091,2,14.052Z" transform="translate(1481.5 1175.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path id="Path_16704" data-name="Path 16704" d="M18,21.642l4.821-4.821L18,12" transform="translate(1475.863 1172.769)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path id="Path_16705" data-name="Path 16705" d="M12,18H27.184" transform="translate(1471.5 1171.59)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></g></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/whiteright.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const whiteright = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { whiteright as default };
//# sourceMappingURL=whiteright-D5io6ihh.mjs.map
