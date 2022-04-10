<template>
  <section class="slider">

    <swiper
        :slides-per-view="auto"
        :space-between="42"
        :centered-slides="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <swiper-slide class="slider__slide">
        <img class="slider__img" src="../assets/slide-1.jpg" alt="1">
      </swiper-slide>
      <swiper-slide class="slider__slide">
        <img class="slider__img" src="../assets/slide-1.jpg" alt="2">
      </swiper-slide>
      <swiper-slide class="slider__slide">
        <img class="slider__img" src="../assets/slide-1.jpg" alt="3">
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
}
</script>

<style scoped lang="scss">
.slider {
  padding: 15px 0;
  &__slide{
    flex: 0 0 402px;
  }
  &__img {
    border-radius: 8px;
  }
}

</style>