<template>
    <section class="homeMore">
        <div class="container">
            <h5 data-aos="fade-up" data-aos-duration="1000">ENERJİ VE  <br>SANAYİ   DAHA<b>  FAZLASI</b></h5>
            <div class="moreFlex">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1000" v-for="item in data.element.module">
                        <a :href="getData(item, 'link')">
                            <IconsGreenok/> <span v-html="getData(item, 'baslik')"> </span>
                        </a>
                    </div>
                 
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import getData from "@/utilities/getData";
import getAssets from "@/utilities/getAssets";
const { data } = defineProps(["data"]);
</script>