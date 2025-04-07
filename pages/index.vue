<template>
    <div v-if="Page">
      <template v-for="item in Page.modul">
        <component
          :is="'Module' + keyConvert(item.key)"
          :data="item"
          :page="Page"
          v-if="getData(item, 'durum')"
        />
      </template>
    </div>
  </template>
  
  
  <script setup>
  import keyConvert from "@/utilities/keyConvert";
  import getData from "~/utilities/getData";
  import getAssets from "~/utilities/getAssets";
  
  const PageStore = usePage(),
  
  { locale } = useI18n(),
  route = useRoute(),
  router = useRouter(),
  Page = computed(() => {
    const data = PageStore.HomePage;
  
    if (data == null) {
      PageStore.fetchHomePage();
      return false;
    }
  
      
    useSeoMeta({
      title: null,
      ogTitle: null,
      twitterTitle : null,
      description: data.data.description && data.data.description[locale.value] ? data.data.description[locale.value] : null,
      ogDescription: data.data.description && data.data.description[locale.value] ? data.data.description[locale.value] : null,
      twitterDescription: data.data.description && data.data.description[locale.value] ? data.data.description[locale.value] : null,
    })



    return data.data;
  });
  
  
  await callOnce(PageStore.fetchHomePage);
  </script>