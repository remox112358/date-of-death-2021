<template>
  <div :class="styles.root">
    <span :class="styles.title">{{ title }}</span>
    <div :class="styles.variants">
      <i-button 
        color="gold"

        :key="variant.value"

        v-for="variant in variants"
      >{{ variant.text }}</i-button>
    </div>
    <span :class="styles.subtitle">{{ subtitle }}</span>
  </div>
</template>