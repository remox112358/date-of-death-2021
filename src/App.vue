<template>
  <router-view />
  <i-loader v-model="loading" />
  <i-recording v-model="recording" />
</template>

<script>

  import { computed } from 'vue'
  import { useStore } from 'vuex'

  export default {
    setup() {

      /**
       * Global store.
       */
      const store = useStore()

      /**
       * Data and states.
       */
      const loading   = computed(() => store.state.loading)
      const recording = computed(() => store.state.recording)

      return {
        loading,
        recording,
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
    font-family: map-get($FONTS, 'roboto'), map-get($FONTS, 'alternative');

    background-color: map-get($COLORS, 'background');
  }

</style>