<template>
  <header id="header" class="w-full">
    <div class="container py-4 flex justify-between">
      <router-link to="/">
        <h3 class="text-2xl text-gray-900 font-light md:block hidden">
          Mentor
        </h3>
        <h3 class="text-2xl text-gray-900 font-light md:hidden block">TM</h3>
      </router-link>
      <router-link
        to="/mentor"
        class="flex items-center text-gray-900 text-md font-light"
      >
        <!-- 👩‍🏫 -->
        <span class="material-icons add mr-1"></span>
        Стать ментором</router-link
      >
    </div>
  </header>
</template>
<script setup></script>
