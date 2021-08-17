<template>
  <p-question 
    title="КОГДА ВЫ ЧУВСТВУЕТЕ СЕБЯ НАИБОЛЕЕ КОМФОРТНО?"
    subtitle="Вопрос 2-5"
    
    :variants="variants"
    :callback="answerHandler"

    full
  />
</template>