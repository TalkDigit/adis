import { l as useRuntimeConfig } from './server.mjs';

const getAssets = (e) => {
  const runtimeConfig = useRuntimeConfig();
  return runtimeConfig.public.cdnUri + e;
};

export { getAssets as g };
//# sourceMappingURL=index-Bp1SuHYF.mjs.map
