import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "51.695",
    height: "62.795",
    viewBox: "0 0 51.695 62.795"
  }, _attrs))}><g id="flag" transform="translate(-45.077)"><path id="Path_25100" data-name="Path 25100" d="M87.935,14.949,96.45,4.306c-2.063-.249-18.42-4.6-34.751-1.1V0H58.005V44.56a7.4,7.4,0,0,0-5.541,7.154V51.9a9.25,9.25,0,0,0-7.388,9.049v1.847H74.628V60.948A9.25,9.25,0,0,0,67.24,51.9v-.186A7.4,7.4,0,0,0,61.7,44.56V29.2c18.88-3.816,32.522.872,35.072,1.211ZM70.617,59.1H49.087a5.55,5.55,0,0,1,5.224-3.694H65.393A5.55,5.55,0,0,1,70.617,59.1Zm-7.071-7.388H56.158a3.694,3.694,0,0,1,7.388,0ZM61.7,25.435V6.99c8.167-1.88,17.373-1.94,28.016-.179L83.483,14.6l6.009,10.515a77.725,77.725,0,0,0-27.792.318Z" fill="#fff"></path></g></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/flag.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=flag-CjcDd6xr.mjs.map
