<template>
    <div class="slider-container">
      <button class="slider-button prev" @click="prevSlide">‹</button>
      
      <div class="slider-track" :style="trackStyle">
        <div 
          v-for="(slide, index) in slides" 
          :key="index"
          :class="[
            'slide',
            { 'active': index === activeIndex },
            { 'prev-slide': index === activeIndex - 1 || (activeIndex === 0 && index === slides.length - 1) },
            { 'next-slide': index === activeIndex + 1 || (activeIndex === slides.length - 1 && index === 0) }
          ]"
          @click="setActive(index)"
        >
          <slot name="slide" :slide="slide" :index="index" :active="index === activeIndex"></slot>
        </div>
      </div>
      
      <button class="slider-button next" @click="nextSlide">›</button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const props = defineProps({
    slides: {
      type: Array,
      required: true
    },
    initialSlide: {
      type: Number,
      default: 0
    }
  });
  
  const activeIndex = ref(props.initialSlide);
  
  const trackStyle = computed(() => {
    // Aktif slaytı ortalamak için hesaplama
    const offset = -activeIndex.value * 100 + 100;
    return {
      transform: `translateX(${offset}%)`
    };
  });
  
  const nextSlide = () => {
    activeIndex.value = (activeIndex.value + 1) % props.slides.length;
  };
  
  const prevSlide = () => {
    activeIndex.value = (activeIndex.value - 1 + props.slides.length) % props.slides.length;
  };
  
  const setActive = (index) => {
    activeIndex.value = index;
  };
  </script>
  
  <style scoped>
  .slider-container {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
  }
  
  .slider-track {
    display: flex;
    transition: transform 0.5s ease;
    width: 100%;
  }
  
  .slide {
    flex: 0 0 33.333%;
    padding: 20px;
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .slide.active {
    transform: scale(1.1);
    z-index: 2;
    opacity: 1;
  }
  
  .slide.prev-slide {
    transform: rotate(-15deg) !important;
    opacity: 0.7;
    z-index: 1;
  }
  
  .slide.next-slide {
    transform: rotate(15deg) !important;
    opacity: 0.7;
    z-index: 1;
  }
  
  .slider-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .slider-button.prev {
    left: 10px;
  }
  
  .slider-button.next {
    right: 10px;
  }
  
  .slider-button:hover {
    background: rgba(0, 0, 0, 0.8);
  }
  </style>