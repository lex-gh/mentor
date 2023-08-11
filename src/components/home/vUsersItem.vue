<template>
  <article
    class="p-4 bg-white inline-block rounded-xl border-[1px] border-[#171a1f1a] cursor-pointer hover:shadow-md transition-shadow"
  >
    <div class="max-w-60 h-60 overflow-hidden rounded-lg">
      <img class="w-full h-auto object-cover" :src="profile.avatar" />
    </div>
    <h5 class="pt-4 pb-2 text-xl block">{{ profile.name }}</h5>
    <div class="star flex item-center gap-2 pb-2">
      <div>
        <i
          class="material-icons star text-yellow-500 block"
          v-for="(item, i) of Math.floor(Math.random() * 5 + 1)"
          :key="i"
        ></i>
      </div>

      <span class="text-light text-blue-500 hover:underline">3 отзыва</span>
    </div>
    <div class="descr line-clamp-3 font-light text-sm">
      {{ profile.description }}
    </div>
    <div class="py-4">
      <ul class="flex gap-2">
        <li
          v-for="(skill, index) in profile.skills"
          :key="index"
          class="px-2 py-1 border-[1px] border-slate-800 rounded-xl hover:bg-slate-800 hover:text-white transition text-xs font-light"
        >
          {{ skill }}
        </li>
      </ul>
    </div>
    <div class="pt-2">
      <ul>
        <li class="flex items-center gap-2 text-slate-800 mb-1 last:mb-0">
          <i class="material-icons insights text-slate-700"> </i>
          {{ profile.experience }} лет опыта
        </li>
        <li class="flex items-center gap-2 text-slate-800 mb-1 last:mb-0">
          <i class="material-icons currency_ruble text-slate-700"> </i
          >{{ profile.price }}
        </li>
      </ul>
    </div>
  </article>
</template>

<script setup>
defineProps({
  profile: Object,
});
</script>

<style lang="scss" scoped></style>
