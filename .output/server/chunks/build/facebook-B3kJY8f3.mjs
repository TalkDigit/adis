import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    id: "Group_1772",
    "data-name": "Group 1772",
    width: "8.663",
    height: "18.768",
    viewBox: "0 0 8.663 18.768"
  }, _attrs))}><defs><clipPath id="clip-path"><rect id="Rectangle_565" data-name="Rectangle 565" width="8.663" height="18.768" fill="#bcbcbc"></rect></clipPath></defs><g id="Group_1771" data-name="Group 1771" transform="translate(0 0)"><g id="Group_1770" data-name="Group 1770" clip-path="url(#clip-path)"><path id="Path_16554" data-name="Path 16554" d="M1.966,18.768H5.745V9.3H8.381l.281-3.168H5.745v-1.8c0-.747.15-1.043.873-1.043H8.663V0H6.046c-2.812,0-4.08,1.238-4.08,3.609V6.135H0V9.344H1.966Z" transform="translate(0 0)" fill="#bcbcbc"></path></g></g></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/facebook.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=facebook-B3kJY8f3.mjs.map
