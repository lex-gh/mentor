<template>
  <div class="lg:w-3/4 mx-auto">
    <v-question-item
      v-for="(item, index) in question"
      :key="index"
      :title="item.title"
      :description="item.description"
    />
  </div>
</template>

<script setup>
import vQuestionItem from "./QuestionItem.vue";

const question = [
  {
    title: "Что такое TalentMentor?",
    description:
      "TalentMentor - это онлайн-платформа, которая поможет вам найти опытного наставника, который поделится своим знанием и опытом, чтобы помочь вам достичь новых высот в вашей карьере или личностном развитии",
  },
  {
    title: "Как я могу стать ментором на TalentMentor?",
    description:
      "Очень просто. Достаточно оставить заявку, и мы обязательно вас добавим.",
  },
];
</script>

<style lang="scss" scoped></style>
