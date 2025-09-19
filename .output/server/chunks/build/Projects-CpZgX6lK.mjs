import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "projectsPage" }, _attrs))}><div class="container"><div class="titleAbout"><h3> Projects </h3></div><div class="row"><div class="col-sm-12 col-md-6 col-lg-6"><p> Lorem ipsum odor amet, consectetuer adipiscing elit. Ante libero libero nunc facilisis tincidunt. Ipsum praesent duis dictum at cursus. Tincidunt condimentum luctus conubia suscipit maecenas volutpat sed neque. Consectetur porta sapien nec condimentum; magnis feugiat. Faucibus at vivamus dis felis, natoque feugiat sit. Suscipit non facilisis natoque proin ut eget. Semper magna torquent platea aliquam congue, sed tempus. </p></div><div class="col-sm-12 col-md-6 col-lg-6"><p> Lorem ipsum odor amet, consectetuer adipiscing elit. Ante libero libero nunc facilisis tincidunt. Ipsum praesent duis dictum at cursus. Tincidunt condimentum luctus conubia suscipit maecenas volutpat sed neque. Consectetur porta sapien nec condimentum; magnis feugiat. Faucibus at vivamus dis felis, natoque feugiat sit. Suscipit non facilisis natoque proin ut eget. Semper magna torquent platea aliquam congue, sed tempus. </p></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/module/Projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=Projects-CpZgX6lK.mjs.map
