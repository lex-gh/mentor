<template>
  <swiper
    :slidesPerView="4"
    :spaceBetween="30"
    :loop="true"
    :autoplay="autoplay"
    :breakpoints="{
      320: { slidesPerView: 1 },
      480: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      900: { slidesPerView: 4 },
    }"
    :navigation="{
      prevEl: prev,
      nextEl: next,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="h-[200px] border border-[1px] border-slate-800"
      >Slide 1</swiper-slide
    >
    <swiper-slide class="h-[200px] border border-[1px] border-slate-800"
      >Slide 2</swiper-slide
    >
    <swiper-slide class="h-[200px] border border-[1px] border-slate-800"
      >Slide 4</swiper-slide
    >
    <swiper-slide class="h-[200px] border border-[1px] border-slate-800"
      >Slide 6</swiper-slide
    >
    <swiper-slide class="h-[200px] border border-[1px] border-slate-800"
      >Slide 8</swiper-slide
    >
    <swiper-slide class="h-[200px] border border-[1px] border-slate-800"
      >Slide 9</swiper-slide
    >
    <swiper-slide class="h-[200px] border border-[1px] border-slate-800"
      >Slide 10</swiper-slide
    >
    <swiper-slide class="h-[200px] border border-[1px] border-slate-800"
      >Slide 11</swiper-slide
    >
  </swiper>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";

defineProps({
  prev: Object,
  next: Object,
});
const autoplay = {
  delay: 4000,
  disableOnInteraction: false,
};
const modules = [Navigation, Autoplay];
</script>
