<template>
  <section class="cardSlider">
    <!-- :modules="[SwiperAutoplay]" -->
    <Swiper
      :modules="[]"
      :slides-per-view="3.7"
      :space-between="30"
      :loop="false"
      :pagination="{ clickable: false }"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      class="swiper-container"
      :breakpoints="breakpoints"
    >
      <SwiperSlide v-for="(card, index) in cards" :key="index" class="swiper-slide-custom">
        <div
          class="cardContent"
          :class="{
            after: card.after,
            noneBg: card.noneBg,
          }"
          :style="card.image ? { backgroundImage: `url(${card.image})` } : {}"
        >
          <h4 v-html="card.title"></h4>
          <p v-if="card.description">{{ card.description }}</p>
          <div class="date">
            <small>{{ card.month }}<b>{{ card.year }}</b></small>
            <span>{{ card.day }}</span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay as SwiperAutoplay, Pagination as SwiperPagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const cards = [
  {
    title:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <b>Potenti aliquet semper fusce, orci nunc iaculis amet</b>",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet? Curae etiam et.",
    image: "", 
    month: "December",
    year: "2024",
    day: "26",
    after: false,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Potenti aliquet semper consectetuer.",
    image: "/assets/images/slider2.png",
    month: "October",
    year: "2024",
    day: "07",
    after: false,
  },
  {
    title: "Lorem ipsum dolor sit amet, elit. Potenti aliquet semper fusce",
    description: "",
    image: "/assets/images/slider3.png",
    month: "October",
    year: "2024",
    day: "19",
    after: true,
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet",
    description: "",
    image: "/assets/images/slider4.png",
    month: "October",
    year: "2024",
    day: "19",
    after: false,
    noneBg: true,
  },
  
];

// Breakpoints for responsiveness
const breakpoints = {
  // when window width is >= 1200px
  1600: {
    slidesPerView: 3.7,
  },
  // when window width is >= 992px
  992: {
    slidesPerView: 2.5,
  },
  // when window width is >= 768px
  768: {
    slidesPerView: 1.7,
  },
  // when window width is < 768px
  0: {
    slidesPerView: 1,
  },
};
</script>

