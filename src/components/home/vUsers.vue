<template>
  <div class="head py-4">
    <div
      class="search h-10 border-[1px] border-slate-600 flex relative rounded-lg overflow-hidden"
    >
      <span
        class="material-icons search absolute top-2 left-2 text-xl text-slate-600"
      ></span>
      <input
        class="w-full h-full outline-none px-10 text-slate-700"
        type="text"
        placeholder="Название предмета, профессия или что угодно через запятую"
      />
    </div>
    <div class="tags py-4"></div>
  </div>
  <div class="mentors">
    <div
      class="content grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4"
    >
      <v-users-item
        v-for="(user, index) in userProfile()"
        :key="index"
        :profile="user"
      />
    </div>
    <div class="flex justify-center">
      <button
        class="my-8 px-8 py-4 bg-slate-800 text-white text-center rounded-lg max-w-[200px] mt-6"
      >
        Еще менторы
      </button>
    </div>
  </div>
</template>

<script setup>
import vUsersItem from "./vUsersItem.vue";
import data from "@/data.json";

const props = defineProps({
  isProfile: String,
});

const userProfile = () => {
  return data.filter((item) => item.profile === props.isProfile);
};
</script>

<style lang="scss" scoped></style>
