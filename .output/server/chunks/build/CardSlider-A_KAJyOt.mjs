import __nuxt_component_0 from './gray-ByAem5-1.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "CardSlider",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperRef = ref(null);
    const swiperInstance = ref(null);
    const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
    };
    const cards = [
      {
        title: "D\xFCnya Elektri\u011Finin %30\u2019u <b>Yenilenebilir Kaynaklardan Sa\u011Flan\u0131yor.</b>",
        description: "K\xFCresel \xE7apta yenilenebilir enerji, 2023 y\u0131l\u0131nda elektrik \xFCretiminin %30\u2019unu kar\u015F\u0131lad\u0131.",
        image: "",
        after: false
      },
      {
        title: "Depolama Teknolojileri <b>Yenilenebilir Enerjiye G\xFC\xE7 Kat\u0131yor</b>",
        description: "T\xFCrkiye\u2019de de depolamal\u0131 r\xFCzgar ve g\xFCne\u015F enerjisi santralleri i\xE7in \xE7al\u0131\u015Fmalar h\u0131z kazand\u0131.",
        image: "/assets/images/slider2.webp",
        after: false
      },
      {
        title: "T\xFCm enerjimizi daha temiz bir d\xFCnya i\xE7in harc\u0131yoruz. ",
        description: "",
        image: "/assets/images/slider3.webp",
        after: true
      },
      {
        title: "G\xFCne\u015F Enerjisi <b>T\xFCrkiye\u2019de H\u0131zla Y\xFCkseliyor</b>",
        description: "",
        image: "/assets/images/slider4.webp",
        after: false,
        noneBg: true
      },
      {
        title: "D\xFCnya Elektri\u011Finin %30\u2019u <b>Yenilenebilir Kaynaklardan Sa\u011Flan\u0131yor.</b>",
        description: "K\xFCresel \xE7apta yenilenebilir enerji, 2023 y\u0131l\u0131nda elektrik \xFCretiminin %30\u2019unu kar\u015F\u0131lad\u0131.",
        image: "",
        after: false
      },
      {
        title: "Depolama Teknolojileri <b>Yenilenebilir Enerjiye G\xFC\xE7 Kat\u0131yor</b>",
        description: "T\xFCrkiye\u2019de de depolamal\u0131 r\xFCzgar ve g\xFCne\u015F enerjisi santralleri i\xE7in \xE7al\u0131\u015Fmalar h\u0131z kazand\u0131.",
        image: "/assets/images/slider2.webp",
        after: false
      },
      {
        title: "G\xFCne\u015F Enerjisi <b>T\xFCrkiye\u2019de H\u0131zla Y\xFCkseliyor</b>",
        description: "",
        image: "/assets/images/slider3.webp",
        after: true
      },
      {
        title: "T\xFCm enerjimizi daha temiz bir d\xFCnya i\xE7in harc\u0131yoruz.",
        description: "",
        image: "/assets/images/slider4.webp",
        after: false,
        noneBg: true
      }
    ];
    const breakpoints = {
      1600: {
        slidesPerView: 3.7,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 2.3,
        spaceBetween: 30
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      0: {
        slidesPerView: 1.2,
        spaceBetween: 15
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsGray = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cardSlider" }, _attrs))}><a class="mobileNone" href="#">`);
      _push(ssrRenderComponent(_component_IconsGray, null, null, _parent));
      _push(`</a><a class="mobileNone prevs" href="#">`);
      _push(ssrRenderComponent(_component_IconsGray, null, null, _parent));
      _push(`</a>`);
      _push(ssrRenderComponent(unref(Swiper), {
        ref_key: "swiperRef",
        ref: swiperRef,
        modules: [unref(Autoplay)],
        "slides-per-view": 3.7,
        "space-between": 30,
        loop: true,
        pagination: { clickable: false },
        autoplay: { delay: 3e3, disableOnInteraction: false },
        class: "swiper-container",
        breakpoints,
        onSwiper
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(cards, (card, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: index,
                class: "swiper-slide-custom"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a;
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass([{
                      after: card.after,
                      noneBg: card.noneBg
                    }, "cardContent"])}" style="${ssrRenderStyle(card.image ? { backgroundImage: `url(${card.image})` } : {})}"${_scopeId2}><h4${_scopeId2}>${(_a = card.title) != null ? _a : ""}</h4>`);
                    if (card.description) {
                      _push3(`<p${_scopeId2}>${ssrInterpolate(card.description)}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: ["cardContent", {
                          after: card.after,
                          noneBg: card.noneBg
                        }],
                        style: card.image ? { backgroundImage: `url(${card.image})` } : {}
                      }, [
                        createVNode("h4", {
                          innerHTML: card.title
                        }, null, 8, ["innerHTML"]),
                        card.description ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(card.description), 1)) : createCommentVNode("", true)
                      ], 6)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(cards, (card, index) => {
                return createVNode(unref(SwiperSlide), {
                  key: index,
                  class: "swiper-slide-custom"
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: ["cardContent", {
                        after: card.after,
                        noneBg: card.noneBg
                      }],
                      style: card.image ? { backgroundImage: `url(${card.image})` } : {}
                    }, [
                      createVNode("h4", {
                        innerHTML: card.title
                      }, null, 8, ["innerHTML"]),
                      card.description ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(card.description), 1)) : createCommentVNode("", true)
                    ], 6)
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mobileCard"><a class="prevs" href="#">`);
      _push(ssrRenderComponent(_component_IconsGray, null, null, _parent));
      _push(`</a><a class="" href="#">`);
      _push(ssrRenderComponent(_component_IconsGray, null, null, _parent));
      _push(`</a></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/module/CardSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CardSlider-A_KAJyOt.mjs.map
