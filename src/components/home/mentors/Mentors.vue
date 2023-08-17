<template>
  <v-filter v-model="search" />
  <div class="mentors">
    <div v-if="!mentors" class="grid-auto-fill">
      <v-skeleton v-for="(item, index) in 5" :key="index" />
    </div>
    <div v-else class="grid-auto-fill">
      <mentors-item
        v-for="(user, index) in mentors"
        :key="index"
        :profile="user"
      />
    </div>
    <div v-if="mentors > 10" class="flex justify-center">
      <button
        class="my-8 px-8 py-4 bg-slate-800 text-white text-center rounded-lg max-w-[200px] mt-6"
      >
        Еще менторы
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import vSkeleton from "@/components/base/Skeleton.vue";
import vFilter from "@/components/home/mentors/Filter.vue";
import MentorsItem from "./MentorsItem.vue";
import data from "@/data.json";

const search = ref("");

const props = defineProps({
  isProfile: String,
  mentors: Array,
});

const userProfile = () => {
  return data.filter((item) => item.profile === props.isProfile);
};
</script>

<style lang="scss">
.grid-auto-fill {
  @apply grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4;
}
</style>
