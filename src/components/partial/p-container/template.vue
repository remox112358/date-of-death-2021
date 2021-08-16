<template>
  <div
    :class="{
      [styles.root]: true,
      [styles['root--nopadding']]: nopadding,
    }"
  >
    <slot />
  </div>
</template>