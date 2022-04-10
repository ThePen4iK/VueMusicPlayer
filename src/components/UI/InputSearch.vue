<template>
  <div class="input__wrapper">
    <input type="text" class="input__field" placeholder="Search">

    <button-search></button-search>
  </div>
</template>

<script>
import ButtonSearch from "@/components/UI/ButtonSearch";
export default {
  name: 'input-search',
  components: {ButtonSearch},
}
</script>

<style scoped lang="scss">
.input {
  &:focus{
    &::placeholder {
      opacity: 0;
    }
  }
  &__field {
    width: 100%;
    height: 37px;
    padding: 10px 16px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 19px;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
}
</style>