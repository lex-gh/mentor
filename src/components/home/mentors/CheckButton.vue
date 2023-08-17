<template>
  <div class="border-[1px] border-slate-800 inline-flex rounded-xl p-1">
    <div
      class="parent-input py-2 px-4 text-slate-800 text-base md:text-lg font-light rounded-l-xl"
    >
      <input
        v-model="input"
        @input="$emit('update:modelValue', $event.target.value)"
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
        v-model="input"
        @input="$emit('update:modelValue', $event.target.value)"
        class="hidden"
        type="radio"
        name="radio-group"
        id="2"
        value="mentor"
      />
      <label class="cursor-pointer" for="2">Ищу ментора</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const input = ref("");
</script>

<style lang="scss" scoped></style>
