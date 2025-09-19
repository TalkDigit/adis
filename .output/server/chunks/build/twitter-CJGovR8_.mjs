import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    id: "Group_1935",
    "data-name": "Group 1935",
    width: "16.543",
    height: "13.444",
    viewBox: "0 0 16.543 13.444"
  }, _attrs))}><defs><clipPath id="clip-path"><rect id="Rectangle_569" data-name="Rectangle 569" width="16.543" height="13.444" fill="#bcbcbc"></rect></clipPath></defs><g id="Group_1779" data-name="Group 1779" transform="translate(0 0)"><g id="Group_1778" data-name="Group 1778" clip-path="url(#clip-pathdd)"><path id="Path_16558" data-name="Path 16558" d="M0,11.919a9.6,9.6,0,0,0,5.2,1.525,9.6,9.6,0,0,0,9.647-10.1,6.883,6.883,0,0,0,1.694-1.757,6.768,6.768,0,0,1-1.949.534A3.4,3.4,0,0,0,16.086.248a6.814,6.814,0,0,1-2.154.824,3.4,3.4,0,0,0-5.784,3.1,9.631,9.631,0,0,1-7-3.546A3.4,3.4,0,0,0,2.2,5.152,3.367,3.367,0,0,1,.665,4.727,3.4,3.4,0,0,0,3.387,8.1a3.413,3.413,0,0,1-1.533.058,3.4,3.4,0,0,0,3.171,2.357A6.819,6.819,0,0,1,0,11.919" transform="translate(0 0)" fill="#bcbcbc"></path></g></g></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/twitter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_3 as default };
//# sourceMappingURL=twitter-CJGovR8_.mjs.map
