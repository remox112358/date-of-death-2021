<template>
  <div :class="styles.root" v-if="modelValue">
    <div :class="styles.loader">
      <div v-for="i in 12" :key="i"></div>
    </div>
    <span>Loading</span>
  </div>
</template>