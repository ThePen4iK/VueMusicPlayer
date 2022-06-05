<template>
<!--  loop-->
<!--  :looped-slides="12"-->
  <section class="slider">
    <swiper
        :slides-per-view="'auto'"
        :space-between="42"

        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <swiper-slide class="slider__slide" v-for="album in albums" :key="album.id" @click="$router.push({name: 'Album', params: {id: album.id}})">
        <img class="slider__img" :src="album.img" alt="1" />
      </swiper-slide>

    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import {reactive} from 'vue';

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

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
      console.log("slide change");
    };

    const albums = reactive([
      {
        id: 0,
        img: require('@/assets/album-1.jpg')
      },
            {
        id: 1,
        img: require('@/assets/album-2.jpg')
      },
            {
        id: 2,
        img: require('@/assets/album-3.jpg')
      },
            {
        id: 3,
        img: require('@/assets/album-5.jpg')
      }
    ])

    return {
      onSwiper,
      onSlideChange,
      albums
    };
  },
};
</script>

<style scoped lang="scss">
.slider {
  padding: 15px 0;
  &__slide {
    flex: 0 0 402px;
    position: relative;
    cursor: pointer;
    @media(any-hover: hover){
      &:hover{
        & .slider__img{
          transition: all 0.5s ease-in-out;
          filter: brightness(60%);
        }

        &:before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #76CCFB;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transition: all 0.5s ease-in-out;
          z-index: 2;
        }

        &:after {
          content: '';
          position: absolute;
          top: 50%;
          left: 51%;
          transform: translate(-50%, -50%);
          width: 26px;
          height: 32px;
          background: url("data:image/svg+xml,%3Csvg width='26' height='32' viewBox='0 0 16 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 2V20C0 20.7912 0.875246 21.269 1.54076 20.8412L15.5408 11.8412C16.1531 11.4475 16.1531 10.5525 15.5408 10.1588L1.54076 1.15882C0.875246 0.730995 0 1.20884 0 2ZM13.1507 11L2 18.1683V3.83167L13.1507 11Z' fill='%230F1E36'/%3E%3C/svg%3E%0A") no-repeat center center;
          transition: all 0.5s ease-in-out;
          z-index: 3;

        }
      }
    }
  }
  &__img {
    border-radius: 8px;
    width: 100%;
    height: 255px;

    object-fit: cover;
    object-position: center;

    transition: all 0.5s ease-in-out;

  }
}
</style>
