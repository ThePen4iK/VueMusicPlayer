<template>
  <div class="wrapper">
    <SwiperCarousel></SwiperCarousel>

    <Tabs :tabs="tabs" v-on:tab-change="handleTabChange"></Tabs>

    <ul class="tracks">
      <li class="tracks__item" v-for="item in filteredTabs" :key="item.id">
        <div class="tracks__hover">
          <img class="tracks__img" :src="item.img" alt="playlist" />
        </div>
        <h2 class="tracks__item-title">{{ item.artist }}</h2>
        <h3 class="tracks__item-subtitle">{{ item.title }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
import SwiperCarousel from "@/components/SwiperCarousel";
import Tabs from "@/components/Tabs";
import axios from "@/api";

export default {
  components: { Tabs, SwiperCarousel },
  data: () => ({
    tabs: ["Trending", "New Releases", "Most Played", "Workout"],
    activeTab: null,
    content: [
      {
        id: 0,
        title: "Believer",
        artist: "Imagine Dragons",
        img: require("../assets/music-img/imagine-dragons.jpg"),
        source: require("../assets/music/ImagineDragons-Believer.mp3"),
        category: ["Trending"],
      },
      {
        id: 1,
        title: "Immortal",
        artist: "NEFFEX",
        img: require("../assets/album-2.jpg"),
        source: require("../assets/music/NEFFEX-Immortal.mp3"),
        category: ["Featured"],
      },
      {
        id: 2,
        title: "Kerosene",
        artist: "Nightcore",
        img: require("../assets/album-4.jpg"),
        source: require("../assets/music/Nightcore ↬ kerosene [NV].mp3"),
        category: ["New Releases", "Trending"],
      },
      {
        id: 3,
        title: "Toxic",
        artist: "Omido",
        img: require("../assets/album-5.jpg"),
        source: require("../assets/music/Omido-Toxic.mp3"),
        category: ["Workout"],
      },
      {
        id: 4,
        title: "Heathens",
        artist: "Twenty one pilots",
        img: require("../assets/album-6.jpg"),
        source: require("../assets/music/twenty one pilots - Heathens.mp3"),
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
  beforeRouteLeave(to, from) {
    this.$store.commit("setAuth", false);
  },
  async created() {
  },
};
</script>

<style scoped lang="scss">
.tracks {
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 30px;

  list-style: none;

  &__item {
    position: relative;
    transition: all 0.5s ease-in-out;
    filter: brightness(100%);
    cursor: pointer;
    @media (any-hover: hover) {
      &:hover {
        & .tracks__img {
          transition: all 0.5s ease-in-out;
          filter: brightness(60%);
        }
        & .tracks__hover {
          position: relative;
          transition: all 0.5s ease-in-out;

          &:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #76ccfb;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            transition: all 0.5s ease-in-out;
            z-index: 2;
          }

          &:after {
            content: "";
            position: absolute;
            top: 50%;
            left: 51%;
            transform: translate(-50%, -50%);
            width: 26px;
            height: 32px;
            background: url("data:image/svg+xml,%3Csvg width='26' height='32' viewBox='0 0 16 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 2V20C0 20.7912 0.875246 21.269 1.54076 20.8412L15.5408 11.8412C16.1531 11.4475 16.1531 10.5525 15.5408 10.1588L1.54076 1.15882C0.875246 0.730995 0 1.20884 0 2ZM13.1507 11L2 18.1683V3.83167L13.1507 11Z' fill='%230F1E36'/%3E%3C/svg%3E%0A")
              no-repeat center center;
            transition: all 0.5s ease-in-out;
            z-index: 3;
          }
        }
      }
    }

    &-title {
      font-family: "Source Sans Pro", sans-serif;
      font-size: 22px;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: left;
      color: #76ccfb;
      margin-bottom: 5px;
      margin-top: 10px;
    }

    &-subtitle {
      font-family: "Source Sans Pro", sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
      color: #ffffff;
    }
  }

  &__img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
    border-radius: 15px;
    transition: all 0.5s ease-in-out;
  }
}

.wrapper {
  padding: 28px;
}
</style>
