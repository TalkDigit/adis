<template>
     <div v-if="getData(data, 'icerik')"
     v-html="getData(data, 'icerik')">
     </div>
</template>

<script setup>
import getData from "@/utilities/getData";
import getAssets from "@/utilities/getAssets";
const { data } = defineProps(["data"]);
</script>
