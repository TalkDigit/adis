import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "39.795",
    height: "31.836",
    viewBox: "0 0 39.795 31.836"
  }, _attrs))}><g id="mail" transform="translate(-2 -4)"><path id="Path_16916" data-name="Path 16916" d="M35.826,6.985a2.981,2.981,0,0,1,2.985,2.985v19.9a2.981,2.981,0,0,1-2.985,2.985H7.969a2.981,2.981,0,0,1-2.985-2.985V9.969A2.981,2.981,0,0,1,7.969,6.985Zm0-2.985H7.969A5.961,5.961,0,0,0,2,9.969v19.9a5.961,5.961,0,0,0,5.969,5.969H35.826A5.961,5.961,0,0,0,41.8,29.867V9.969A5.961,5.961,0,0,0,35.826,4Z" fill="#565656"></path><path id="Path_16917" data-name="Path 16917" d="M18.685,18a7.477,7.477,0,0,1-4.139-1.254l-8.636-5.75A1.493,1.493,0,1,1,7.562,8.506l8.636,5.75a4.445,4.445,0,0,0,4.974,0l8.636-5.75a1.493,1.493,0,0,1,1.652,2.487l-8.636,5.75A7.477,7.477,0,0,1,18.685,18Z" transform="translate(3.212 4.21)" fill="#565656"></path></g></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/mail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_5 as default };
//# sourceMappingURL=mail-s6sRdTD0.mjs.map
