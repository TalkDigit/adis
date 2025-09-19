import __nuxt_component_0 from './rightold-CE7bTiP4.mjs';
import __nuxt_component_1 from './info-DzkEbfEJ.mjs';
import __nuxt_component_2 from './Mapss-k2t6IpTx.mjs';
import { ref, watch, nextTick, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "HomeTab",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref(0);
    const tabContentRefs = ref([]);
    watch(activeTab, (newIndex) => {
      if ((void 0).innerWidth <= 768) {
        nextTick(() => {
          const el = tabContentRefs.value[newIndex];
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      }
    });
    const tabsData = [
      {
        // Bursa Tab
        description: "%100 yenilenebilir kaynaklara dayal\u0131, depolamal\u0131 r\xFCzgar ve g\xFCne\u015F enerjisi santralleri geli\u015Ftirerek T\xFCrkiye\u2019nin enerji d\xF6n\xFC\u015F\xFCm\xFCne katk\u0131 sunarken, ileri teknoloji depolama sistemleriyle s\xFCrd\xFCr\xFClebilir, kesintisiz ve \xE7evre dostu enerji \xFCretimini m\xFCmk\xFCn k\u0131l\u0131yor.",
        power: 100,
        percentage: 40,
        production: 346,
        households: "138.400",
        emission: "290.000",
        date: "2026Q1"
      },
      {
        // Kırklareli Tab
        description: "%100 yenilenebilir kaynaklara dayal\u0131, depolamal\u0131 r\xFCzgar ve g\xFCne\u015F enerjisi santralleri geli\u015Ftirerek T\xFCrkiye\u2019nin enerji d\xF6n\xFC\u015F\xFCm\xFCne katk\u0131 sunarken, ileri teknoloji depolama sistemleriyle s\xFCrd\xFCr\xFClebilir, kesintisiz ve \xE7evre dostu enerji \xFCretimini m\xFCmk\xFCn k\u0131l\u0131yor.",
        power: 100,
        percentage: 43,
        production: 376,
        households: "150.400",
        emission: "315.000",
        date: "2026Q1"
      },
      {
        // Yenice Tab
        description: "%100 yenilenebilir kaynaklara dayal\u0131, depolamal\u0131 r\xFCzgar ve g\xFCne\u015F enerjisi santralleri geli\u015Ftirerek T\xFCrkiye\u2019nin enerji d\xF6n\xFC\u015F\xFCm\xFCne katk\u0131 sunarken, ileri teknoloji depolama sistemleriyle s\xFCrd\xFCr\xFClebilir, kesintisiz ve \xE7evre dostu enerji \xFCretimini m\xFCmk\xFCn k\u0131l\u0131yor.",
        power: 100,
        percentage: 43,
        production: 376,
        households: "150.400",
        emission: "315.000",
        date: "2027Q1"
      },
      {
        // Kışlacık Tab
        description: "%100 yenilenebilir kaynaklara dayal\u0131, depolamal\u0131 r\xFCzgar ve g\xFCne\u015F enerjisi santralleri geli\u015Ftirerek T\xFCrkiye\u2019nin enerji d\xF6n\xFC\u015F\xFCm\xFCne katk\u0131 sunarken, ileri teknoloji depolama sistemleriyle s\xFCrd\xFCr\xFClebilir, kesintisiz ve \xE7evre dostu enerji \xFCretimini m\xFCmk\xFCn k\u0131l\u0131yor.",
        power: 75,
        percentage: 41,
        production: 270,
        households: "108.800",
        emission: "225.000",
        date: "2026Q1"
      },
      {
        // Bildim Tab
        description: "%100 yenilenebilir kaynaklara dayal\u0131, depolamal\u0131 r\xFCzgar ve g\xFCne\u015F enerjisi santralleri geli\u015Ftirerek T\xFCrkiye\u2019nin enerji d\xF6n\xFC\u015F\xFCm\xFCne katk\u0131 sunarken, ileri teknoloji depolama sistemleriyle s\xFCrd\xFCr\xFClebilir, kesintisiz ve \xE7evre dostu enerji \xFCretimini m\xFCmk\xFCn k\u0131l\u0131yor.",
        power: 100,
        percentage: 20,
        production: 241,
        households: "96.400",
        emission: "200.000",
        date: "2025Q4"
      }
      // Diğer tablar için veriler...
    ];
    const pathBounds = {
      0: { x: -350, y: 300, width: 3e3, height: 3e3 },
      // Bursa
      1: { x: 0, y: 200, width: 1900, height: 1900 }
      // Kırklareli
      // Diğer tablar...
    };
    computed(() => {
      if (!pathBounds[activeTab.value])
        return "0 0 5528.7 2328.5";
      const bounds = pathBounds[activeTab.value];
      const padding = 100;
      return [bounds.x - padding, bounds.y - padding, bounds.width + padding * 2, bounds.height + padding * 2].join(" ");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsRightold = __nuxt_component_0;
      const _component_IconsInfo = __nuxt_component_1;
      const _component_ModuleMapss = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["tabs-container", `map-${activeTab.value}`]
      }, _attrs))}><div class="tabs"><div class="${ssrRenderClass([{ active: !activeTab.value }, "tab-title bursa"])}"> G\xFCng\xF6ren <br> Depolamal\u0131 RES `);
      _push(ssrRenderComponent(_component_IconsRightold, null, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ active: activeTab.value === 1 }, "tab-title kirklareli"])}"> Arma\u011Fan <br> Depolamal\u0131 RES `);
      _push(ssrRenderComponent(_component_IconsRightold, null, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ active: activeTab.value === 2 }, "tab-title yenice"])}"> Yenice <br> Depolamal\u0131 RES `);
      _push(ssrRenderComponent(_component_IconsRightold, null, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ active: activeTab.value === 3 }, "tab-title kislacik"])}"> K\u0131\u015Flac\u0131k <br> Depolamal\u0131 RES `);
      _push(ssrRenderComponent(_component_IconsRightold, null, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ active: activeTab.value === 4 }, "tab-title bildim"])}"> Bildim <br> Depolamal\u0131 GES `);
      _push(ssrRenderComponent(_component_IconsRightold, null, null, _parent));
      _push(`</div></div><!--[-->`);
      ssrRenderList(tabsData, (tabData, index) => {
        _push(`<div <div><div class="tab-content" style="${ssrRenderStyle(activeTab.value === index ? null : { display: "none" })}"><div class="contentFlex"><div class="div">`);
        _push(ssrRenderComponent(_component_IconsInfo, null, null, _parent));
        _push(`<p>${ssrInterpolate(tabData.description)}</p></div></div><div class="circleTab"><div class="power-capacity"><small>Kurulu G\xFC\xE7</small><span class="capacity-value"><span class="counter">${ssrInterpolate(tabData.power)}</span> MWe </span></div><div class="power-capacity"><small>Y\u0131ll\u0131k \xDCretim</small><span class="capacity-value"><span class="counter">${ssrInterpolate(tabData.production)}</span></span><label class="capacity-label">Milyon kWh</label></div><div class="power-capacity"><small> Ayd\u0131nlatt\u0131\u011F\u0131 <br> Hane Say\u0131s\u0131 </small><span class="capacity-value"><span class="counter">${ssrInterpolate(tabData.households)}</span></span></div><div class="power-capacity"><small> Azaltt\u0131\u011F\u0131 <br> Emisyon miktar\u0131 </small><span class="capacity-value"><span class="counter">${ssrInterpolate(tabData.emission)}</span></span><label class="capacity-label">Ton/Y\u0131l</label></div><div class="power-capacity"><small> Devreye <br> Al\u0131nma Tarihi </small><span class="capacity-value"><span class="counter">${ssrInterpolate(tabData.date)}</span></span></div></div></div></div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_ModuleMapss, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/module/HomeTab.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=HomeTab-DGMXXpD0.mjs.map
