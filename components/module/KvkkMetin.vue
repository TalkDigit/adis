<template>
    <section>
        <div class="kvkk mb-10 pb-5">
           <div class="container mt-100">
                <div v-if="getData(data, 'metin')" v-html="getData(data, 'metin')"></div>
           </div>
        </div>
    </section>
</template>

<script setup>
    import getData from "@/utilities/getData";
    const { data } = defineProps(["data"]);
</script>

