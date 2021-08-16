<template>
  <div :class="styles.root">
    <p-container>
      <div :class="styles.placard">
        <div :class="styles.placard__image">
          <img :src="hands" alt="Hands">
        </div>
        <p :class="styles.placard__content">
          Позвольте нам раскрыть эту волнующую тайну и <br><span>с точностью определить дату и время вашей смерти,</span> а также предшествующую этому событию причину
        </p>
      </div>
    </p-container>
  </div>
</template>