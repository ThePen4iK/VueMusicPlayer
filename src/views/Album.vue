<template>
  <div class="album__container">
    <div class="album__wrapper">
      <div class="album__img">
        <img :src="currentAlbum.cover" alt="album" />
      </div>
      <div class="album__info">
        <div class="album__title">{{currentAlbum.title}}</div>
        <ul class="album__list">
          <li class="album__item">
            <p class="album__tracks">12 Songs</p>
          </li>
          <li class="album__item">
            <p class="album__time">2h 48mins</p>
          </li>
        </ul>

        <button class="album__btn">
          Play
          <svg class="album__play" width="16" height="22">
            <use xlink:href="../../src/assets/sprite.svg#album-play"></use>
          </svg>
        </button>
      </div>
    </div>

    <header class="album__header">
      <div class="album__number">#</div>
      <div class="album__song">Songs</div>
      <div class="album__duration">Duration</div>
      <div class="album__add">Add to playlist</div>
    </header>
    <ul class="track__list">
      <li class="track__item" v-for="song in currentAlbum.songs" :key="song.id">
        <div class="track__number">1</div>

        <div class="track__wrap">
          <img class="track__img" :src="song.img" alt="track" />
          <div class="track__name">Make It Right</div>
        </div>

        <div class="track__time">{{song.duration}}</div>

        <div class="track__add">
          <svg class="track__icon" width="20" height="20">
            <use xlink:href="../../src/assets/sprite.svg#track-add"></use>
          </svg>
        </div>
      </li>

      <!-- <li class="track__item">
        <div class="track__number">2</div>

        <div class="track__wrap">
          <img class="track__img" src="../assets/album-3.jpg" alt="track" />
          <div class="track__name">Make It Right</div>
        </div>

        <div class="track__time">03:46</div>

        <div class="track__add">
          <svg class="track__icon" width="20" height="20">
            <use xlink:href="../../src/assets/sprite.svg#track-add"></use>
          </svg>
        </div>
      </li>

      <li class="track__item">
        <div class="track__number">3</div>

        <div class="track__wrap">
          <img class="track__img" src="../assets/album-1.jpg" alt="track" />
          <div class="track__name">Make It Right</div>
        </div>

        <div class="track__time">03:46</div>

        <div class="track__add">
          <svg class="track__icon" width="20" height="20">
            <use xlink:href="../../src/assets/sprite.svg#track-add"></use>
          </svg>
        </div>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    albums: [
      {
        id: 0,
        title: "IMAGINE DRAGONS",
        cover: require("@/assets/album-1.jpg"),
        songs: [
          {
            id: 0,
            img: require("@/assets/album-2.jpg"),
            duration: "03:46",
          },
          {
            id: 1,
            img: require("@/assets/album-3.jpg"),
            duration: "03:23",
          },
        ],
      },
      {
        id: 1,
        title: "twenty one pilots",
        cover: require("@/assets/album-2.jpg"),
        songs: [
          {
            id: 0,
            img: require("@/assets/album-2.jpg"),
            duration: "03:46",
          },
          {
            id: 1,
            img: require("@/assets/album-3.jpg"),
            duration: "03:23",
          },
        ],
      },
    ],
  }),
  computed:{
    currentAlbum(){
      return this.albums.find(obj => obj.id === Number(this.$route.params.id))
    }
  }
};
</script>

<style scoped lang="scss">
.album {
  &__container {
    padding: 28px 28px 0;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 350px 1fr;
    gap: 40px;
    margin-bottom: 35px;
  }
  &__img {
    img {
      width: 100%;
      max-width: 350px;
      height: 100%;
      border-radius: 24px;

      object-fit: cover;
      object-position: center;
    }
  }

  &__title {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: left;
    color: #76ccfb;
    text-transform: uppercase;
  }
  &__list {
    list-style: none;
    margin-bottom: 25px;
  }
  &__item {
    p {
      font-family: "Source Sans Pro", sans-serif;
      font-size: 24px;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
      color: #76ccfb;
    }

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  &__btn {
    border: none;
    outline: none;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #0f1e36;
    background: #76ccfb;
    border-radius: 18px;
    padding: 8px 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
    @media (any-hover: hover) {
      &:hover {
        transition: all 0.5s ease-in-out;
        background: rgba(255, 255, 255, 0.8);
      }
    }
  }
  &__play {
    margin-left: 10px;
  }

  &__header {
    display: grid;
    grid-template-columns: auto 1fr 1fr 1fr;
    align-items: center;

    padding: 15px 0px;
    & div {
      &:nth-child(2) {
        text-align: left;
      }
      font-family: "Source Sans Pro", sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 13px;
      letter-spacing: 0px;
      text-align: center;
      color: #76ccfb;
    }
  }
  &__number {
    margin-right: 62px;
  }
}

.track {
  &__list {
    list-style: none;
    padding: 15px 0;
  }
  &__item {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0px;
    text-align: left;

    display: grid;
    grid-template-columns: auto 1fr 1fr 1fr;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: 18px;
    }
  }
  &__number {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0px;
    text-align: left;
    color: #ffffff;
    margin-right: 62px;
  }
  &__wrap {
    display: flex;
    align-items: center;
  }
  &__img {
    width: 70px;
    height: 50px;
    object-fit: cover;
    object-position: center;
  }
  &__name {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: #ffffff;
    margin-left: 12px;
  }
  &__time {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0px;
    text-align: center;
    color: #ffffff;
  }
  &__add {
    margin: 0 auto;
    transition: all 0.5s ease-in-out;
    color: #76ccfb;
    cursor: pointer;
    @media (any-hover: hover) {
      &:hover {
        transition: all 0.5s ease-in-out;
        color: #ffffff;
      }
    }
  }
}
</style>
