<template>
    <section class="HomeEnergy">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6" data-aos="fade-up" data-aos-duration="3000">
                    <div class="energyContent" >
                        <span >We use renewable resources.<br> 100% Renewable portfolio we have enough</span>
                        <h2 >ready resources for energy continuity.</h2>
                        <p>Lorem ipsum odor amet, consec,tetuer adipiscing. Sem viverra taciti et molestie tempor semper vitae.</p>
                        <a href="/aboutUs">Go details 
                            <lottie-player src="/assets/json/adis-buton2.json" background="transparent" speed="1" style="width: 40px; height: 40px;" loop autoplay></lottie-player>

                        </a>

                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 afterImg" >
                    <img src="/assets/images/sliderImg.png" alt=""/>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
      useHead({
  script: [ { src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js' } ]
})
</script>