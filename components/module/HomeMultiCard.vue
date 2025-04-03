<template>
   <section class="energySection">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-4" v-for="item in data.element.module">
                    <div class="energyContent" data-aos="zoom-in" data-aos-duration="1000">
                        <div class="energyIcon">
                            <!-- <IconsWind/> -->
                            <img :src="getAssets(getData(item, 'icon'))"/>

                        </div>
                        <h4  v-html="getData(item, 'baslik')">
                           
                        </h4>
                        <p  v-html="getData(item, 'aciklama')">
                        </p>
                    </div>
                </div>

            </div>
        </div>
   </section>
</template>
<style>
.energySection .row > .col-sm-12:nth-child(1):hover .energyIcon {
  background-color: #c8e656; 
  box-shadow: 0px 10px 50px #c8e656;
}

.energySection .row > .col-sm-12:nth-child(2):hover .energyIcon {
  background-color: #48bdec; 
  box-shadow: 0px 10px 50px #48bdec;
}

.energySection .row > .col-sm-12:nth-child(3):hover .energyIcon {
  background-color: #3c70b9;
  box-shadow: 0px 10px 50px #3c70b9;
}
</style>

  <script setup>
  import getData from "@/utilities/getData";
  import getAssets from "@/utilities/getAssets";
  const { data } = defineProps(["data"]);
  </script>
  