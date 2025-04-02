<template>
    <section class="aboutFuture">
        <div class="container">
            <div class="futureTitle">
                <h4><label>Adis Energy, we spend<br> all our energy for a cleaner world.</label><br> <span>We respect natural resources</span></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
            <lottie-player src="/assets/json/about.json" background="transparent" speed="1" style="width: 982px; height: 981px;" loop autoplay></lottie-player>

            <div class="bottomAbout">
                <div>
                    <h5>We spend<br> our energy for<br> the future.</h5>
                    <a href="#">Go details <IconsRighttwo/></a>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur <br><br>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing.
                </p>
            </div>
        </div>
    </section>
</template>



<script setup>
      useHead({
  script: [ { src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js' } ]
})
</script>