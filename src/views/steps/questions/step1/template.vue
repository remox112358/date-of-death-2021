<template>
  <p-question 
    title="БОИТЕСЬ ЛИ ВЫ УМЕРЕТЬ?"
    subtitle="Вопрос 1-5"
    
    :variants="variants"
    :callback="answerHandler"

    full
  />
</template>