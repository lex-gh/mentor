<template>
  <div class="lg:w-3/4 pt-2 pb-8 flex flex-col">
    <label class="font-medium text-lg" :for="group"
      >{{ fieldName }}<i class="text-red-400">*</i></label
    >
    <span class="text-sm font-light py-2" v-if="fieldDescription">{{
      fieldDescription
    }}</span>
    <slot name="field" />
  </div>
</template>

<script setup>
defineProps({
  group: {
    type: String,
  },
  fieldName: {
    type: String,
    required: true,
  },
  fieldDescription: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped></style>
