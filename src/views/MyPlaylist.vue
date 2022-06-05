<template>
  <div class="playlist__container">
    <h1 class="playlist__title">Playlists </h1>
    <ul class="playlist__list">
      <li class="playlist__item">
        <picture class="picture">
          <img class="playlist__img" src="../assets/album-1.jpg" alt="playlist">
        </picture>
        <h2 class="playlist__item-title">Main Playlist</h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.playlist {

  &__container {
    padding: 28px;
  }

  &__title {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: #76CCFB;
    margin-bottom: 25px;
  }

  &__list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }

  &__item {
    position: relative;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    @media(any-hover: hover) {
      &:hover {
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

        & .playlist__img {
          transition: all 0.5s ease-in-out;
          filter: brightness(60%)
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
      color: #76CCFB;
      margin-top: 10px;
    }
  }

  &__img {
    width: 100%;
    //max-width: 325px;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 15px;

    transition: all 0.5s ease-in-out;
  }

}
</style>
