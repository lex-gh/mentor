<template>
  <div class="head py-4">
    <div
      class="search h-10 border-[1px] border-slate-400 flex relative rounded-lg overflow-hidden"
    >
      <span
        class="material-icons search absolute top-2 left-2 text-xl text-slate-600"
      ></span>
      <input
        @input="$emit('search', $event.target.value)"
        class="w-full h-full outline-none px-10 text-slate-700"
        type="text"
        placeholder="Название предмета, профессия или что угодно через запятую"
      />
    </div>
    <div class="tags py-4">
      <div class="flex gap-4 flex-wrap">
        <label c v-for="(tag, index) in tags" :key="index" :for="tag">
          <input
            v-model="checked"
            class="hidden peer"
            type="checkbox"
            name="check"
            :value="tag"
            :id="tag"
          />
          <div
            class="py-1 px-3 bg-slate-200 text-slate-600 rounded-xl cursor-pointer hover:bg-slate-300 transition-colors peer-checked:bg-slate-500 peer-checked:text-white whitespace-nowrap"
          >
            {{ tag }}
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Profile from "@/api/profile.controller";

const checked = ref([]);
const tags = ref([]);

const emit = defineEmits(["checkedTag", "search"]);

defineProps({
  modelValue: String,
});

onMounted(async () => {
  tags.value = await Profile.getTags();
});

watch(checked, () => {
  onCheckedTag();
});

const onCheckedTag = async (tag) => {
  emit("checkedTag", checked.value);
};
</script>

<style lang="scss" scoped></style>
