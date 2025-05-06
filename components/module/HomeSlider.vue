<template>
    <section class="HomeEnergy">
        <div class="container">
            <div class="row">


                <div class="col-sm-12 col-md-6 col-lg-6" data-aos="fade-up" data-aos-duration="3000">
                    <div class="energyContent">
                        <span v-if="getData(data, 'baslik')" v-html="getData(data, 'baslik')"></span>
                        <h2 v-if="getData(data, 'alt_baslik')" v-html="getData(data, 'alt_baslik')"></h2>
                        <!-- <p v-if="getData(data, 'aciklama')" v-html="getData(data, 'aciklama')"></p> -->
                        <a :href="getData(data, 'link')" @mouseenter="playLottie" @mouseleave="stopLottie">
                            
                            {{getData(data, 'link_baslik')}}
                            
                            <lottie-player ref="lottieRef" 
                                src="/assets/json/adis-buton2.json" 
                                background="transparent" 
                                speed="1" 
                                style="width: 40px; height: 40px;">
                            </lottie-player>
                        </a>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 afterImg">
                    <img src="/assets/images/sliderImg.webp" alt=""/>
                </div>
            </div>
        </div>
    </section>
</template>

  


<script setup>
import { ref, onMounted } from 'vue'

const lottieRef = ref(null)

const playLottie = () => {
    if (lottieRef.value) {
        lottieRef.value.play()
    }
}

const stopLottie = () => {
    if (lottieRef.value) {
        lottieRef.value.stop()
    }
}

useHead({
    script: [{ src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js' }]
})


import getData from "@/utilities/getData";
    import getAssets from "@/utilities/getAssets";
    const { data } = defineProps(["data"]);

</script>
