<template>
  <div :class="styles.root">
    <img :class="styles.glare" :src="glare" alt="Glare">
    <p-container nopadding>
      <header :class="styles.header">
        <span :class="styles.header__title">Лучшие астологи и экстрасенсы Румынии</span>
        <div :class="styles.header__divider"></div>
        <span :class="styles.header__accuracy">Точность прогноза: 97%</span>
      </header>
      <div 
        data-aos="zoom-in"
        data-aos-duration="1000"

        :class="styles.content"
      >
        <div :class="styles.content__image">
          <i-icon name="eye-circle" />
          <img :src="woman" alt="Woman">
        </div>
        <div :class="styles.content__question">
          <p-question 
            title="Вас беспокоит вопрос о том, КОГДА ВЫ ПОКИНЕТЕ ЭТОТ МИР И ПРИ КАКИХ ОБСТОЯТЕЛЬСТВАХ?"
            subtitle="Онлайн предсказание"

            :callback="answerHandler"
            :variants="[
              { text: 'Да', value: 1 },
              { text: 'Нет', value: 0 }
            ]"
          />
        </div>
      </div>
    </p-container>
  </div>
</template>