<template>
  <div 
    ref="root"

    :id="componentId"
    :class="styles.root"
  >
    <div :class="styles.field" @click="toggle">
      <span :class="styles.selected">{{ modelValue?.text ?? placeholder }}</span>
      <div :class="styles.toggler">
        <i-icon name="arrow-down" />
      </div>
    </div>
    <div 
      :class="styles.dropdown"

      v-show="toggleStatus"
    >
      <div
        :key="option.value" 
        :class="styles.dropdown__item"

        v-for="option in options"

        @click="() => select(option)"
      >{{ option.text }}</div>
    </div>
  </div>
</template>