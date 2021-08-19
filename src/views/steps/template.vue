<template>
  <div 
    :class="{
      [styles.root]: true,
      [styles['root--final']]: step === 6,
    }"
  >
    <p-decoration icon="decoration1" :htmlClass="{ [styles['decoration--left']]: true }"></p-decoration>
    <p-decoration icon="decoration2" :htmlClass="{ [styles['decoration--right']]: true }"></p-decoration>
    <div :class="styles.header">
      <p-container>
        <p-message :cloud="step >= 5" :alternative="step === 6">
          <template v-if="step === 6">
            Спасибо за ваши ответы!<br>
            <b>Мы подготовили для вас персональную аудиозапись с вашим прогнозом.</b>
          </template>
          <template v-else>
            {{ stepData?.message ?? message }}
          </template>
        </p-message>
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
            <b>ПЕРВОЕ ЗНАЧИМОЕ СОБЫТИЕ МОЖЕТ ПРОИЗОЙТИ УЖЕ {{ tomorrow }},</b> вам надо быть готовым, что бы последствия не оказались необратимыми.
          </div>
          <p :class="styles.result__info">
            Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона. Прослушайте важную информацию!
          </p>
          <i-button color="green" @click="fetchData">Позвонить и прослушать</i-button>
          <data-box :data="data" v-if="data" />
        </div>
        <div :class="styles.terms" v-if="step === 6">
          <p-terms />
        </div>
      </p-container>
    </div>
  </div>
</template>