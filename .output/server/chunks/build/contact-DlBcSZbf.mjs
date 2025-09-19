import __nuxt_component_0 from './phonee-CZHSZQHa.mjs';
import __nuxt_component_2 from './emaill-cLzg-RLT.mjs';
import __nuxt_component_3 from './adress-BdVNJYPc.mjs';
import __nuxt_component_4 from './form-1nqdbPuL.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Kvkk-V21-pvaN.mjs';
import './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'consola/core';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_IconsPhonee = __nuxt_component_0;
  const _component_IconsEmaill = __nuxt_component_2;
  const _component_IconsAdress = __nuxt_component_3;
  const _component_ModuleForm = __nuxt_component_4;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact" }, _attrs))}><div class="container"><div class="row"><div class="col-sm-12 col-md-12 col-lg-8 col-xl-6"><div class="contact-main"><div class="contact-content-title"><h1>\u0130leti\u015Fime Ge\xE7</h1><p>Contact Us</p></div><div class="contact-details"><a href="tel:0 000 000 00 00" class="contact-item">`);
  _push(ssrRenderComponent(_component_IconsPhonee, null, null, _parent));
  _push(`<div class="contact-item-content"><h2>Telephone:</h2><p>0 000 000 00 00</p></div></a><a href="mailto:info@adisenerji.com.tr" class="contact-item">`);
  _push(ssrRenderComponent(_component_IconsEmaill, null, null, _parent));
  _push(`<div class="contact-item-content"><h2>E-Mail: </h2><p>info@adisenerji.com.tr</p></div></a><a href="#" target="_blank" class="contact-item">`);
  _push(ssrRenderComponent(_component_IconsAdress, null, null, _parent));
  _push(`<div class="contact-item-content"><h2>Adres</h2><p>Ferko Signature, Esentepe, B\xFCy\xFCkdere Cd. No:175, 34394 \u015Ei\u015Fli / \u0130stanbul</p></div></a></div>`);
  _push(ssrRenderComponent(_component_ModuleForm, null, null, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { contact as default };
//# sourceMappingURL=contact-DlBcSZbf.mjs.map
