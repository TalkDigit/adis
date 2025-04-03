<template>
    <section class="aboutPage">
        <div class="container">
            <div class="titleAbout">
                <h3 v-if="getData(data, 'baslik')" v-html="getData(data, 'baslik')">
                   
                </h3>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <p v-if="getData(data, 'aciklama_sag')" v-html="getData(data, 'aciklama_sag')">
                      
                    </p>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <p v-if="getData(data, 'aciklama_sol')" v-html="getData(data, 'aciklama_sol')">
                    </p>
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