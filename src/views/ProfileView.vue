<template>
  <v-skeleton v-if="!profile" />
  <div v-else class="py-4 flex flex-wrap gap-4">
    <div class="sm:w-2/5 w-full h-auto rounded-lg overflow-hidden">
      <img class="w-full h-auto" :src="profile.avatar" alt="avatar" />
    </div>
    <div class="flex-1">
      <h1 class="md:text-4xl text-xl font-semibold">{{ profile.fullname }}</h1>
      <div class="py-4">
        <ul class="flex gap-2 flex-wrap">
          <li
            class="py-1 px-4 text-xs bg-slate-300 text-slate-700 rounded-full inline-block select-none"
            v-for="(item, index) in profile.tags"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="py-4">
        <ul class="mb-4">
          <li class="font-medium font-lg">
            Опыт: <span class="font-normal">{{ profile.experience }} лет</span>
          </li>
          <li class="font-medium font-lg">
            Цена (за час):
            <span class="font-normal">{{ profile.price }}</span>
          </li>
        </ul>
        <button class="py-4 px-6 bg-slate-700 text-white rounded-lg">
          Оставить заявку
        </button>
      </div>

      <div class="py-4">
        <h4 class="font-medium py-2">Обо мне</h4>
        <p class="font-light">
          {{ profile.about }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import vSkeleton from "@/components/base/Skeleton.vue";
import Api from "@/api/database.controller";
import Storage from "@/api/storage.service";
import router from "@/router";

const profile = ref(null);

onMounted(async () => {
  const { params } = router.currentRoute.value;

  const data = await Api.getOneMentors(params.id);
  const avatar = await Storage.getAvatar(data[0].avatar);

  profile.value = {
    ...data[0],
    avatar,
  };
});
</script>
