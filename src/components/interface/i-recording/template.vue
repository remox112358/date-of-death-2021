<template>
  <div :class="styles.root" v-if="modelValue">
    <i-icon name="recording" />
    <i-progress-bar
      height="4px"
      width="260px"

      v-model="percent"
    />
    <span :class="styles.percent">{{ percent }}%</span>
    <span :class="styles.hint">Запись сообщения</span>
  </div>
</template>