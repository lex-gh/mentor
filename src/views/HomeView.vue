<template>
  <section
    class="hero w-full md:p-8 lg:p-16 md:rounded-xl my-4 relative overflow-hidden flex flex-col"
  >
    <div
      class="bg-[url('../assets/bg.jpg')] w-full h-full md:absolute top-0 left-0 bg-[0_80%] bg-[length:150%] min-h-[180px] mb-4 md:mb-0 rounded-lg md:rounded-none"
    ></div>
    <div class="md:w-2/3 md:bg-white md:p-8 rounded-xl z-50 relative">
      <h1 class="text-2xl lg:text-4xl font-bold text-slate-800">
        Найдите идеального ментора!
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
    <v-swiper :prev="prev" :next="next" />
  </section> -->
  <section class="py-10" id="mentors">
    <div class="py-2">
      <!-- <v-check-button v-model="profiles" /> -->
      <h3 class="text-slate-800 text-xl md:text-4xl font-medium py-2">
        Наши менторы
      </h3>
    </div>
    {{ search }}
    <v-filter @search="handlerSearch" @checkedTag="onCheckedTag" />
    <v-mentors :mentors="mentors" />
  </section>
  <section class="py-10">
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
          >Здесь работают более 500 специалистов из Avito,Yandex и других
          компаний. Вы можете выбрать подходящего специалиста в зависимости от
          его специализации и стоимости собеседования. <br /><br />
          Все наставники проходят нашу проверку.</span
        >
      </div>
      <div>
        <p class="flex items-center gap-2 mb-2 text-lg">
          <i class="material-icons drive_file_rename_outline"></i> Напиши ему
        </p>
        <span class="text-md font-light"
          >Оставьте заявку на сайте. Напишите, что вам нужно и что вы хотите
          получить. <br /><br />Помните, что если проблема четко сформулирована,
          то она наполовину решена. Чем подробнее, тем лучше.</span
        >
      </div>
      <div>
        <p class="flex items-center gap-2 mb-2 text-lg">
          <i class="material-icons forum"></i>Обсудите условия
        </p>
        <span class="text-md font-light"
          >Передайте заявку своему наставнику. Наставник оценит задание и
          свяжется с вами для обсуждения деталей и согласования времени.
          Стоимость и продолжительность занятия определяются каждым наставником
          самостоятельно.<br /><br />
          Мы не вмешиваемся.</span
        >
      </div>
    </div>
  </section>
  <section class="py-10">
    <h3
      class="text-slate-800 text-2xl md:text-4xl font-medium mb-8 text-center"
    >
      FAQ
    </h3>
    <v-question />
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import vSwiper from "@/components/home/slider/Swiper.vue";
import vCheckButton from "@/components/home/mentors/CheckButton.vue";
import vMentors from "@/components/home/mentors/Mentors.vue";
import vQuestion from "@/components/home/faq/Question.vue";
import Profile from "@/api/profile.controller";
import vFilter from "@/components/home/mentors/Filter.vue";

const search = ref("");
const mentors = ref(null);
// const profiles = ref("tutor");
// const prev = ref(null);
// const next = ref(null);

onMounted(async () => {
  mentors.value = await Profile.getMentors();
});

const onCheckedTag = async (value) => {
  mentors.value = await Profile.filterTag(value);
};

const handlerSearch = (value) => {
  Profile.search(value);
};
</script>

<style lang="scss" scoped></style>
