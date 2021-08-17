<template>
  <div 
    :class="{
      [styles.root]: true,
      [styles['root--final']]: step === 6
    }"
  >
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
        <p
          :class="{
            [styles.header__message]: true,
            [styles['header__message--cloud']]: true,
            [styles['header__message--final']]: true,
          }"

          v-if="step === 6"
        >
          Спасибо за ваши ответы!<br>
          <b>Мы подготовили для вас персональную аудиозапись с вашим прогнозом.</b>
        </p>
        <p
          :class="{
            [styles.header__message]: true,
            [styles['header__message--cloud']]: message,
          }"

          v-else
        >
          {{ stepData?.message ?? message }}
        </p>
      </p-container>
    </div>
    <div :class="styles.main">
      <p-container>
        <div :class="styles.question" v-if="step <= 5">
          <p-question
            :title="stepData.title"
            :callback="answerHandler"
            :variants="stepData.variants"
            :subtitle="stepData.subtitle"
            :mode="stepData.birthdate ? 'birthdate' : 'default'"

            full
          />
        </div>
        <div :class="styles.result" v-else>
          <p :class="styles.result__info">
            Вы можете узнать, как повлиять на события, которые ожидают вас в ближайшем будущем. 
          </p>
          <div :class="styles.result__placard">
            <b>ПЕРВОЕ ЗНАЧИМОЕ СОБЫТИЕ МОЖЕТ ПРОИЗОЙТИ УЖЕ 14.02.2021,</b> вам надо быть готовым, что бы последствия не оказались необратимыми.
          </div>
          <p :class="styles.result__info">
            Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона. Прослушайте важную информацию!
          </p>
          <i-button color="green">Позвонить и прослушать</i-button>
          <p-terms />
        </div>
      </p-container>
    </div>
  </div>
</template>