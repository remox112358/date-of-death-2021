<template>
  <div :class="styles.root">
    <i-icon width="60px" height="20px" name="rune1" />
    <p>
      <slot></slot>
    </p>
    <i-icon width="60px" height="20px" name="rune2" />
  </div>
</template>