import { d as defineStore, e as useRoute, h as useNuxtApp, a as useCustomFetch, i as createError } from './server.mjs';
import { ref } from 'vue';

const usePage = defineStore("Page", () => {
  const Page = ref(null);
  const HomePage = ref(null);
  const fetchHomePage = async (e = null) => {
    useRoute();
    const nuxtApp = useNuxtApp();
    let routeControl = nuxtApp.$i18n.locale.value == "tr" ? "ana-sayfa" : "home";
    let pages = nuxtApp.$i18n.locale.value == "tr" ? "sayfalar" : "pages";
    await useCustomFetch("/moduldata/" + pages, {
      method: "POST",
      query: {
        slug: routeControl,
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
      HomePage.value = response.data.value.data;
    });
  };
  const fetchPage = async (e = null) => {
    const route = useRoute();
    const nuxtApp = useNuxtApp();
    let routeControl = route.params.page;
    let pages = nuxtApp.$i18n.locale.value == "tr" ? "sayfalar" : "pages";
    await useCustomFetch("/moduldata/" + pages, {
      method: "POST",
      query: {
        slug: routeControl,
        addtional: {
          where: {
            status: true
          }
        }
      }
    }).then((response) => {
      if (!response.data.value.success) {
        throw createError({
          statusCode: 404,
          statusMessage: "Page Not Found"
        });
      }
      Page.value = response.data.value.data;
    });
  };
  return {
    HomePage,
    fetchHomePage,
    Page,
    fetchPage
  };
});

export { usePage as u };
//# sourceMappingURL=Page-B3QKidQr.mjs.map
