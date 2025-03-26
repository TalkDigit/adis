<template>
    <div class="social-slider wrap">
      <swiper
        :modules="[EffectCoverflow, Navigation]"
        :centeredSlides="true"
        :slidesPerView="3"
        :navigation="true"
        loop
      >
        <swiper-slide v-for="(slide, index) in slides.slice(0, 3)" :key="index">
          <a href="#" class="item bg-white shadow-lg rounded-lg overflow-hidden">
            <img :src="slide.image" :alt="slide.title" class="w-full h-60 object-cover" />
            <div class="sliderContent p-4">
              <h2 class="text-xl font-bold" v-html="slide.title"></h2>
              <p class="text-gray-600" v-html="slide.description"></p>
            </div>
          </a>
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/effect-coverflow';
    import { EffectCoverflow, Navigation } from 'swiper/modules';
  
    const slides = ref([
      {
        image: '/assets/images/social.png',
        title: 'The future of renewable <br> energy is bright with us',
        description:
          'Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet? Curae etiam et efficitur, lacus tortor turpis! Fermentum lacinia lacinia vel felis molestie ad.',
      },
      {
        image: '/assets/images/social.png',
        title: 'The future of renewable <br> energy is bright with us',
        description:
          'Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet? Curae etiam et efficitur, lacus tortor turpis! Fermentum lacinia lacinia vel felis molestie ad.',
      },
      {
        image: '/assets/images/social.png',
        title: 'The future of renewable <br> energy is bright with us',
        description:
          'Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet? Curae etiam et efficitur, lacus tortor turpis! Fermentum lacinia lacinia vel felis molestie ad.',
      },
      {
        image: '/assets/images/social.png',
        title: 'The future of renewable <br> energy is bright with us',
        description:
          'Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet? Curae etiam et efficitur, lacus tortor turpis! Fermentum lacinia lacinia vel felis molestie ad.',
      },
    ]);
  </script>
  
  <style scoped>
    .social-slider .swiper {
      padding: 80px 60px;
    }
    .social-slider img {
      width: 100%;
      height: 309px;
    }
    .social-slider a {
      border-radius: 25px;
      display: flex;
      flex-direction: column;
    }
    .sliderContent {
      padding: 37px 44px;
      background: #ffffff;
    }
    .swiper-slide{
      transform: rotate(0) !important;
    }
    .swiper-slide:not(.swiper-slide-active):not(.swiper-slide-prev):not(.swiper-slide-next){
      transform: rotate(0) translateX(-50%) !important;
      left: 50% !important;
    }
    .sliderContent h2 {
      font-size: 30px;
      color: #565656;
      font-weight: 300;
      margin-bottom: 17px;
    }
    .sliderContent p {
      color: #9b9b9b;
      font-weight: 300;
    }
    .swiper-slide {
      transition: transform 0.3s ease, opacity 0.3s ease;
    }
    .social-slider .swiper-slide img {
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
    .social-slider .swiper-slide-active {
      opacity: 1;
      transform: rotate(0) !important;
    }
    .social-slider .swiper-slide-active img {
      opacity: 1;
    }
    .swiper-slide-prev{
      transform: rotate(-15deg) !important
    }
    .swiper-slide-next{
      transform: rotate(15deg) !important
    }
    .swiper-slide-prev,
    .swiper-slide-next {
      opacity: 0.3;
    }
    .swiper-slide-active {
      opacity: 1;
      transform: scale(1);
    }
    .social-slider .swiper-slide-active {
      width: 609px !important;
    }
    .swiper {
      width: 100%;
    }
  </style>
  