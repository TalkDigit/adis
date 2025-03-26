<template>
  <div class="social-slider slider-container">
      <div class="slider-wrapper">
          <div v-for="(item, index) in items" :key="index" class="slider-item" :class="getSlideClass(index)">
              <img :src="item.image" alt="Slider Image" class="slider-image" />
              <div class="sliderContent">
                <h2 class="slider-title" v-html="item.title"></h2>
                 <p class="slider-description" v-html="item.description"></p>
              </div>
          </div>
      </div>
      <button @click="prevSlide" class="nav-button prev">&#9665;</button>
      <button @click="nextSlide" class="nav-button next">&#9655;</button>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const items = ref([
      {
          image: "/assets/images/social.png",
          title: "The future of renewable <br> energy is bright with us 1",
          description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet? Curae etiam et efficitur, lacus tortor turpis! Fermentum lacinia lacinia vel felis molestie ad. <br><br> Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet? Curae etiam et efficitur, lacus tortor turpis! Fermentum lacinia lacinia vel felis molestie ad.",
      },
      {
          image: "/assets/images/social.png",
          title: "The future of renewable <br> energy is bright with us 2",
          description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet? Curae etiam et efficitur, lacus tortor turpis! Fermentum lacinia lacinia vel felis molestie ad. <br><br> Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet? Curae etiam et efficitur, lacus tortor turpis! Fermentum lacinia lacinia vel felis molestie ad.",
      },
      {
          image: "/assets/images/social.png",
          title: "The future of renewable <br> energy is bright with us 3",
          description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet? Curae etiam et efficitur, lacus tortor turpis! Fermentum lacinia lacinia vel felis molestie ad. <br><br> Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet? Curae etiam et efficitur, lacus tortor turpis! Fermentum lacinia lacinia vel felis molestie ad.",
      },
      {
          image: "/assets/images/social.png",
          title: "The future of renewable <br> energy is bright with us 4",
          description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet? Curae etiam et efficitur, lacus tortor turpis! Fermentum lacinia lacinia vel felis molestie ad. <br><br> Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet? Curae etiam et efficitur, lacus tortor turpis! Fermentum lacinia lacinia vel felis molestie ad.",
      },
  ]);

  const activeIndex = ref(1);

  const prevSlide = () => {
      activeIndex.value = (activeIndex.value - 1 + items.value.length) % items.value.length;
  };

  const nextSlide = () => {
      activeIndex.value = (activeIndex.value + 1) % items.value.length;
  };

  const getSlideClass = (index) => {
      if (index === activeIndex.value) return "active";
      if (index === (activeIndex.value - 1 + items.value.length) % items.value.length) return "slide-prev";
      if (index === (activeIndex.value + 1) % items.value.length) return "slide-next";
      return "hidden";
  };
</script>

<style scoped>
  .slider-container {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      height: 900px;
  }
  .social-slider h2 {
      font-size: 30px;
      color: #565656;
      font-weight: 300;
      margin-bottom: 17px;
  }
  .social-slider img {
      width: 100%;
      height: 309px;
  }
  .social-slider p {
      color: #9b9b9b;
      font-weight: 300;
  }
  .slider-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
  }

  .slider-item {
      width: 579px;
      height: 657px;
      background: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      transition: transform 0.5s ease, opacity 0.5s ease;
      box-shadow: 0px 0px 60px #00000029;
      border-radius: 25px;
  }

  .slider-image {
      object-fit: cover;
      border-radius: 25px 25px 0px 0px;

  }
  .sliderContent{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 37px;
  }
  .active {
      width: 609px;
      height: 629px;
      z-index: 2;
  }

  .slide-prev {
      transform: rotate(-15deg) translateX(-77%);
      opacity: 0.4;
      scale: 0.8;
  }
  .slide-prev img{
    opacity: 0;
  }
  .slide-next img{
    opacity: 0;
  }
  .slide-next {
      transform: rotate(15deg) translateX(77%);
      opacity: 0.4;
      scale: 0.8;
  }

  .hidden {
      display: none;
  }

  .nav-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
  }

  .prev {
      left: 10px;
  }

  .next {
      right: 10px;
  }
</style>
