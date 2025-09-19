import { ref } from 'vue';
import { d as defineStore } from './server.mjs';

const useLangControl = defineStore("langControl", () => {
  const route = ref({
    tr: "/",
    en: "/en"
  });
  return {
    route
  };
});

export { useLangControl as u };
//# sourceMappingURL=langControl-Bnu8gFMY.mjs.map
