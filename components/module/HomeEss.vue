<template>
    <section class="essContainer">
        <div class="container">
            <div class="essContent">
                <h5 data-aos="fade-up" data-aos-duration="1000"
                v-if="getData(data, 'baslik')" v-html="getData(data, 'baslik')"
                >
                   
                </h5>
                <span v-if="getData(data, 'alt_baslik')" v-html="getData(data, 'alt_baslik')">
                   
                </span>
                <p  v-if="getData(data, 'aciklama')" v-html="getData(data, 'aciklama')">
                   
                </p>
            </div>
            <ModuleContainer/>
        </div>
    </section>
</template>

<script setup>


import getData from "@/utilities/getData";
    import getAssets from "@/utilities/getAssets";
    const { data } = defineProps(["data"]);



</script>