<template>
  <router-view />
</template>

<style lang="scss">

  @import './scss/fonts.scss';
  @import './scss/reset.scss';
  @import './scss/variables.scss';

  *,
  *::before,
  *::after {
    box-sizing: border-box;

    font-family: 'Poppins', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;

    overflow-x: hidden;

    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    font-family: $font--roboto;

    background-color: $color--background;
  }

</style>