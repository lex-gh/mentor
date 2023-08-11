<template>
  <section
    class="hero w-full md:p-8 lg:p-16 md:rounded-xl my-4 relative overflow-hidden flex flex-col"
  >
    <div
      class="bg-[url('../assets/bg.jpg')] w-full h-full md:absolute top-0 left-0 bg-[0_80%] bg-[length:150%] min-h-[180px] mb-4 md:mb-0 rounded-lg md:rounded-none"
    ></div>
    <div class="md:w-2/3 md:bg-white md:p-8 rounded-xl z-50 relative">
      <h1 class="text-2xl lg:text-4xl font-bold text-slate-800">
        Найдите идеального репетитора или ментора!
      </h1>
      <p class="text-md font-bold py-4 text-slate-700">
        Развивайте свой потенциал с наставниками по всему миру.
      </p>
      <p class="text-md font-light text-slate-700">
        TalentMentor - поможет вам найти опытного наставника, который поделится
        своим знанием и опытом, чтобы помочь вам достичь новых высот в вашей
        карьере или личностном развитии.
      </p>
      <a
        href="#mentors"
        class="px-8 py-4 bg-slate-800 text-white text-center rounded-lg block max-w-[200px] mt-6"
        >Найти ментора</a
      >
    </div>
  </section>
  <!-- <section class="py-4">
    <div class="flex items-center justify-between">
      <h3 class="text-slate-800 text-xl md:text-4xl font-medium py-2">
        Откройте дя себя лучших наставников
      </h3>
      <div class="flex">
        <div ref="prev" class="swiper-button-prev cursor-pointer">
          <span class="material-icons navigate_before"></span>
        </div>
        <div ref="next" class="swiper-button-next cursor-pointer">
          <span class="material-icons navigate_next"></span>
        </div>
      </div>
    </div>

    <div class="py-6">
      <v-swiper :prev="prev" :next="next" />
    </div>
  </section> -->
  <section class="py-4" id="mentors">
    <div class="py-2 flex justify-center items-center gap-2">
      <div class="border-[1px] border-slate-800 inline-flex rounded-xl p-1">
        <div
          class="parent-input py-2 px-4 text-slate-800 text-base md:text-lg font-light rounded-l-xl"
        >
          <input
            v-model="profiles"
            class="hidden"
            type="radio"
            name="radio-group"
            id="1"
            value="tutor"
            checked
          />
          <label class="cursor-pointer" for="1">ищу репетитора</label>
        </div>
        <div
          class="parent-input py-2 px-4 text-slate-800 text-base md:text-lg font-light rounded-r-xl"
        >
          <input
            v-model="profiles"
            class="hidden"
            type="radio"
            name="radio-group"
            id="2"
            value="mentor"
          />
          <label class="cursor-pointer" for="2">Ищу ментора</label>
        </div>
      </div>
    </div>
    <v-users :isProfile="profiles" />
  </section>
  <section class="py-4">
    <h3
      class="text-slate-800 text-2xl md:text-4xl font-medium mb-8 text-center"
    >
      Как это работает
    </h3>
    <div class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
      <div>
        <p class="flex items-center gap-2 mb-2 text-lg">
          <i class="material-icons switch_account"></i> Выбери ментора
        </p>
        <span class="text-md font-light"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          dignissimos quis fugiat doloremque voluptates corporis pariatur enim
          hic natus ullam.</span
        >
      </div>
      <div>
        <p class="flex items-center gap-2 mb-2 text-lg">
          <i class="material-icons drive_file_rename_outline"></i> Напиши ему
        </p>
        <span class="text-md font-light"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          dignissimos quis fugiat doloremque voluptates corporis pariatur enim
          hic natus ullam.</span
        >
      </div>
      <div>
        <p class="flex items-center gap-2 mb-2 text-lg">
          <i class="material-icons forum"></i>Обсудите условия
        </p>
        <span class="text-md font-light"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          dignissimos quis fugiat doloremque voluptates corporis pariatur enim
          hic natus ullam.</span
        >
      </div>
    </div>
  </section>
  <section class="py-4">
    <h3
      class="text-slate-800 text-2xl md:text-4xl font-medium mb-8 text-center"
    >
      FAQ
    </h3>
    <div class="lg:w-3/4 mx-auto">
      <v-question-item
        v-for="(item, index) in question"
        :key="index"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
// import VSwiper from "@/components/home/vSwiper.vue";
import vUsers from "@/components/home/vUsers.vue";
import vQuestionItem from "@/components/home/vQuestionItem.vue";

const profiles = ref("tutor");

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

// const prev = ref(null);
// const next = ref(null);
</script>

<style lang="scss" scoped></style>
