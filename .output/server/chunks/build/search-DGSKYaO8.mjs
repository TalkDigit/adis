import { _ as __nuxt_component_0 } from './nuxt-link-rsGJmfXz.mjs';
import { b as useI18n, e as useRoute, d as defineStore, c as callOnce, h as useNuxtApp, a as useCustomFetch } from './server.mjs';
import { u as useLangControl } from './langControl-Bnu8gFMY.mjs';
import { computed, withAsyncContext, resolveComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { g as getAssets } from './index-Bp1SuHYF.mjs';
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

const useSearch = defineStore("Search", () => {
  const SearchProductResult = ref(null);
  const fetchSearchProduct = async () => {
    const nuxtApp = useNuxtApp(), route = useRoute();
    let pages = nuxtApp.$i18n.locale.value == "tr" ? "sayfalar" : "pages";
    await useCustomFetch("/moduldata/" + pages, {
      method: "POST",
      query: {
        search: route.params.key,
        addtional: {
          where: {
            status: true
          }
        }
      }
    }).then((response) => {
      if (!response.data.value.success) {
        SearchProductResult.value = [];
        return false;
      }
      SearchProductResult.value = response.data.value.data;
    });
  };
  return {
    SearchProductResult,
    fetchSearchProduct
  };
});
const _sfc_main = {
  __name: "search",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n(), route = useRoute(), SearchStore = useSearch(), langStore = useLangControl(), Result = computed(() => {
      const data = SearchStore.SearchProductResult;
      if (data == null) {
        return false;
      }
      return data;
    });
    langStore.route.tr = "/arama/" + route.params.key;
    langStore.route.en = "/en/search/" + route.params.key;
    [__temp, __restore] = withAsyncContext(() => callOnce(SearchStore.fetchSearchProduct, "$yZa2AzOsfR")), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_IconsProductLink = resolveComponent("IconsProductLink");
      if (unref(Result)) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-4853faeb><div class="container" data-v-4853faeb><div class="page" data-v-4853faeb><div class="breadcrumb" data-v-4853faeb><ul class="breadcrumb-list" data-v-4853faeb><li data-v-4853faeb>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { name: unref(locale) == "tr" ? "home" : "homeEn" },
          alt: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("home"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("home")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-4853faeb> \xA0&quot;<b data-v-4853faeb>${ssrInterpolate(unref(route).params.key)}</b>&quot; ${ssrInterpolate(_ctx.$t("searchResult"))}</li></ul></div></div><div class="corporate-banner" data-v-4853faeb><h1 data-v-4853faeb>&quot;<b data-v-4853faeb>${ssrInterpolate(unref(route).params.key)}</b>&quot; ${ssrInterpolate(_ctx.$t("searchResult"))}</h1><p data-v-4853faeb>${ssrInterpolate(unref(Result).length)} ${ssrInterpolate(_ctx.$t("searchFound"))}</p></div><div class="product-list-main" data-v-4853faeb><div class="product-list-main-flex" data-v-4853faeb>`);
        if (!unref(Result).length) {
          _push(`<div class="product-found" data-v-4853faeb><p data-v-4853faeb>${ssrInterpolate(_ctx.$t("searchNotFound"))}</p></div>`);
        } else {
          _push(`<!--[-->`);
          ssrRenderList(unref(Result), (item) => {
            _push(`<div class="product-card" data-v-4853faeb>`);
            if (item.data.urun_gorsel && item.data.urun_gorsel[unref(locale)]) {
              _push(`<img${ssrRenderAttr("src", unref(getAssets)(item.data.urun_gorsel[unref(locale)]))} class="product-card-img" alt="" data-v-4853faeb>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<div class="product-card-main" data-v-4853faeb>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              style: { "opacity": "0" },
              to: `${unref(locale) == "tr" ? "/" : "/en/"}` + item.data.slug[unref(locale)],
              alt: "",
              class: "stretched-link"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(_ctx.$t("goHome"))} `);
                  _push2(ssrRenderComponent(_component_IconsProductLink, null, null, _parent2, _scopeId));
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("goHome")) + " ", 1),
                    createVNode(_component_IconsProductLink)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div></div>`);
          });
          _push(`<!--]-->`);
        }
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4853faeb"]]);

export { search as default };
//# sourceMappingURL=search-DGSKYaO8.mjs.map
