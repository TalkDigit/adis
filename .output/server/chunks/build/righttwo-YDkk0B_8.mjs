import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "12.079",
    height: "12.08",
    viewBox: "0 0 12.079 12.08"
  }, _attrs))}><g id="Group_3128" data-name="Group 3128" transform="translate(1081.549 -357.089) rotate(45)"><path id="Path_16646" data-name="Path 16646" d="M-3.511,25.412a.579.579,0,0,0,.578-.579V17.449a.579.579,0,0,0-.578-.579H-10.9a.579.579,0,0,0-.579.579.579.579,0,0,0,.579.579h6.806v6.8A.579.579,0,0,0-3.511,25.412Z" transform="translate(-496.526 996.13)" fill="#585858" fill-rule="evenodd"></path><path id="Path_16647" data-name="Path 16647" d="M5.776,18.983a.514.514,0,0,0,.736,0l7.063-7.118a.536.536,0,0,0,0-.749.515.515,0,0,0-.736,0L5.776,18.235a.535.535,0,0,0,0,.749Z" transform="translate(-513.624 1002.403)" fill="#585858" fill-rule="evenodd"></path></g></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/righttwo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=righttwo-YDkk0B_8.mjs.map
