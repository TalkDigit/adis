<template>
    <section class="aboutFuture">
        <div class="container">
            <div class="futureTitle">


                
                <h4><label v-if="getData(data, 'ilk_satir')" v-html="getData(data, 'ilk_satir')"></label><br> 
                    <span v-if="getData(data, 'ikinci_satir')" v-html="getData(data, 'ikinci_satir')"></span>
                </h4>
                <p v-if="getData(data, 'aciklama')" v-html="getData(data, 'aciklama')"></p>
            </div>
            <lottie-player src="/assets/json/about.json" background="transparent" speed="1" style="width: 982px; height: 981px;" loop autoplay></lottie-player>

            <div class="bottomAbout">
                <div>
                    <h5 v-if="getData(data, 'alt_baslik')" v-html="getData(data, 'alt_baslik')"> </h5>
                    <a  class="mobile__none" :href="getData(data, 'link')"  v-if="getData(data, 'link_baslik')">{{ getData(data, 'link_baslik') }} <IconsRighttwo/></a>
                </div>
                <p  v-if="getData(data, 'alt_aciklama')" v-html="getData(data, 'alt_aciklama')">
                </p>

                <a  class="desktop__none" :href="getData(data, 'link')"  v-if="getData(data, 'link_baslik')">{{ getData(data, 'link_baslik') }} <IconsRighttwo/></a>

            </div>
        </div>
    </section>
</template>



<script setup>
      useHead({
  script: [ { src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js' } ]
})

import getData from "@/utilities/getData";
import getAssets from "@/utilities/getAssets";
const { data } = defineProps(["data"]);


</script>

