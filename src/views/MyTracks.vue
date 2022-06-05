<template>
  <div class="track">
    <header class="track__header">
      <div class="track__number">#</div>
      <div class="track__song">Songs</div>
      <div class="track__duration">Duration</div>
    </header>
    <ul class="track__list">
      <li class="track__item">
        <div class="track__number">1</div>

        <div class="track__wrap">
          <div class="track__hover">
            <img class="track__img" src="../assets/album-2.jpg" alt="track">
          </div>
          <div class="track__name">Make It Right</div>
        </div>

        <div class="track__time">03:46</div>


      </li>

      <li class="track__item">
        <div class="track__number">2</div>
        <div class="track__wrap">
          <div class="track__hover">
            <img class="track__img" src="../assets/album-3.jpg" alt="track">
          </div>
          <div class="track__name">Make It Right</div>
        </div>
        <div class="track__time">03:46</div>
      </li>

      <li class="track__item">
        <div class="track__number">3</div>

        <div class="track__wrap">
          <div class="track__hover">
            <img class="track__img" src="../assets/album-1.jpg" alt="track">
          </div>
          <div class="track__name">Make It Right</div>
        </div>

        <div class="track__time">03:46</div>


      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.track {
  padding: 28px;

  &__header {
    display: grid;
    grid-template-columns: auto 2fr 1fr;
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
    grid-template-columns: auto 2fr 1fr;
    align-items: center;

    position: relative;
    cursor: pointer;

    transition: all 0.5s ease-in-out;
    filter: brightness(100%);

    &:not(:last-child) {
      margin-bottom: 18px;
    }

    @media(any-hover: hover) {
      &:hover {
        & .track__img {
          transition: all 0.5s ease-in-out;
          filter: brightness(60%);
        }

        & .track__hover {
          position: relative;
          transition: all 0.5s ease-in-out;

          &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #76CCFB;
            width: 25px;
            height: 25px;
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
            width: 13px;
            height: 18px;
            background: url("data:image/svg+xml,%3Csvg width='13' height='18' viewBox='0 0 16 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 2V20C0 20.7912 0.875246 21.269 1.54076 20.8412L15.5408 11.8412C16.1531 11.4475 16.1531 10.5525 15.5408 10.1588L1.54076 1.15882C0.875246 0.730995 0 1.20884 0 2ZM13.1507 11L2 18.1683V3.83167L13.1507 11Z' fill='%230F1E36'/%3E%3C/svg%3E%0A") no-repeat center center;
            transition: all 0.5s ease-in-out;
            z-index: 3;

          }
        }
      }
    }

  }

  &__number {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0px;
    text-align: left;
    color: #FFFFFF;
    margin-right: 62px;
  }

  &__wrap {
    display: flex;
    align-items: center;
    position: relative;
  }

  &__img {
    width: 70px;
    height: 50px;
    object-fit: cover;
    object-position: center;
    transition: all 0.5s ease-in-out;
    filter: brightness(100%);
  }

  &__name {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: #FFFFFF;
    margin-left: 12px;
  }

  &__time {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0px;
    text-align: center;
    color: #FFFFFF;
  }

  &__add {
    margin: 0 auto;
    transition: all 0.5s ease-in-out;
    color: #76CCFB;
    cursor: pointer;
    @media(any-hover: hover) {
      &:hover {
        transition: all 0.5s ease-in-out;
        color: #FFFFFF;
      }
    }
  }
}
</style>