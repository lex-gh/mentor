<template>
  <div class="star-rating">
    <label
      class="star-rating__star"
      v-for="(rating, index) in ratings"
      :key="index"
      :class="{ 'is-selected': temp_value >= rating && temp_value != null }"
      @click="$emit('update:modelValue', rating)"
      @mouseover="starOver(rating)"
      @mouseout="starOut"
    >
      <input
        class="star-rating star-rating__checkbox"
        type="radio"
        name="star"
        :value="count"
      />★</label
    >
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  count: Number,
});

const temp_value = ref(0);
const ratings = ref([1, 2, 3, 4, 5]);

watch(
  () => props.count,
  (OldValue, newVal) => {
    if (OldValue === 0) {
      temp_value.value = 0;
    }
  }
);

const starOver = (index) => {
  temp_value.value = props.count;
  temp_value.value = index;
};
const starOut = (index) => {
  temp_value.value = props.count;
};
const setRating = (value) => {
  // count.value = value;
  emit("update:modelValue", count.value);
};
</script>

<style lang="scss" scoped>
%visually-hidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}
.star-rating {
  &__star {
    display: inline-block;
    padding: 4px 0;
    vertical-align: middle;
    line-height: 1;
    font-size: 1.5em;
    color: #ababab;
    transition: color 0.2s ease-out;

    &:hover {
      cursor: pointer;
    }

    &.is-selected {
      color: #ffd700;
    }

    &.is-disabled:hover {
      cursor: default;
    }
  }

  &__checkbox {
    @extend %visually-hidden;
  }
}
</style>
