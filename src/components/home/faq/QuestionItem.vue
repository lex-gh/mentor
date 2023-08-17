<template>
  <div class="border-b-[1px]">
    <button
      @click="showCollapse"
      :aria-expanded="collapse"
      class="w-full flex items-center justify-between py-4 px-2 outline-none transition-colors"
    >
      <span class="font-normal text-left">{{ title }}</span>
      <i class="material-icons">{{ collapse ? "remove" : "add" }}</i>
    </button>
    <div class="accordion-content">
      <p class="px-2">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const collapse = ref(false);

defineProps({
  title: String,
  description: String,
});

const showCollapse = () => {
  collapse.value = !collapse.value;
};
</script>

<style lang="scss" scoped>
button[aria-expanded="true"] {
  // .icon {
  //   &::after {
  //     width: 0;
  //   }
  // }
  + .accordion-content {
    opacity: 1;
    max-height: 12em;
    transition: all 200ms linear;
    will-change: opacity, max-height;
  }
}
.accordion-content {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 200ms linear, max-height 200ms linear;
  will-change: opacity, max-height;
  p {
    font-size: 1rem;
    font-weight: 300;
    margin: 2em 0;
  }
}
</style>
