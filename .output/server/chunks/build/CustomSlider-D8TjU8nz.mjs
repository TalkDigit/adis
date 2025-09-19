import { useSSRContext, ref, computed, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "CustomSlider",
  __ssrInlineRender: true,
  props: {
    slides: {
      type: Array,
      required: true
    },
    initialSlide: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const activeIndex = ref(props.initialSlide);
    const trackStyle = computed(() => {
      const offset = -activeIndex.value * 100 + 100;
      return {
        transform: `translateX(${offset}%)`
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "slider-container" }, _attrs))} data-v-a13be60a><button class="slider-button prev" data-v-a13be60a>\u2039</button><div class="slider-track" style="${ssrRenderStyle(trackStyle.value)}" data-v-a13be60a><!--[-->`);
      ssrRenderList(__props.slides, (slide, index) => {
        _push(`<div class="${ssrRenderClass([
          "slide",
          { "active": index === activeIndex.value },
          { "prev-slide": index === activeIndex.value - 1 || activeIndex.value === 0 && index === __props.slides.length - 1 },
          { "next-slide": index === activeIndex.value + 1 || activeIndex.value === __props.slides.length - 1 && index === 0 }
        ])}" data-v-a13be60a>`);
        ssrRenderSlot(_ctx.$slots, "slide", {
          slide,
          index,
          active: index === activeIndex.value
        }, null, _push, _parent);
        _push(`</div>`);
      });
      _push(`<!--]--></div><button class="slider-button next" data-v-a13be60a>\u203A</button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CustomSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CustomSlider = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a13be60a"]]);

export { CustomSlider as default };
//# sourceMappingURL=CustomSlider-D8TjU8nz.mjs.map
