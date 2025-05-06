<template>
    <div class="containerImg">
        <img src="/assets/images/kutu-min.webp" width="857" height="522" alt="Raf Görseli" />

        <!-- Marker 1 -->
        <div class="marker" data-line="vertical" style="width:90px; height:90px; top: -14%; right: 22%;">
            <span class="label">Raf</span>
        </div>

        <!-- Marker 2 -->
        <div class="marker" data-line="diagonal-left" style="width:113px; height:113px; top: -14%; right: 9%;">
            <span class="label">Modül</span>
        </div>

        <!-- Marker 3 -->
        <div class="marker" data-line="diagonal-right" style="width:221px; height:221px; top: 3%; right: -9%;">
            <span class="label">Sıvı Soğutma <br> Ünitesi</span>
        </div>

        <!-- Marker 4 -->
        <div class="marker" data-line="dashed-vertical" style="width:153px; height:153px; top: 58%; right: -3%;">
            <span class="label">Kontrol <br> Paneli</span>
        </div>

        <!-- Marker 5 -->
        <div class="marker" data-line="dashed-diagonal" style="width:206px; height:206px; bottom: -43%; right: 24%;">
            <span class="label">HV Kutu</span>
        </div>
    </div>
</template>

<script>
export default {
  mounted() {
    this.observeMarkers();
  },
  methods: {
    observeMarkers() {
      const markers = document.querySelectorAll('.marker');
      const options = {
        threshold: 0.5, // Marker %50 görünür olduğunda tetiklenir
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Göründü, animasyonu başlat
          } else {
            entry.target.classList.remove('visible'); // Gizlendi, animasyonu durdur
          }
        });
      }, options);

      markers.forEach(marker => observer.observe(marker));
    },
  },
};
</script>


<style lang="scss">


.containerImg {
    position: relative;
    display: flex;
    justify-content: flex-end;
    padding-right: 140px;

    img {
        mix-blend-mode: multiply;
        background-color: rgba(255, 255, 255, 0.01);
        max-width: 100%;
        height: auto;
    }
}

.marker {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #CBCBCB;
    border-radius: 100%;
    background: linear-gradient(212deg, #E5E5E500, #D7D7D7, #CBCBCB00);
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.5s ease, transform 0.5s ease;
    .label{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #626262;
        letter-spacing: -0.55px;
        font-size: 22px;
        font-weight: bold;
        text-align: center;
    }
    &::before {
        content: "";
        position: absolute;
        width: 2px;
        height: 60px;
        background: #CBCBCB;
        top: 50px; 
        left: 50%;
        transform: translateX(-50%);
    }

    &.label {
        position: relative;
        background: #fff;
        padding: 5px 10px;
        border-radius: 10px;
        font-size: 12px;
        font-weight: bold;
        color: #626262;
        z-index: 2;
    }
    &.visible {
        opacity: 1;
        transform: scale(1);
    }

    &[data-line="vertical"]::before {
        height: 95px;
        height: 98px;
        transform: rotate(8deg);
        top: 86px;
        left: 34%;
    }

    &[data-line="diagonal-left"]::before {
        height: 217px;
        width: 2px;
        top: 57px;
        left: -69px;
        transform: rotate(46deg);
    }

    &[data-line="diagonal-right"]::before {
        height: 123px;
        width: 2px;
        transform: translateX(-50%) rotate(51deg);
        top: 135px;
        left: -36px;
    }

    &[data-line="dashed-vertical"]::before {
        height: 163px;
        width: 2px;
        transform: translateX(-50%) rotate(95deg);
        top: -5px;
        left: -79px;
    }

    &[data-line="dashed-diagonal"]::before {
        height: 98px;
        transform: rotate(340deg);
        top: -94px;
        left: 28%;
    }
}



</style>
