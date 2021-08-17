<template>
  <p-question 
    title="УКАЖИТЕ СВОЮ ДАТУ РОЖДЕНИЯ:"
    subtitle="Вопрос 3-5"
    mode="birthdate"

    :callback="answerHandler"

    full
  />
</template>