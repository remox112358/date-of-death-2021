<template>
  <div :class="styles.root">
    <p-decoration icon="decoration1" :htmlClass="{ [styles['decoration--left']]: true }"></p-decoration>
    <p-decoration icon="decoration2" :htmlClass="{ [styles['decoration--right']]: true }"></p-decoration>
    <p-container>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"

        :class="styles.question"
      >
        <p-question 
          :title="stepData.title"
          :callback="answerHandler"
          :subtitle="stepData.subtitle"
          :variants="stepData.variants"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"

        :class="styles.quote"
      >
        <p-quote>
          Вы, конечно, умрете.<br>И все, с кем вы знакомы,<br>тоже однажды умрут.
        </p-quote>
      </div>
    </p-container>
  </div>
</template>