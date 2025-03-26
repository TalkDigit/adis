<template>
    <section class="socialSection">
        <div class="container">
            <div class="socialTitle">
                <h5>Social Responsibility</h5>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
            </div>
        </div>
        <div>
            <div class="lottie">
            <!-- <lottie-player src="/assets/json/circle.json" background="transparent" speed="1" style="width: 100%; max-width:1920px; height: 1920px;" loop autoplay></lottie-player> -->
        </div>
            <ModuleSocialSlider/>
        </div>
    </section>
</template>
<style>
.lottie{
    scale:1.6;
    z-index:-1;
    position:relative;
    margin-top:100px
}
</style>

<script setup>
      useHead({
  script: [ { src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js' } ]
})
</script>