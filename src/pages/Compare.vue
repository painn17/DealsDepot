<template>
  <div>
    <div class="info-container">
      <p class="font-bold text-xl capitalize">{{ item.title }}</p>
      <img class="w-20 h-f mx-auto py-1" :src="`${item.thumbnail}`" alt="" />
      <span>{{ item.description }}</span>
      <span class="flex flex-row gap-4 py-4 w-fit mx-auto">
        <span>Price: {{ item.price }}$</span>
        <span>Rating: {{ item.rating }}</span>
      </span>
    </div>
    <span
      @click="deleteFromCompare(index)"
      class="material-symbols-outlined transition ease-in p-2 duration-200 h-min bg-red-200 w-fit mx-auto rounded remove"
    >
      remove
    </span>
  </div>
</template>
<style scoped>
div {
  @apply rounded p-4;
}
.remove:hover {
  @apply scale-105 bg-red-300;
}
</style>
<script setup>
defineProps(["item"], ["key"]);
import { compareProducts } from "/src/script.js";
let compare = compareProducts();
const { deleteFromCompare } = compare;
</script>
