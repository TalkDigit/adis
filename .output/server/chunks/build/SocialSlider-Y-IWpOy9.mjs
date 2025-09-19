import { u as useHead } from './server.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = {
  __name: "SocialSlider",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    const { data } = __props;
    ref(null);
    useHead({
      script: [{ src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" }]
    });
    const items = ref([
      {
        image: "/assets/images/siralama.webp",
        title: "T\xFCrkiye Yenilenebilir Enerjide D\xFCnya S\u0131ralamas\u0131nda Y\xFCkseliyor",
        description: "T\xFCrkiye, yenilenebilir enerji kurulu g\xFCc\xFCnde d\xFCnyada 11\u2019inci s\u0131raya yerle\u015Fti. Enerji ve Tabii Kaynaklar Bakanl\u0131\u011F\u0131\u2019n\u0131n verilerine g\xF6re, 2024\u2019te g\xFCne\u015F ve r\xFCzgar enerjisi kapasitesi \xF6nemli \xF6l\xE7\xFCde artt\u0131. \xDClke, 2035\u2019e kadar her y\u0131l 5 bin MW yeni yenilenebilir enerji kapasitesi eklemeyi hedefliyor. \xD6zellikle g\xFCne\u015F enerjisinde \u0130\xE7 Anadolu, r\xFCzgarda ise Ege B\xF6lgesi \xFCretim \xFCss\xFC haline geliyor. Bu geli\u015Fmeler, T\xFCrkiye\u2019nin 2053 Net S\u0131f\u0131r Karbon hedefi i\xE7in kritik bir ad\u0131m olarak g\xF6r\xFCl\xFCyor."
      },
      {
        image: "/assets/images/social.webp",
        title: "T\xFCrkiye\u2019de Depolamal\u0131 R\xFCzgar Enerjisi Projelerine Rekor Yat\u0131r\u0131m",
        description: "T\xFCrkiye, depolamal\u0131 r\xFCzgar enerjisi santrallerine y\xF6nelik yat\u0131r\u0131mlar\u0131 h\u0131zland\u0131r\u0131yor. 2024\u2019te ba\u015Flat\u0131lan yeni projelerle, 10 y\u0131l i\xE7inde 19 milyar avroluk yat\u0131r\u0131m planlan\u0131yor. Bu santraller, r\xFCzgar enerjisinin gece ve d\xFC\u015F\xFCk r\xFCzgarl\u0131 d\xF6nemlerde de kullan\u0131lmas\u0131n\u0131 sa\u011Flayacak. Bakanl\u0131k, bu hamlenin enerji ithalat\u0131n\u0131 azaltarak cari a\xE7\u0131\u011Fa pozitif katk\u0131 yapaca\u011F\u0131n\u0131 belirtiyor."
      },
      {
        image: "/assets/images/dunya.webp",
        title: "Gelece\u011Fin Enerjisi Depolan\u0131yor!",
        description: "G\xFCne\u015F ve r\xFCzgar enerjisi art\u0131k daha g\xFC\xE7l\xFC! Enerji depolama sistemleri, \xFCretilen temiz elektri\u011Fin ihtiya\xE7 duyuldu\u011Fu anda kullan\u0131lmas\u0131n\u0131 sa\u011Flayarak \u015Febeke istikrar\u0131n\u0131 art\u0131r\u0131yor ve kesintisiz enerji sunuyor. D\xFCnya genelinde h\u0131zla yay\u0131lan bu teknoloji, yenilenebilir enerjinin potansiyelini zirveye ta\u015F\u0131yor ve enerji gelece\u011Fimize y\xF6n veriyor."
      }
    ]);
    const activeIndex = ref(1);
    const getSlideClass = (index) => {
      if (index === activeIndex.value)
        return "active";
      if (index === (activeIndex.value - 1 + items.value.length) % items.value.length)
        return "slide-prev";
      if (index === (activeIndex.value + 1) % items.value.length)
        return "slide-next";
      return "hidden";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "social-slider slider-container" }, _attrs))} data-v-9517d3a0><div class="slider-wrapper" data-v-9517d3a0><!--[-->`);
      ssrRenderList(items.value, (item, index) => {
        var _a, _b;
        _push(`<div class="${ssrRenderClass([getSlideClass(index), "slider-item"])}" data-v-9517d3a0><img${ssrRenderAttr("src", item.image)} alt="Slider Image" class="slider-image" data-v-9517d3a0><div class="sliderContent" data-v-9517d3a0><h2 class="slider-title" data-v-9517d3a0>${(_a = item.title) != null ? _a : ""}</h2><p class="slider-description" data-v-9517d3a0>${(_b = item.description) != null ? _b : ""}</p></div></div>`);
      });
      _push(`<!--]--></div><button class="nav-button prev" data-v-9517d3a0>\u25C1</button><button class="nav-button next" data-v-9517d3a0>\u25B7</button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/module/SocialSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9517d3a0"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=SocialSlider-Y-IWpOy9.mjs.map
