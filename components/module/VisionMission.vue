<template>
    <section class="visionMission">
       <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <div class="visionContent vision">
                        <IconsTarget/>
                        <div>
                            <h4 v-if="getData(data, 'vision_baslik')" v-html="getData(data, 'vision_baslik')"></h4>
                            <p v-if="getData(data, 'vision_aciklama')" v-html="getData(data, 'vision_aciklama')"></p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <div class="visionContent mission">
                        <IconsFlag/>
                        <div>
                            <h4 v-if="getData(data, 'mission_baslik')" v-html="getData(data, 'mission_baslik')"></h4>
                            <p v-if="getData(data, 'mission_aciklama')" v-html="getData(data, 'mission_aciklama')"></p>
                        </div>
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