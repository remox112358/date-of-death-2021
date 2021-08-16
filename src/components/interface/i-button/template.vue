<template>
  <component
    :is="tag"
    :href="href"

    :style="{
      width: width,
      height: height,
    }"

    :class="{
      [styles.root]: true,
      [styles[`root--${color}`]]: color,
    }"

    v-on="$attrs"
  >
    <slot name="prepend" />
    <slot />
    <slot name="append" />
  </component>
</template>