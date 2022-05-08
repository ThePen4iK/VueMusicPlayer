<template>
  <div>
    <SwiperCarousel></SwiperCarousel>

    <Tabs :tabs="tabs" v-on:tab-change="handleTabChange"></Tabs>
    <div class="data">
      <div class="track" v-for="item in filteredTabs" :key="item.id">
        <pre>{{ item }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCarousel from "@/components/SwiperCarousel";
import Tabs from "@/components/Tabs";
export default {
  components: { Tabs, SwiperCarousel },
  data: () => ({
    tabs: [
      "Trending",
      "Featured",
      "New Releases",
      "Genres",
      "Most Played",
      "Workout",
    ],
    activeTab: null,
    content: [
      {
        id: 0,
        title: "Judas",
        artist: "Lady Gaga",
        category: ["Trending"],
      },
      {
        id: 1,
        title: "Paparazzi",
        artist: "Lady Gaga",
        category: ["Featured", "Genres"],
      },
      {
        id: 2,
        title: "Just Dance",
        artist: "Lady Gaga",
        category: ["Featured", "Trending"],
      },
      {
        id: 3,
        title: "Meet Me Halfway",
        artist: "The Black Eye Peace",
        category: ["Workout"],
      },
      {
        id: 4,
        title: "Can't Hold Us",
        artist: "Macklemore & Ryan Lewis",
        category: ["Most Played", "Trending"],
      },
    ],
  }),
  methods: {
    handleTabChange(tab) {
      this.activeTab = tab;
    },
  },
  computed: {
    filteredTabs() {
      return this.content.filter((item) => {
        return !this.activeTab || item.category.includes(this.activeTab);
      });
    },
  },
};
</script>

<style scoped lang="scss">


.track {
  color: azure;
  font-size: 18px;
}
</style>
