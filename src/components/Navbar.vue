<template>
  <nav class="navbar">

    <div class="user">
      <!--  user -->
      <svg class="user__icon" width="46" height="46" fill="none">
        <use xlink:href="../../src/assets/sprite.svg#user"></use>
      </svg>

      <div class="user__wrapper">
        <router-link to="/signin" class="user__btn " >Sign in</router-link>
      </div>
    </div>

    <ul class="navbar__list">
      <li class="navbar__item">
        <router-link active-class="active" to="/" class="navbar__link">Home</router-link>
      </li>
      <li class="navbar__item">
        <router-link active-class="active" to="/playlist" class="navbar__link">My Playlist</router-link>
      </li>
      <li class="navbar__item">
        <a href="#" class="navbar__link">Radio</a>
      </li>

      <li class="navbar__item">
        <a href="#" class="navbar__link">Podcast</a>
      </li>

      <li class="navbar__item">
        <a href="#" class="navbar__link">Downloads</a>
      </li>

      <li class="navbar__item">
        <a href="#" class="navbar__link">Library</a>
      </li>

      <li class="navbar__item">
        <a href="#" class="navbar__link">Language</a>
      </li>

      <li class="navbar__item">
        <a href="#" class="navbar__link">Settings</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  flex-direction: column;


  background: #0F1E36;
  position: relative;
  z-index: 3;

  padding: 30px 15px;
  grid-area: nav;

  &__list {
    padding: 0 15px;
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  &__link {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: #76CCFB;
    transition: all 0.5s ease-in-out;
  }
}

.active {
  transition: all 0.5s ease-in-out;
  color: #FFFFFF;

}

.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  &__icon {
    margin-bottom: 20px;
  }

  &__btn {
    background: transparent;

    font-family: "Source Sans Pro", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;

    color: #76CCFB;
    position: relative;
    transition: all 0.5s ease-in-out;
    @media(any-hover: hover) {
      &:hover {
        transition: all 0.5s ease-in-out;
        color: #ffffff;
      }
    }

    //&:not(:last-child) {
    //  margin-right: 10px;
    //}

    //&:first-child {
    //  &:after {
    //    content: '/';
    //    position: absolute;
    //    width: 1px;
    //    height: 100%;
    //    top: 50%;
    //    right: -4px;
    //    transform: translate(0%, -50%);
    //  }
    //}
  }
}
</style>