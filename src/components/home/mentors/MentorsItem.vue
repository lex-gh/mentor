<template>
  <article
    class="p-4 bg-white inline-block rounded-xl border-[1px] border-[#171a1f1a] cursor-pointer hover:shadow-md transition-shadow"
  >
    <router-link
      :to="{ name: 'profile', params: { id: profile.id } }"
      class="h-full flex flex-col"
    >
      <div class="max-w-60 h-60 overflow-hidden rounded-lg">
        <img class="w-full h-full object-cover" :src="src" />
      </div>
      <h5 class="pt-4 pb-2 text-xl block">{{ profile.fullname }}</h5>

      <div class="descr line-clamp-3 font-light text-sm flex-1">
        {{ profile.about }}
      </div>
      <div v-if="profile.reviews" class="py-2 inline-flex">
        <i
          class="material-icons star text-yellow-400"
          v-for="item in averageValueReview(profile.reviews)"
          :key="item"
        ></i
        ><span class="ml-2"
          >{{ profile.reviews.length }}
          {{
            useDeclension(
              ["отзыв", "отзыва", "отзывов"],
              profile.reviews.length
            )
          }}</span
        >
      </div>
      <div class="py-4">
        <ul class="flex gap-2 flex-wrap">
          <li
            v-for="(skill, index) in tags(profile.tags)"
            :key="index"
            class="px-2 py-1 rounded-xl bg-slate-300 text-slate-800 transition text-xs font-light"
            ref="tag"
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
    </router-link>
  </article>
</template>

<script setup>
import { computed, ref } from "vue";

const tag = ref(null);

const props = defineProps({
  profile: Object,
});
const src = computed(() => {
  return (
    "https://damcraxycrvztagnqymh.supabase.co/storage/v1/object/public/mentors/" +
    props.profile.avatar
  );
});

const tags = (value) => {
  const arr = [...value];
  const arrLength = arr.length - 3;
  if (arr.length > 3) {
    arr.splice(3, arrLength, `+${arrLength} навыка`);
  }

  return arr;
};

const averageValueReview = computed(() => {
  return (value) => {
    const count = value.reduce((acc, item) => {
      acc += JSON.parse(item).rating;
      return acc;
    }, 0);
    return Math.floor(count / value.length);
  };
});

const useDeclension = (worlds, value) => {
  const cases = [2, 0, 1, 1, 1, 2];
  const str =
    worlds[
      value % 100 > 4 && value % 100 < 20
        ? 2
        : cases[value % 10 < 5 ? value % 10 : 5]
    ];
  return str;
};
</script>

<style lang="scss" scoped></style>
