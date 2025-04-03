<template>
    <div>
      <div class="loader-main" v-if="!Page">
        <PartialsLoader />
      </div>
      <div v-else>
        <template v-for="item in Page.modul">
          <component
            :is="'Module' + keyConvert(item.key)"
            :data="item"
            :page="Page"
            v-if="getData(item, 'durum')"
          />
        </template>
      </div>
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
    const data = PageStore.Page;
  
    if (data == null) {
      PageStore.fetchPage();
      return false;
    }

    if(route.params.page != data.data.slug[locale.value]){
        PageStore.fetchPage()
        return false
    }



    
    useSeoMeta({
      title: data.data.baslik[locale.value],
      ogTitle: data.data.baslik[locale.value],
      twitterTitle : data.data.baslik[locale.value],
      description: data.data.description && data.data.description[locale.value] ? data.data.description[locale.value] : null,
      ogDescription: data.data.description && data.data.description[locale.value] ? data.data.description[locale.value] : null,
      twitterDescription: data.data.description && data.data.description[locale.value] ? data.data.description[locale.value] : null,
    })

    return data.data;
  });

await callOnce(PageStore.fetchPage);
</script>
