<template>
  <div class="flex flex-row items-start w-full h-full">
    <RouterLink class="back-button h-[100vh]" :to="`/Categories`"
      ><span class="material-symbols-outlined"> arrow_back </span
      >Back</RouterLink
    >
    <div class="flex flex-col w-full">
      <div class="flex flex-col w-full h-full">
        <Loader v-if="category_data.length == 0" />
        <div class="product-container" v-else>
          <div class="flex flex-row items-center justify-between">
            <div class="flex flex-row gap-2 p-4">
              <p class="">{{ route.params.category.replace("-", " ") }}</p>
              <p>({{ category_data.total }})</p>
            </div>
            <select
              class="w-52 mx-8"
              v-model="products_for_one_page"
              @change="pagination"
            >
              <option value="4" class="p-2">4</option>
              <option value="8" class="p-2">8</option>
              <option value="12" class="p-2">12</option>
              <option value="16" class="p-2">16</option>
            </select>
          </div>
          <div class="category-container">
            <ProductCard
              v-for="product in products_for_page"
              class="category-card"
              :product="product"
            />
          </div>
        </div>
      </div>
      <div class="w-full mx-auto flex items-center justify-center text-center pb-8">
    <fwb-pagination
      @click="pagination()"
      v-model="currentPage"
      :total-items="products_data.length"
      large
    ></fwb-pagination>
  </div>
    </div class="flex flex-col">
  </div>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";
import Loader from "../components/Loader.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { FwbPagination } from "flowbite-vue";
let category_data = ref([]);
let products_data = ref([]);
const currentPage = ref(1);
let products_for_page = ref([]);
let product_grid_size = localStorage.getItem("product_grid_size")
let products_for_one_page = product_grid_size>0 ? ref(product_grid_size) : ref(8)
async function fetchCategory() {
  const response = await fetch(
    `https://dummyjson.com/products/category/${route.params.category}`
  );
  const json = await response.json();
  category_data.value = json;
  products_data.value = json.products;
  let products = json.products;
  /// fake quantity por pagination
  products.forEach((element) => {
    products.forEach((element) => {
      products_data.value.push(element);
    });
  });
  pagination();
}
function pagination() {
  localStorage.setItem('product_grid_size', products_for_one_page.value)
  window.scroll({ top: 100, behavior: "smooth" });
  const startIndex = (currentPage.value - 1) * products_for_one_page.value;
  const endIndex = Math.min(
    parseInt(startIndex + parseInt(products_for_one_page.value)),
    products_data.value.length
  );
  products_for_page.value = products_data.value.slice(startIndex, endIndex);
}
onMounted(() => {
  fetchCategory();
});
const route = useRoute();
// console.log(route.params)
</script>
<style scoped>
p {
  @apply capitalize text-3xl;
}
.product-container {
  @apply flex flex-col w-full;
}
</style>
