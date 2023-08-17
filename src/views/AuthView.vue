<template>
  <div class="py-4">
    <h3 class="text-slate-800 text-xl md:text-2xl font-medium mb-8">
      Стать ментором
    </h3>

    <form @submit.prevent="handlerForm">
      <form-field
        group="fullName"
        field-name="Ваше имя и фамиля"
        field-description="Так вы будете видны на сайте"
      >
        <template #field>
          <input
            v-model="form.fullName"
            class="w-full h-10 px-2 border-2 outline-none rounded-md focus:border-slate-400 transition-colors"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Иван Петров"
          />
        </template>
      </form-field>
      <form-field
        group="avatar"
        field-name="Фотография для профиля"
        field-description="Поможет лучше узнать вас (пожалуйста, не более 2Мб)"
      >
        <template #field>
          <input
            @change="uploadImage"
            class="my-4 text-sm"
            type="file"
            accept="image/*"
            name="avatar"
            id="avatar"
          />
        </template>
      </form-field>
      <form-field
        group="nickname"
        field-name="Ник в Telegram (без @)"
        field-description="Для связи с вами"
      >
        <template #field>
          <input
            v-model="form.nickname"
            class="w-full h-10 px-2 border-2 outline-none rounded-md focus:border-slate-400 transition-colors"
            type="text"
            name="nickname"
            id="nickname"
            placeholder="nickname"
          />
        </template>
      </form-field>
      <form-field
        group="about"
        field-name="Расскажите о себе"
        field-description="Коротко расскажите о себе"
      >
        <template #field>
          <textarea
            v-model="form.about"
            class="w-full h-24 resize-y py-2 px-2 border-2 outline-none rounded-md focus:border-slate-400 transition-colors placeholder:text-sm"
            name="about"
            id="about"
            placeholder=" Два-три абзаца: где работали, что интересует в профессиональном поле, каких методик в менторстве придерживаетесь."
          ></textarea>
        </template>
      </form-field>
      <form-field
        group="experience"
        field-name="Опыт"
        field-description="Сколько лет вы в профессии"
      >
        <template #field>
          <select
            v-model="form.experience"
            class="w-full h-10 px-2 bg-white border-2 outline-none rounded-md focus:border-slate-400 transition-colors"
            name="experience"
            id="experience"
          >
            <option value="">Выберите один из вариантов</option>
            <option class="w-full h-10 text-lg hover:bg-slate-500">2-5</option>
            <option class="w-full h-10 text-lg hover:bg-slate-500">5-10</option>
            <option class="w-full h-10 text-lg hover:bg-slate-500">10+</option>
          </select>
        </template>
      </form-field>
      <form-field
        group="tags"
        field-name="Навыки и технологии"
        field-description="Перечислите через запятую навыки, по которым хотите консультировать. "
      >
        <template #field>
          <input
            v-model="form.tags"
            class="w-full h-10 px-2 border-2 outline-none rounded-md focus:border-slate-400 transition-colors"
            type="text"
            name="tags"
            id="tags"
            placeholder="html, css, javascript"
          />
        </template>
      </form-field>
      <form-field
        group="price"
        field-name="Стоимость консультации"
        field-description="Во сколько вы оцениваете час консультации. Если цена зависит от случая, выберите “По договорённости”."
      >
        <template #field>
          <select
            v-model="form.price"
            class="w-full h-10 px-4 bg-white border-2 outline-none rounded-md focus:border-slate-400 transition-colors"
            name="price"
            id="price"
          >
            <option value="0">Выберите один из вариантов</option>
            <option class="w-full h-10 py-2 text-lg hover:bg-slate-500">
              Бесплатно
            </option>
            <option class="w-full h-10 py-2 text-lg hover:bg-slate-500">
              1000
            </option>
            <option class="w-full h-10 py-2 text-lg hover:bg-slate-500">
              2000
            </option>
            <option class="w-full h-10 py-2 text-lg hover:bg-slate-500">
              3000
            </option>
            <option class="w-full h-10 py-2 text-lg hover:bg-slate-500">
              4000
            </option>
            <option class="w-full h-10 py-2 text-lg hover:bg-slate-500">
              5000
            </option>
            <option class="w-full h-10 py-2 text-lg hover:bg-slate-500">
              6000
            </option>
            <option class="w-full h-10 py-2 text-lg hover:bg-slate-500">
              7000
            </option>
            <option class="w-full h-10 py-2 text-lg hover:bg-slate-500">
              8000
            </option>
            <option class="w-full h-10 py-2 text-lg hover:bg-slate-500">
              9000
            </option>
            <option class="w-full h-10 py-2 text-lg hover:bg-slate-500">
              По договоренности
            </option>
          </select>
        </template>
      </form-field>
      <button
        type="submit"
        class="px-8 py-4 bg-slate-700 text-white rounded-lg flex gap-2 items-center"
      >
        Добавить профиль
        <span v-if="isLoad" class="loader"></span>
      </button>
    </form>
  </div>
</template>

<script setup>
import FormField from "@/components/auth/FormField.vue";
import { reactive, ref } from "vue";
import Api from "@/api/database.controller";
import router from "@/router";

const isLoad = ref(false);
const form = reactive({
  fullName: "",
  avatar: null,
  nickname: "",
  about: "",
  experience: "",
  tags: "",
  price: 0,
});

const uploadImage = (e) => {
  const image = e.target.files[0];
  form.avatar = image;
};

const handlerForm = async () => {
  try {
    const profile = await Api.createProfile(form);
    isLoad.value = true;
    router.push({ name: "profile", params: { id: profile.id } });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
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
