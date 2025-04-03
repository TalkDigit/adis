<template>
    <section class="homeTab">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-4">
                    <h5 data-aos="fade-up" data-aos-duration="1000"
                    v-if="getData(data, 'baslik')" v-html="getData(data, 'baslik')"
                    >
                       
                    </h5>
                    <div  v-if="getData(data, 'editor')" v-html="getData(data, 'editor')">

                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-8">
                    <ModuleHomeTab/>
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