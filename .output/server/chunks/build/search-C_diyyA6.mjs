import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "23.01",
    height: "23.01",
    viewBox: "0 0 23.01 23.01"
  }, _attrs))}><g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(-3.5 -3.5)"><path id="Path_16717" data-name="Path 16717" d="M24.388,14.444A9.944,9.944,0,1,1,14.444,4.5a9.944,9.944,0,0,1,9.944,9.944Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path id="Path_16718" data-name="Path 16718" d="M28.6,28.6l-3.629-3.629" transform="translate(-3.508 -3.508)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { search as default };
//# sourceMappingURL=search-C_diyyA6.mjs.map
