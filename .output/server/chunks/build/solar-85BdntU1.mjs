import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "72.117",
    height: "72.119",
    viewBox: "0 0 72.117 72.119"
  }, _attrs))}><path id="solar-panel" d="M68.512,60.1a3.606,3.606,0,0,0,3.319-5.012L60.643,28.647a3.591,3.591,0,0,0-3.321-2.2H42.377l5.277-6.982c.025-.034.049-.07.072-.106a2.463,2.463,0,0,0-2.112-3.73H39.921l2.614-13.5A1.885,1.885,0,0,0,39.091.85L24.465,20.2c-.025.034-.049.07-.072.106a2.463,2.463,0,0,0,2.112,3.73H32.2l-.465,2.4H14.8a3.587,3.587,0,0,0-3.319,2.2L.288,55.086A3.606,3.606,0,0,0,3.607,60.1H26.444v4.808h-2.4a3.61,3.61,0,0,0-3.606,3.606v1.2a2.406,2.406,0,0,0,2.4,2.4H49.282a2.406,2.406,0,0,0,2.4-2.4v-1.2a3.61,3.61,0,0,0-3.606-3.606h-2.4V60.1ZM19.541,57.7l3.051-13.222H34.857V57.7H19.539ZM37.262,44.474H49.527L52.578,57.7H37.261V44.474ZM69.514,57.157a1.181,1.181,0,0,1-1,.538H55.046L52,44.474H64.73l4.889,11.551a1.176,1.176,0,0,1-.1,1.131ZM58.426,29.581l5.285,12.49H51.44L48.39,28.849h8.933a1.206,1.206,0,0,1,1.1.732Zm-12.506-.732,3.051,13.222H37.261V33.216l3.3-4.367ZM26.5,21.637l-.047-.082L39.725,4,37.283,16.6a1.2,1.2,0,0,0,1.179,1.43l7.193.089L32.392,35.67l2.441-12.6a1.2,1.2,0,0,0-1.179-1.43H26.5Zm4.336,17.924a1.891,1.891,0,0,0,.625.106,1.865,1.865,0,0,0,1.564-.85l1.828-2.42v5.673H23.145L26.2,28.849h5.07l-1.684,8.7a1.87,1.87,0,0,0,1.256,2.016ZM13.693,29.577a1.2,1.2,0,0,1,1.1-.728h8.933L20.678,42.071H8.408l5.286-12.494ZM2.606,57.157a1.181,1.181,0,0,1-.1-1.132l4.889-11.55H20.125L17.074,57.7H3.607a1.181,1.181,0,0,1-1-.538ZM49.282,68.514l0,1.2H22.838v-1.2a1.2,1.2,0,0,1,1.2-1.2H48.08a1.2,1.2,0,0,1,1.2,1.2Zm-6.01-3.606H28.848V60.1H43.272Z" transform="translate(-0.001 0)" fill="#9b9b9b"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/solar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const solar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { solar as default };
//# sourceMappingURL=solar-85BdntU1.mjs.map
