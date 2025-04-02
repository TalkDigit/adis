<template>
    <section class="socialSection">
        <div class="container">
            <div class="socialTitle">
                <h5 data-aos="fade-up">Social Responsibility</h5>
                <p data-aos="fade-up" data-aos-duration="1000">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
            </div>
        </div>
        <div>
            <div class="lottie">
            <lottie-player src="/assets/json/circle.json" background="transparent" speed="1" style="width: 100%; max-width:1920px; height: 1920px;" loop autoplay></lottie-player>
        </div>
            <ModuleSocialSlider/>
        </div>
    </section>
</template>
<style>
.socialSection .lottie{
    z-index:-1;
    position:absolute;
    width: 100%;
}

.socialSection {
  position: relative; /* Contain the absolutely positioned Lottie */
  padding-bottom: 410px;

}

.socialSection .lottie-wrapper {
  position: relative;
 
  overflow: hidden; /* Prevent the Lottie animation from overflowing */
}
.socialSection lottie-player{
    scale:1.8;
    margin-top: 200px;
    opacity: 0.4;
}

</style>

<script setup>
      useHead({
  script: [ { src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js' } ]
})
</script>