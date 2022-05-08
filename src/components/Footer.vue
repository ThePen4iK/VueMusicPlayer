<template>
  <footer class="footer">
    <div class="footer__wrapper" v-if="currentTrack">
      <div class="album__wrapper" >
        <div class="album__icon">
          <img class="album__img" v-bind:src="currentTrack.img" alt="album img">
        </div>
        <div class="album__about">
          <p class="album__name">{{ currentTrack.name }}</p>
          <p class="album__track">{{ currentTrack.artist }}</p>
        </div>
      </div>

      <div class="player__controls">
        <button class="player__controls-btn" @click="prevTrack">
          <svg class="player__controls-prev" width="20" height="18">
            <use xlink:href="../../src/assets/sprite.svg#player-prev"></use>
          </svg>
        </button>

        <button class="player__controls-btn" @click="play">
          <svg class="player__controls-play" width="14" height="20">
            <use xlink:href="../../src/assets/sprite.svg#player-play" v-if="isTimerPlaying" ></use>
            <use xlink:href="../../src/assets/sprite.svg#player-pause" v-else></use>
          </svg>
        </button>

        <button class="player__controls-btn" @click="nextTrack">
          <svg class="player__controls-next" width="20" height="18">
            <use xlink:href="../../src/assets/sprite.svg#player-next"></use>
          </svg>
        </button>
      </div>

      <div class="player__progress" ref="progress">
        <div class="player__progress-time">{{ currentTime }}</div>

        <div class="player__progress-bar" @click="clickProgress">
          <div class="player__progress-current" :style="{ width: barWidth}"></div>
        </div>

        <div class="player__progress-duration">{{ duration }}</div>
      </div>

      <div class="player__controls player__controls--mod">
        <button class="player__controls-btn">
          <svg class="player__controls-random" width="19" height="18">
            <use xlink:href="../../src/assets/sprite.svg#player-random"></use>
          </svg>
        </button>

        <button class="player__controls-btn">
          <svg class="player__controls-random" width="24" height="23">
            <use xlink:href="../../src/assets/sprite.svg#player-favorites"></use>
          </svg>
        </button>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      audio: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null,
      tracks: [
        {
          name: "Believer",
          artist: "Imagine Dragons",
          img: require('../assets/music-img/imagine-dragons.jpg'),
          source: require('../assets/music/ImagineDragons-Believer.mp3'),
        },
        {
          name: "Heathens",
          artist: "twenty one pilots",
          img: require('../assets/music-img/player-icon.jpg'),
          source: require('../assets/music/twenty one pilots - Heathens.mp3'),
        }
      ]
    }
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";

      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";

      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if (this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
  },

  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };
  }

}
</script>

<style scoped lang="scss">
.footer {
  grid-area: foot;
  background: #0F1E36;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  &__wrapper {
    display: flex;
    //justify-content: space-between;
    align-items: center;
    gap: 35px;

    border: 1px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 65px;
    padding: 0 42px;
  }

}

.album {
  &__about {
    margin: 0 auto;

  }

  &__icon {

  }
  &__wrapper{
    display: flex;
    align-items: center;
    gap: 20px;
  }
  &__img {
    width: 72px;
    height: 72px;

    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }

  &__name {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: #76CCFB;
  }

  &__track {
    margin-top: 7px;

    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #76CCFB;
  }
}

.player {
  &__controls {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 0 auto;

    &--mod {
      grid-template-columns: repeat(2, 1fr);
      margin: 0 auto;

    }

    &-btn {
      background: transparent;
    }

    &-prev {

    }

    &-play {

    }

    &-next {

    }
  }

  &__progress {
    display: flex;
    align-items: center;
    margin: 0 auto;

    &-bar {
      width: 350px;
      height: 6px;
      background: #FFFFFF;
      cursor: pointer;
      border-radius: 10px;
      position: relative;
      margin: 0 12px;
    }

    &-time {
      font-family: "Source Sans Pro", sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 13px;
      letter-spacing: 0px;
      text-align: left;
      color: #ffffff;
      opacity: 0.5;
    }

    &-current {
      width: 0;
      height: inherit;
      border-radius: 10px;

      background: #76CCFB;
    }

    &-duration {
      font-family: "Source Sans Pro", sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 13px;
      letter-spacing: 0px;
      text-align: left;
      color: #ffffff;

      opacity: 0.5;
    }


  }
}
</style>