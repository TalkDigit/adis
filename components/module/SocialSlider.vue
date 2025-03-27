<template>
    <div class="social-slider slider-container">
        <div
  class="slider-wrapper"
  @mousedown="onTouchStart"
  @mouseup="onTouchEnd"
  @touchstart="onTouchStart"
  @touchend="onTouchEnd"
>

        <div
          v-for="(item, index) in items"
          :key="index"
          class="slider-item"
          :class="getSlideClass(index)"
        >
          <img :src="item.image" alt="Slider Image" class="slider-image" />
          <div class="sliderContent">
            <h2 class="slider-title" v-html="item.title"></h2>
            <p class="slider-description" v-html="item.description"></p>
          </div>
        </div>
        <a class="linkSocial" href="#">
          <IconsLink />
        </a>
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
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet? Curae etiam et efficitur, lacus tortor turpis! Fermentum lacinia lacinia vel felis molestie ad. <br><br> Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet? Curae etiam et efficitur, lacus tortor turpis! Fermentum lacinia lacinia vel felis molestie ad.",
    },
    {
      image: "/assets/images/social.png",
      title: "The future of renewable <br> energy is bright with us 2",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet? Curae etiam et efficitur, lacus tortor turpis! Fermentum lacinia lacinia vel felis molestie ad. <br><br> Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet? Curae etiam et efficitur, lacus tortor turpis! Fermentum lacinia lacinia vel felis molestie ad.",
    },
    {
      image: "/assets/images/social.png",
      title: "The future of renewable <br> energy is bright with us 3",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet? Curae etiam et efficitur, lacus tortor turpis! Fermentum lacinia lacinia vel felis molestie ad. <br><br> Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet? Curae etiam et efficitur, lacus tortor turpis! Fermentum lacinia lacinia vel felis molestie ad.",
    },
    {
      image: "/assets/images/social.png",
      title: "The future of renewable <br> energy is bright with us 4",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet? Curae etiam et efficitur, lacus tortor turpis! Fermentum lacinia lacinia vel felis molestie ad. <br><br> Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti aliquet semper fusce, orci nunc iaculis amet? Curae etiam et efficitur, lacus tortor turpis! Fermentum lacinia lacinia vel felis molestie ad.",
    },
  ]);
  
  const activeIndex = ref(1);
  let startX = 0;
  let endX = 0;
  
  const prevSlide = () => {
    activeIndex.value = (activeIndex.value - 1 + items.value.length) % items.value.length;
  };
  
  const nextSlide = () => {
    activeIndex.value = (activeIndex.value + 1) % items.value.length;
  };
  
  const getSlideClass = (index) => {
    if (index === activeIndex.value) return "active";
    if (index === (activeIndex.value - 1 + items.value.length) % items.value.length)
      return "slide-prev";
    if (index === (activeIndex.value + 1) % items.value.length) return "slide-next";
    return "hidden";
  };
  
  // Sürükleme Başlangıcı
  const onTouchStart = (event) => {
    startX = event.touches ? event.touches[0].clientX : event.clientX;
  };
  
  // Sürükleme Bitişi
  const onTouchEnd = (event) => {
    endX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
    const diff = startX - endX;
  
    if (diff > 50) {
      nextSlide(); // Sola sürüklediyse sonraki slide
    } else if (diff < -50) {
      prevSlide(); // Sağa sürüklediyse önceki slide
    }
  };
  </script>
  
  
  <style scoped>
  .linkSocial {
    z-index: 9;
    bottom: 0px;
    position: absolute;
  }
  .slider-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 900px;
    overflow: hidden; /* Taşan öğeleri gizler */
    padding-bottom: 100px;
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
  .slider-wrapper:active {
  cursor: grabbing;
}

  .slider-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 50px 0;
    height: 100%;
  }
  .nav-button.prev:before{
    content: "PREV";
    position: absolute;
    top: 30px;
    color: #D8D8D8;
    z-index: 9;
    left: -60px;
    font-size: 16px;
    font-weight: 300;
  }
  .nav-button.next:before{
    content: "NEXT";
    position: absolute;
    top: 30px;
    color: #D8D8D8;
    z-index: 9;
    right: -60px;
    font-size: 16px;
    font-weight: 300;
  }
  .slider-item {
    width: 579px;
    height: 657px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    transition: transform 0.75s ease, opacity 0.75s ease;
    box-shadow: 0px 0px 60px #00000029;
    border-radius: 25px;
    transform-origin: center; /* Yumuşak dönüş için merkezde dönüş */
}
  .slider-image {
    object-fit: cover;
    border-radius: 25px 25px 0px 0px;
  }
  .sliderContent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 37px;
  }
  .active {
    width: 609px;
    height: 629px;
    z-index: 2;
    transform: scale(1) rotate(0deg); /* Doğrudan aktif slide'a geldiğinde sabit kalır */
    opacity: 1;
}

/* Previous Slide */
.slide-prev {
    transform: scale(0.8) rotate(-15deg) translateX(-90%) translateY(9%); /* Daha fazla dışarıya kaydır */
    background: #eaeaea;
}
.slide-prev .sliderContent{
    opacity: 0.5;
}

.slide-next .sliderContent{
    opacity: 0.5;
} 
/* Next Slide */
.slide-next {
    transform: scale(0.8) rotate(15deg)  translateX(90%)   translateY(9%); /* Daha fazla dışarıya kaydır */
    background: #eaeaea;
}
  
/* Hidden slides */
.hidden {
    display: none;
}

  .slide-prev img {
    opacity: 0;
  }
  
  .slide-next img {
    opacity: 0;
  }
  
  .hidden {
    display: none;
  }
  
  .nav-button {
    position: absolute;
    top: 56%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 0px;
    width: 80px;
    height: 80px;
    cursor: pointer;
    background: url("/assets/images/langbg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 10px 20px #00000027;
    border-radius: 30px;
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .prev {
    left: 27%;
  }
  
  .prev::after {
    content: url("/assets/images/leftt.svg");
  }
  
  .next {
    right: 27%;
  }
  
  .next::after {
    content: url("/assets/images/rightt.svg");
  }
  </style>
  