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
      <div :class="styles.question">
        <p-question 
          title="БОИТЕСЬ ЛИ ВЫ УМЕРЕТЬ?"
          subtitle="Вопрос 1 - 5"
          
          :variants="[
            {
              text: 'Да',
              value: 1,
            },
            {
              text: 'Нет',
              value: 0,
            }
          ]"
        />
      </div>
      <div :class="styles.quote">
        <p-quote>
          Вы, конечно, умрете.<br>И все, с кем вы знакомы,<br>тоже однажды умрут.
        </p-quote>
      </div>
    </p-container>
  </div>
</template>