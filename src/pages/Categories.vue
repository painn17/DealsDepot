<template>
  <div class="flex flex-row items-start">
    <RouterLink class="back-button h-[100vh]" :to="`/`"
      ><span class="material-symbols-outlined"> arrow_back </span
      >Back</RouterLink
    >
    <div class="category-container">
      <CategoryHome
        class="category-card"
        v-if="categories.length > 0"
        v-for="category in categories"
        :category="category"
      />
    </div>
  </div>
</template>
<style>
.category-container {
  @apply grid grid-cols-4 gap-4 justify-stretch  p-8 w-full;
}
.category-card {
  @apply transition duration-200 ease-in cursor-pointer;
}
.category-card p {
  @apply select-none;
}
.category-card:hover {
  @apply scale-105;
}
.loading {
  @apply flex mx-auto text-3xl justify-center;
}
</style>

<script setup>
import CategoryHome from "./CategoryHome.vue";
import { onMounted, ref } from "vue";

let categories = ref([
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
]);

// onMounted(() => {
//     fetch(`https://dummyjson.com/products/categories`)
//         .then((res) => res.json())
//         .then((data) => (categories.value = data))
//         .then((data) => (console.log(data)))
// response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${last_town}&appid=${api}&units=metric&lang=${last_lang}`);
//       json = await response.json();
// })
</script>
