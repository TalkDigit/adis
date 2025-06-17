<template>
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
</template>


<script setup>

const SettingsStore = useSettings(),
{ locale } = useI18n()


useHead({
  htmlAttrs: {
    lang: locale.value,
  },
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} ${
          SettingsStore.settings["site-ayarlari"][1].value[locale.value] ??
          SettingsStore.settings["site-ayarlari"][1].value.tr
        }`
      : SettingsStore.settings["site-ayarlari"][0].value[locale.value] ??
          SettingsStore.settings["site-ayarlari"][0].value.tr;
  },
  meta: [
    { name: "language", content: locale.value == "tr" ? "tr-TR" : "en-US" },
    {
      name: "content-language",
      content: locale.value == "tr" ? "tr-TR" : "en-US",
    },
  ],
  // link: [
  //   {
  //     rel: 'icon',
  //     type: 'image/png',
  //     sizes: '32x32',
  //     href: '/assets/images/footerLogo.webp'
  //   }
  // ]
});

await callOnce(SettingsStore.FetchSettings);
</script>