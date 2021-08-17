<template>
  <router-view />
  <i-loader v-model="loading" />
</template>

<script>

  import { computed } from 'vue'
  import { useStore } from 'vuex'

  export default {
    setup() {

      const store = useStore()
      const loading = computed(() => store.state.loading)

      return {
        loading,
      }

    }
  }

</script>


<style lang="scss">

  @import './scss/fonts.scss';
  @import './scss/reset.scss';
  @import './scss/variables.scss';

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;

    overflow-x: hidden;

    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    font-family: $font--roboto, $font--alternative;

    background-color: $color--background;
  }

</style>