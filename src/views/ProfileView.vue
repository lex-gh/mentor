<template>
  <v-skeleton v-if="!profile" />
  <div v-else class="py-4 flex flex-wrap gap-6">
    <div
      class="sm:w-1/3 w-full h-auto rounded-xl overflow-hidden self-baseline"
    >
      <img class="w-full h-auto" :src="profile.avatar" alt="avatar" />
    </div>
    <div class="flex-1">
      <h1 class="md:text-4xl text-xl font-semibold">{{ profile.fullname }}</h1>
      <div class="py-4">
        <ul class="flex gap-2 flex-wrap">
          <li
            class="py-1 px-4 text-xs bg-slate-300 text-slate-700 rounded-full inline-block select-none"
            v-for="(item, index) in profile.tags"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="py-4">
        <ul class="mb-4">
          <li class="font-medium font-lg">
            Опыт: <span class="font-normal">{{ profile.experience }} лет</span>
          </li>
          <li class="font-medium font-lg">
            Цена (за час):
            <span class="font-normal">{{ profile.price }}</span>
          </li>
        </ul>
        <button class="py-4 px-6 bg-slate-700 text-white rounded-lg">
          Оставить заявку
        </button>
      </div>

      <div class="py-4">
        <h4 class="font-medium py-2">Обо мне</h4>
        <p class="font-light">
          {{ profile.about }}
        </p>
      </div>
      <div class="py-4">
        <h4 class="font-medium py-2">Отзывы</h4>
        <ul>
          <span v-if="!profile.reviews">Отзывов пока нет</span>

          <li
            v-else
            v-for="(comment, index) in reviewArr(profile.reviews)"
            :key="index"
            class="bg-white rounded-xl p-2 last:mb-10 [&:not(:last-child)]:mb-4"
          >
            <i
              class="material-icons star text-yellow-400 block"
              v-for="(item, i) of comment.rating"
              :key="i"
            ></i>
            <p class="font-light py-2">{{ comment.message }}</p>
          </li>
        </ul>
        <div class="py-4 px-2 bg-white rounded-xl my-4">
          <form @submit.prevent="handlerFormReview">
            <star-rating
              class="mb-4"
              v-model="review.rating"
              :count="review.rating"
            />
            <textarea
              v-model="review.message"
              id="textarea"
              class="block w-full h-20 py-1 px-2 border-2 border-slate-200 rounded-lg resize-none mb-4 outline-none"
              placeholder="Комментарий"
            ></textarea>
            <button
              type="submit"
              class="py-2 px-6 bg-slate-700 rounded-xl text-white flex"
              :class="[
                {
                  'pointer-events-none opacity-50':
                    !review.message || !review.rating,
                },
              ]"
            >
              Отправить <span v-if="isLoad" class="loader block ml-3"></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, computed, watch } from "vue";
import vSkeleton from "@/components/base/Skeleton.vue";
import StarRating from "@/components/base/StarRaiting.vue";
import Profile from "@/api/profile.controller";
import Storage from "@/api/storage.service";
import router from "@/router";

const isLoad = ref(false);
const profile = ref(null);
const review = reactive({
  message: "",
  rating: 0,
});

watch(profile, (oldVal, newVal) => {
  console.log(oldVal, newVal);
});

onMounted(async () => {
  getProfile();
});

const reviewArr = computed(() => {
  return (value) => {
    return value.map((item) => JSON.parse(item));
  };
});

const getProfile = async () => {
  const { params } = router.currentRoute.value;
  const data = await Profile.getOneMentors(params.id);
  const avatar = await Storage.getAvatar(data[0].avatar);

  profile.value = {
    ...data[0],
    avatar,
  };
};

const handlerFormReview = () => {
  const { params } = router.currentRoute.value;
  isLoad.value = true;
  Api.createReview(params.id, review).then(() => {
    getProfile(params.id).then(() => {
      isLoad.value = false;
    });
    review.message = "";
    review.rating = 0;
  });
};
</script>

<style scoped>
.loader {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  animation: rotate 1s linear infinite;
}
.loader::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  inset: 0px;
  border-radius: 50%;
  border: 2px solid #fff;
  animation: prixClipFix 2s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes prixClipFix {
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
}
</style>
