<template>
  <section class="cardSlider">
    <!-- Tıklandığında ileri kaydıran buton -->
    <a class="mobileNone" href="#" @click.prevent="goNext">
      <IconsGray />
    </a>
    <a class="mobileNone prevs" href="#" @click.prevent="goPrev">
      <IconsGray />
    </a>

    <!-- Swiper bileşeni -->
    <Swiper
      ref="swiperRef"
      :modules="[SwiperAutoplay]"
      :slides-per-view="3.7"
      :space-between="30"

      :loop="true"
      :pagination="{ clickable: false }"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      class="swiper-container"
      :breakpoints="breakpoints"
      @swiper="onSwiper"
    >
      <SwiperSlide
        v-for="(card, index) in cards"
        :key="index"
        class="swiper-slide-custom"
      >
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
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay as SwiperAutoplay } from 'swiper/modules';
import 'swiper/css';

// Swiper örneğini tutacak ref
const swiperRef = ref(null);
const swiperInstance = ref(null);

// Swiper örneği hazır olduğunda yakalıyoruz
const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

// Tıklanınca bir sonraki slayta geç
const goNext = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
};

const goPrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  }
};

// Kartlar
const cards = [
  {
    title: "Dünya Elektriğinin %30’u <b>Yenilenebilir Kaynaklardan Sağlanıyor.</b>",
    description:
      "Küresel çapta yenilenebilir enerji, 2023 yılında elektrik üretiminin %30’unu karşıladı.",
    image: "",
    after: false,
  },
  {
    title: "Depolama Teknolojileri <b>Yenilenebilir Enerjiye Güç Katıyor</b>",
    description:
      "Türkiye’de de depolamalı rüzgar ve güneş enerjisi santralleri için çalışmalar hız kazandı.",
    image: "/assets/images/slider2.png",
    after: false,
  },
  {
    title: "Güneş Enerjisi <b>Türkiye’de Hızla Yükseliyor</b>",
    description: "",
    image: "/assets/images/slider3.png",
    after: true,
  },
  {
    title: "Tüm enerjimizi daha temiz bir dünya için harcıyoruz.",
    description: "",
    image: "/assets/images/slider4.png",
    after: false,
    noneBg: true,
  },
  {
    title: "Dünya Elektriğinin %30’u <b>Yenilenebilir Kaynaklardan Sağlanıyor.</b>",
    description:
      "Küresel çapta yenilenebilir enerji, 2023 yılında elektrik üretiminin %30’unu karşıladı.",
    image: "",
    after: false,
  },
  {
    title: "Depolama Teknolojileri <b>Yenilenebilir Enerjiye Güç Katıyor</b>",
    description:
      "Türkiye’de de depolamalı rüzgar ve güneş enerjisi santralleri için çalışmalar hız kazandı.",
    image: "/assets/images/slider2.png",
    after: false,
  },
  {
    title: "Güneş Enerjisi <b>Türkiye’de Hızla Yükseliyor</b>",
    description: "",
    image: "/assets/images/slider3.png",
    after: true,
  },
  {
    title: "Tüm enerjimizi daha temiz bir dünya için harcıyoruz.",
    description: "",
    image: "/assets/images/slider4.png",
    after: false,
    noneBg: true,
  },
];

// Breakpoints
const breakpoints = {
  1600: {
    slidesPerView: 3.7,
    spaceBetween: 30,
  },
  992: {
    slidesPerView: 3.1,
    spaceBetween: 30,
  },
  500: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  0: {
    slidesPerView: 1.4,
    spaceBetween: 30,
  },
};
</script>


<style>
@media(max-width:992px){
  .cardSlider a{
 display: none;
} 

.cardSlider .swiper-container{
  padding: 100px 0px;
}
.cardSlider{
  margin-top: -232px;
}
}
.cardSlider{
  position: relative;
}

.cardSlider a{
  position: absolute;
    right: 100px;
    top: 0px;
    z-index: 3;
} 
.prevs{
    right: 250px !important;
    transform: rotate(-180deg);
}
@media(max-width:1400px){
  .cardSlider a{
  position: absolute;
    right: 30px !important;
    top: 0px;
    z-index: 3;
} 
}
</style>
