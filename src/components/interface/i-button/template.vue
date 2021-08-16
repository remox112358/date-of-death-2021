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
    <div :class="styles.overlay"></div>
    <slot name="prepend" />
    <div :class="styles.content">
      <slot />
    </div>
    <slot name="append" />
  </component>
</template>