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
          <p-question 
            title="КОГДА ВЫ ЧУВСТВУЕТЕ СЕБЯ НАИБОЛЕЕ КОМФОРТНО?"
            subtitle="Вопрос 2-5"
            :variants="[
              {
                text: 'Утро',
                value: 1,
              },
              {
                text: 'День',
                value: 2,
              },
              {
                text: 'Вечер',
                value: 3,
              },
              {
                text: 'Ночь',
                value: 4,
              }
            ]"
            full
          />
        </div>
      </p-container>
    </div>
  </div>
</template>