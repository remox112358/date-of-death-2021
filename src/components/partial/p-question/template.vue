<template>
  <div
    :class="{
      [styles.root]: true,
      [styles['root--full']]: full,
    }"
  >
    <span :class="styles.title">{{ title }}</span>
    <div :class="styles.variants">
      <template v-if="mode === 'default'">
        <i-button 
          color="gold"

          :key="variant.value"

          v-for="variant in variants"

          @click="() => callback(variant.value)"
        >{{ variant.text }}</i-button>
      </template>
      <template v-if="mode === 'birthdate'">
        <i-select 
          placeholder="День"

          :options="dayOptions"
          :invalid="dayMeta.validated && !dayMeta.valid"

          v-model="day"
        />
        <i-select 
          placeholder="Месяц"
          
          :options="monthOptions"
          :invalid="monthMeta.validated && !monthMeta.valid"

          v-model="month"
        />
        <i-select 
          placeholder="Год"
          
          :options="yearOptions"
          :invalid="yearMeta.validated && !yearMeta.valid"

          v-model="year"
        />
        <i-button color="gold" @click="birthdateHandler">Далее</i-button>
      </template>
    </div>
    <span :class="styles.subtitle">{{ subtitle }}</span>
  </div>
</template>