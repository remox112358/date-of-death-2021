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