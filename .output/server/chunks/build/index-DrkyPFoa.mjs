import { b as useI18n } from './server.mjs';

const getData = (e, type) => {
  const { locale } = useI18n();
  if (!e.increased) {
    if (e.element) {
      return e.element.find((e2) => e2.key == type).value[locale.value];
    } else {
      return e.find((a) => a.key == type).value[locale.value];
    }
  } else {
    return e.element[0].value[locale.value];
  }
};

export { getData as g };
//# sourceMappingURL=index-DrkyPFoa.mjs.map
