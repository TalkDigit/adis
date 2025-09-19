import { computed, withAsyncContext, unref, createVNode, resolveDynamicComponent, ref, useSSRContext } from 'vue';
import { d as defineStore, c as callOnce, a as useCustomFetch } from './server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { k as keyConvert } from './index-Bo_8ZrUJ.mjs';
import { g as getData } from './index-DrkyPFoa.mjs';
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

const useExample = defineStore("Example", () => {
  const exampleState = ref(null);
  const fetchExample = async () => {
    await useCustomFetch("/moduldata/example", {
      method: "POST",
      query: {
        addtional: {
          where: {
            status: true
          }
        }
      }
    }).then((response) => {
      if (!response.data.value.success) {
        Page.value = 404;
        return false;
      }
      exampleState.value = response.data.value.data;
    });
  };
  return {
    exampleState,
    fetchExample
  };
});
const _sfc_main = {
  __name: "exampleModulePage",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const PageStore = useExample(), Page2 = computed(() => {
      const data = PageStore.exampleState;
      if (data == null) {
        PageStore.fetchExample();
        return false;
      }
      return data.data;
    });
    [__temp, __restore] = withAsyncContext(() => callOnce(PageStore.fetchExample, "$2Btr51kxgD")), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(Page2)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
        ssrRenderList(unref(Page2).modul, (item) => {
          _push(`<!--[-->`);
          if (unref(getData)(item, "durum")) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent("Module" + unref(keyConvert)(item.key)), {
              data: item,
              page: unref(Page2)
            }, null), _parent);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/exampleModulePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=exampleModulePage-CdEZ7x_x.mjs.map
