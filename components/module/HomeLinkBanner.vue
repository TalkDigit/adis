<template>
    <section class="HomeFuture">
        <div class="container">
            <div class="futureContent">
                <div>
                <div class="flextitle">
                    <h3 data-aos="fade-up" data-aos-duration="1000"
                    v-if="getData(data, 'baslik')" v-html="getData(data, 'baslik')">
                       
                    </h3>
                    <a href="#" class="desktopNone">
                            <IconsGray/>
                        </a>
                </div>
                   
                    <div class="futureBottom">
                        <b data-aos="fade-up" data-aos-duration="2000"  class="mobileNone"
                        v-if="getData(data, 'kalin_baslik')" v-html="getData(data, 'kalin_baslik')"
                        ></b>
                        <p v-if="getData(data, 'aciklama')" v-html="getData(data, 'aciklama')" ></p>
                    </div>
                </div>
                <a  class="mobileNone" href="#">
                    <IconsGray/>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>


import getData from "@/utilities/getData";
    import getAssets from "@/utilities/getAssets";
    const { data } = defineProps(["data"]);



</script>