<template>
  <div
    :class="{
      [styles.root]: true,
      [styles['root--cloud']]: cloud,
      [styles['root--show']]: showStatusClass,
      [styles['root--alternative']]: alternative,
    }"

    v-if="showStatus"
  >
    <slot></slot>
  </div>
</template>