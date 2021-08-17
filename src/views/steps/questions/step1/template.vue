<template>
  <p-question 
    title="БОИТЕСЬ ЛИ ВЫ УМЕРЕТЬ?"
    subtitle="Вопрос 1-5"
    
    :callback="answerHandler"

    :variants="[
      { text: 'Да', value: 1 },
      { text: 'Нет', value: 2 },
    ]"

    full
  />
</template>