<template>
  <div :class="styles.root">
    <img :class="styles.glare" :src="glare" alt="Glare">
    <p-container>
      <header :class="styles.header">
        <span :class="styles.header__title">Лучшие астологи и экстрасенсы Румынии</span>
        <div :class="styles.header__divider"></div>
        <span :class="styles.header__accuracy">Точность прогноза: 97%</span>
      </header>
      <div :class="styles.content">
        <div :class="styles.content__image">
          <i-icon
            width="360px" 
            height="360px" 
            name="eye-circle" 
          />
          <img :src="woman" alt="Woman">
        </div>
        <p :class="styles.content__question">
          Вас беспокоит вопрос о том,<br>КОГДА ВЫ ПОКИНЕТЕ ЭТОТ МИР И ПРИ КАКИХ ОБСТОЯТЕЛЬСТВАХ?
        </p>
        <div :class="styles.content__answers">
          <i-button color="gold">Да</i-button>
          <i-button color="gold">Нет</i-button>
        </div>
        <span :class="styles.content__hint">Онлайн предсказание</span>
      </div>
    </p-container>
  </div>
</template>