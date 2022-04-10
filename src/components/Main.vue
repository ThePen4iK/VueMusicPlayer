<template>
  <main class="main">
    <SwiperCarousel></SwiperCarousel>

    <Tabs></Tabs>

  </main>
</template>

<script>


import SwiperCarousel from "@/components/SwiperCarousel";
import Tabs from "@/components/Tabs";
export default {
  components: {Tabs, SwiperCarousel}
};
</script>

<style scoped lang="scss">
.main {
  grid-area: main;
  background: #0F1E36;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
</style>