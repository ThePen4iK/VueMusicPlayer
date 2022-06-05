<template>
  <header class="header">
    <div class="header__logo">
      <svg class="logo-icon" width="31" height="41" fill="none">
        <use xlink:href="../../src/assets/sprite.svg#logo"></use>
      </svg>
    </div>
    <!--  search -->
    <div class="header__wrapper-search">
      <form class="search">
        <input-search></input-search>
      </form>
    </div>
    <ul class="header__list">
      <li class="header__item">
        <!--  microfon -->
        <svg class="header__icon header__icon--history" width="16" height="22">
          <use xlink:href="../../src/assets/sprite.svg#micro"></use>
        </svg>
      </li>

      <li class="header__item">
        <!--  history -->
        <svg class="header__icon header__icon--history" width="22" height="22">
          <use xlink:href="../../src/assets/sprite.svg#history"></use>
        </svg>
      </li>

      <li class="header__item">
        <!-- bell -->
        <svg class="header__icon header__icon--bell" width="20" height="23">
          <use xlink:href="../../src/assets/sprite.svg#bell"></use>
        </svg>
      </li>

      <li class="header__item">
        <!-- favorite -->
        <svg class="header__icon header__icon--favorite" width="24" height="23">
          <use xlink:href="../../src/assets/sprite.svg#favorite"></use>
        </svg>
      </li>

      <li class="header__item">
        <!--  player-list  -->
        <svg class="header__icon header__icon--favorite" width="24" height="24">
          <use xlink:href="../../src/assets/sprite.svg#player-list"></use>
        </svg>
      </li>
    </ul>


  </header>
</template>

<script>
import InputSearch from "@/components/UI/InputSearch";

export default {
  components: {
    InputSearch
  }
}
</script>

<style scoped lang="scss">
.header {
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  gap: 30px;
  align-items: center;

  background: #0F1E36;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px 30px;

  width: 100%;
  max-width: calc(100vw - 285px);
  height: 81px;

  position: relative;
  z-index: 3;

  grid-area: head;
  &__wrapper {


    &-search {
      flex: 0 1 550px;
      position: relative;
    }
  }

  &__list {
    display: flex;
    margin-left: auto;
  }

  &__item{
    display: flex;
    justify-content: center;
    align-items: center;
    &:not(:last-child){
      margin-right: 30px;
    }
  }

  &__icon {
    cursor: pointer;
  }
}

.search {

}
</style>