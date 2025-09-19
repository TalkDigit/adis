import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "72",
    height: "72",
    viewBox: "0 0 82.531 61.918"
  }, _attrs))}><g id="lighting" transform="translate(0 -3.001)"><path id="Path_34393" data-name="Path 34393" d="M32.92,55.6H15.72a1.72,1.72,0,1,1,0-3.44h17.2A5.166,5.166,0,0,0,38.08,47v-3.44a1.721,1.721,0,0,1,1.72-1.72H43.21a1.721,1.721,0,0,0,1.72-1.72V19.48a1.721,1.721,0,0,0-1.72-1.72H39.8a1.721,1.721,0,0,1-1.72-1.72V12.6a5.166,5.166,0,0,0-5.16-5.16H22.6A1.72,1.72,0,1,1,22.6,4H32.92a8.612,8.612,0,0,1,8.6,8.6v1.72H43.21a5.166,5.166,0,0,1,5.16,5.16v20.64a5.166,5.166,0,0,1-5.16,5.16H41.521V47A8.612,8.612,0,0,1,32.92,55.6Z" transform="translate(34.161 2.438)" fill="#9b9b9b"></path><path id="Path_34394" data-name="Path 34394" d="M22.36,55.6H8.6A8.612,8.612,0,0,1,0,47V12.6A8.612,8.612,0,0,1,8.6,4h24.08a1.72,1.72,0,1,1,0,3.44H8.6A5.166,5.166,0,0,0,3.44,12.6V47a5.166,5.166,0,0,0,5.16,5.16H22.36a1.72,1.72,0,1,1,0,3.44Z" transform="translate(0 2.438)" fill="#9b9b9b"></path><path id="Path_34395" data-name="Path 34395" d="M16.142,64.919a1.717,1.717,0,0,1-1.631-2.26l7.2-21.82H8.22a1.72,1.72,0,0,1-1.414-2.7l23.826-34.4a1.721,1.721,0,0,1,3.1,1.349L28.884,27.078H42.621a1.718,1.718,0,0,1,1.362,2.769L17.5,64.248a1.71,1.71,0,0,1-1.362.671ZM11.505,37.4H24.1a1.718,1.718,0,0,1,1.631,2.26L20.945,54.138,39.125,30.518H26.745a1.723,1.723,0,0,1-1.682-2.092l3.426-15.553Z" transform="translate(15.861 0)" fill="#9b9b9b"></path></g></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/lighting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lighting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { lighting as default };
//# sourceMappingURL=lighting-DR9ugpa0.mjs.map
