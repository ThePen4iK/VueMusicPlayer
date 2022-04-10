<template>
  <footer class="footer">
    <p class="footer__text">Test</p>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.footer{
  grid-area: foot;
  background: #0F1E36;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &__text{
    color: red;
  }
}
</style>