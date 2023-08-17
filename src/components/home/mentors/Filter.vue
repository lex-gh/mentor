<template>
  <div class="head py-4">
    <div
      class="search h-10 border-[1px] border-slate-600 flex relative rounded-lg overflow-hidden"
    >
      <span
        class="material-icons search absolute top-2 left-2 text-xl text-slate-600"
      ></span>
      <input
        v-model="input"
        @input="$emit('update:modelValue', $event.target.value)"
        class="w-full h-full outline-none px-10 text-slate-700"
        type="text"
        placeholder="Название предмета, профессия или что угодно через запятую"
      />
    </div>
    <div class="tags py-4"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const input = ref("");
</script>

<style lang="scss" scoped></style>
