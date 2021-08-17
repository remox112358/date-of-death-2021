<template>
  <div :class="styles.root">
    <div
      :class="{
        [styles.decoration]: true,
        [styles['decoration--left']]: true,
      }"
    >
      <i-icon name="decoration1" />
    </div>
    <div
      :class="{
        [styles.decoration]: true,
        [styles['decoration--right']]: true,
      }"
    >
      <i-icon name="decoration2" />
    </div>
    <div :class="styles.header">
      <p-container>
        <p :class="styles.header__message">
          Мы расскажем Вам не только подробности вашей смерти, но также поможем Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы.
        </p>
      </p-container>
    </div>
    <div :class="styles.main">
      <p-container>
        <div :class="styles.question">
          <step1 v-if="step === 1" />
          <step2 v-if="step === 2" />
          <step3 v-if="step === 3" />
          <step4 v-if="step === 4" />
          <step5 v-if="step === 5" />
        </div>
      </p-container>
    </div>
  </div>
</template>