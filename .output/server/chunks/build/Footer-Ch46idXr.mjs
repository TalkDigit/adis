import __nuxt_component_0 from './headset-D27Ix1sv.mjs';
import __nuxt_component_1$1 from './facebook-B3kJY8f3.mjs';
import __nuxt_component_2 from './instagram-zuZzNgzb.mjs';
import __nuxt_component_3 from './twitter-CJGovR8_.mjs';
import __nuxt_component_4 from './linkedin-DopAoBJC.mjs';
import __nuxt_component_5 from './mail-s6sRdTD0.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_1 } from './virtual_public-D74N5MyP.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'consola/core';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_IconsHeadset = __nuxt_component_0;
  const _component_IconsFacebook = __nuxt_component_1$1;
  const _component_IconsInstagram = __nuxt_component_2;
  const _component_IconsTwitter = __nuxt_component_3;
  const _component_IconsLinkedin = __nuxt_component_4;
  const _component_IconsMail = __nuxt_component_5;
  _push(`<footer${ssrRenderAttrs(_attrs)}><div class="container"><div class="sendFooter"><div class="sendContact"><div>`);
  _push(ssrRenderComponent(_component_IconsHeadset, null, null, _parent));
  _push(`</div><a href="tel:+90 212 830 34 00"> +90 212 830 34 00 <span> \u0130leti\u015Fime Ge\xE7 </span></a></div><div class="socialFooter"><ul><li><a href="https://www.facebook.com/profile.php?id=61575950666062" target="_blank">`);
  _push(ssrRenderComponent(_component_IconsFacebook, null, null, _parent));
  _push(`</a></li><li><a href="https://www.instagram.com/adis.enerji/" target="_blank">`);
  _push(ssrRenderComponent(_component_IconsInstagram, null, null, _parent));
  _push(`</a></li><li><a href="https://x.com/Adis_enerji" target="_blank">`);
  _push(ssrRenderComponent(_component_IconsTwitter, null, null, _parent));
  _push(`</a></li><li><a href="https://www.linkedin.com/in/adis-enerji-357921363/" target="_blank">`);
  _push(ssrRenderComponent(_component_IconsLinkedin, null, null, _parent));
  _push(`</a></li></ul></div></div><div class="footerFlex"><div class="row"><div class="col-sm-12 col-md-12 col-lg-6 desktopNone"><div class="mailBottom">`);
  _push(ssrRenderComponent(_component_IconsMail, null, null, _parent));
  _push(`<a href="mailto:info@adisenerji.com.tr"> info@adisenerji.com.tr <span> E-mail </span></a></div></div><div class="col-sm-12 col-md-12 col-lg-4 maildiv"><div class="mailBottom">`);
  _push(ssrRenderComponent(_component_IconsMail, null, null, _parent));
  _push(`<a href="mailto:info@adisenerji.com.tr"> info@adisenerji.com.tr <span> E-mail </span></a></div></div><div class="col-sm-12 col-md-12 col-lg-4"><div class="menuFooter"><ul><li><a href="/hakkimizda"> Hakk\u0131m\u0131zda </a></li><li><a href="/projeler"> Projeler </a></li><li><a href="/iletisim"> \u0130leti\u015Fim </a></li></ul></div></div><div class="col-sm-12 col-md-12 col-lg-4"><div class="footer_img"><img width="auto" height="auto"${ssrRenderAttr("src", _imports_1)} alt="Logo"></div></div><div class="col-sm-12 col-md-12 col-lg-12 kvkk"><a href="/kisisel-verilerin-korunmasi-kanunu"> KVKK Ayd\u0131nlatma Metni </a></div></div></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layouts/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=Footer-Ch46idXr.mjs.map
