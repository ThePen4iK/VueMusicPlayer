<template>
  <section class="categories">
    <div class="categories__tabs">
      <button
          class="categories__tabs-btn"
          v-bind:class="['', { active: !currentTab }]"
          v-on:click="handleTabChange(null)"
      >
        All
      </button>
      <button
          class="categories__tabs-btn"
          v-for="tab in tabs"
          v-bind:key="tab"
          v-bind:class="['', { active: currentTab === tab }]"
          v-on:click="handleTabChange(tab)"
      >
        {{ tab }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentTab: null,
    };
  },
  computed: {
    // currentTabComponent() {
    //   return "tab-" + this.currentTab.toLowerCase();
    // },
  },
  methods: {
    handleTabChange(tab) {
      this.currentTab = tab;
      this.$emit("tab-change", tab);
    },
  },
};
</script>

<style scoped lang="scss">
.categories {
  &__tabs {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    &-btn {
      background: #0f1e36;
      box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);

      font-family: "Source Sans Pro", sans-serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: left;

      color: #76ccfb;

      padding: 25px 35px;

      display: flex;
      justify-content: center;
      align-items: center;

      &.active {
        color: #ffffff;
      }
    }
  }
}
</style>
