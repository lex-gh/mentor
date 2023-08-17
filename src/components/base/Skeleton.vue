<template>
  <div
    class="flex lg:flex-row flex-col animate-pulse h-full p-4 border-[1px] bg-white rounded-xl gap-2"
  >
    <div class="w-full lg:w-2/5 bg-gray-300 h-60 rounded-xl"></div>
    <div class="lg:flex-1">
      <div class="w-80 bg-gray-300 h-8 rounded-md hidden lg:block"></div>
      <div class="flex-1 py-2">
        <div class="w-full bg-gray-300 h-2 rounded-md my-2"></div>
        <div class="w-full bg-gray-300 h-2 rounded-md my-2"></div>
        <div class="w-full bg-gray-300 h-2 rounded-md my-2"></div>
        <div class="w-full bg-gray-300 h-2 rounded-md my-2"></div>
      </div>
      <div class="flex flex-wrap gap-2 py-2">
        <div class="w-24 h-2 bg-gray-300 rounded-md py-2"></div>
        <div class="w-24 h-2 bg-gray-300 rounded-md py-2"></div>
        <div class="w-24 h-2 bg-gray-300 rounded-md py-2"></div>
      </div>
      <div class="py-2">
        <div class="w-40 h-6 bg-gray-300 rounded-md py-2 mb-2"></div>
        <div class="w-40 h-6 bg-gray-300 rounded-md py-2"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  horizontal: {
    type: Boolean,
  },
});
</script>

<style lang="scss">
.horizontal {
  @apply flex-row;
}
</style>
