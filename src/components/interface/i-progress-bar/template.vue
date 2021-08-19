<template>
  <div 
    :class="styles.root"
    
    :style="{
      width: width,
      height: height,
    }"
  >
    <div 
      :class="styles.bar"

      :style="{
        width: `${modelValue}%`,
        backgroundColor: color,
      }"
    >
    </div>
  </div>
</template>