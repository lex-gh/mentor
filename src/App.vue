<template>
  <div class="h flex flex-col">
    <the-header />
    <div class="container flex-1">
      <router-view />
    </div>
    <the-footer />
  </div>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>
