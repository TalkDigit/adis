import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    id: "Group_1786",
    "data-name": "Group 1786",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: "21.21",
    height: "14.943",
    viewBox: "0 0 21.21 14.943"
  }, _attrs))}><defs><clipPath id="clip-path"><rect id="Rectangle_574" data-name="Rectangle 574" width="21.21" height="14.943" fill="#bcbcbc"></rect></clipPath></defs><g id="Group_1788" data-name="Group 1788" transform="translate(0 0)"><g id="Group_1787" data-name="Group 1787" clip-path="url(#clip-pathwww)"><path id="Path_16561" data-name="Path 16561" d="M20.767,2.333A2.663,2.663,0,0,0,18.891.446C17.238,0,10.6,0,10.6,0S3.972,0,2.318.446A2.664,2.664,0,0,0,.443,2.333,27.984,27.984,0,0,0,0,7.472,27.978,27.978,0,0,0,.443,12.61,2.666,2.666,0,0,0,2.318,14.5c1.654.446,8.287.446,8.287.446s6.633,0,8.287-.446a2.665,2.665,0,0,0,1.875-1.888,27.935,27.935,0,0,0,.444-5.138,27.941,27.941,0,0,0-.444-5.139M8.436,10.626V4.319l5.543,3.154Z" transform="translate(0 0)" fill="#bcbcbc"></path></g></g></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/youtube.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const youtube = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { youtube as default };
//# sourceMappingURL=youtube-C5IeTLvS.mjs.map
