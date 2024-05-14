<template>
  <div class="flex flex-col">
    <Loader v-if="data.length == 0" />
    <div class="flex flex-row items-start" v-else>
      <RouterLink
        class="back-button h-[100vh]"
        :to="`/categories/${data.category}`"
        ><span class="material-symbols-outlined"> arrow_back </span
        >Back</RouterLink
      >
      <div>
        <div class="product-page-card">
          <Carousel
            :wrap-around="true"
            :items-to-show="1"
            :transition="500"
            class="carousel-thumbnail-product"
          >
            <Slide v-for="slide in 1" :key="slide"
              ><img :src="`${data.thumbnail}`" alt="" />
            </Slide>
            <Slide v-for="slide in 1" :key="slide"
              ><img :src="`${data.images[0]}`" alt="" />
            </Slide>
            <Slide v-for="slide in 1" :key="slide"
              ><img :src="`${data.images[1]}`" alt="" />
            </Slide>
            <Slide v-for="slide in 1" :key="slide"
              ><img :src="`${data.images[2]}`" alt="" />
            </Slide>
            <Slide v-for="slide in 1" :key="slide"
              ><img :src="`${data.images[3]}`" alt="" />
            </Slide>
            <template #addons>
              <Pagination />
              <Navigation />
            </template>
          </Carousel>
          <div class="product-info">
            <div class="category-text flex flex-col items-start gap-2">
              <p class="product-page-title">{{ data.title }}</p>
              <p class="brand">Brand:{{ data.brand }}</p>
              <div class="flex flex-row items-start select-none">
                <p class="font-bold">Rate: {{ data.rating }}</p>
                <div class="flex flex-row items-start gap-2 px-2">
                  <span class="material-symbols-outlined minus"> remove </span>
                  <span class="material-symbols-outlined star">star</span>
                  <span class="material-symbols-outlined plus"> add </span>
                </div>
              </div>
            </div>
            <div>
              <div class="flex flex-row items-center gap-2">
                <div class="cart">
                  <div
                    class="flex items-center gap-2 px-1"
                    @click="compare.addToCompare(data)"
                  >
                    Compare
                    <span class="material-symbols-outlined" href="#">
                      compare_arrows
                    </span>
                  </div>
                </div>
                <div class="cart" @click="cart.addToCart(data)">
                  <p class="px-1">{{ data.price }}$</p>
                  <span class="material-symbols-outlined" href="#">
                    shopping_cart
                  </span>
                </div>
              </div>
              <p class="product-page-description">{{ data.description }}</p>
            </div>
          </div>
        </div>
        <hr class="hr" />
        <div class="text-center">
          <span class="main_text text-2xl">See more</span>
          <Carousel
            :autoplay="3500"
            :wrap-around="true"
            :items-to-show="3"
            :transition="500"
            class="carousel-product"
          >
            <Slide v-for="slide in 1" :key="slide">
              <RouterLink to="/categories/womens-shoes"
                ><img
                  src="/src/assets/images/womens-shoes.png"
                  alt=""
                  srcset=""
              /></RouterLink>
            </Slide>
            <Slide v-for="slide in 1" :key="slide">
              <RouterLink to="/categories/skincare"
                ><img src="/src/assets/images/skincare.png" alt="" srcset=""
              /></RouterLink>
            </Slide>
            <Slide v-for="slide in 1" :key="slide">
              <RouterLink to="/categories/groceries"
                ><img src="/src/assets/images/groceries_1.png" alt="" srcset=""
              /></RouterLink>
            </Slide>
            <Slide v-for="slide in 1" :key="slide">
              <RouterLink to="/categories/smartphones"
                ><img
                  src="/src/assets/images/smartphones.png"
                  alt=""
                  srcset=""
                />
              </RouterLink>
            </Slide>
            <Slide v-for="slide in 1" :key="slide">
              <RouterLink to="/categories/laptops"
                ><img src="/src/assets/images/laptops.png" alt="" srcset="" />
              </RouterLink>
            </Slide>
            <template #addons>
              <Pagination />
              <Navigation />
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.brand {
  @apply text-gray-600 text-sm opacity-80;
}
.carousel-product {
  @apply py-4 w-1/3 mx-auto h-full;
}
.carousel-product img {
  @apply h-32 w-auto;
}
.carousel-thumbnail-product {
  @apply w-1/3 h-full;
}
.carousel-thumbnail-product img {
  @apply h-80;
}

li img {
  @apply transition ease-in duration-200;
}

li img:hover {
  @apply scale-105;
}

.product-page-card {
  @apply flex flex-row gap-6 p-8 justify-start;
}
.product-page-card > img {
  @apply rounded shadow-lg;
}
.product-page-title {
  @apply text-3xl font-bold;
}
.product-page-price {
  @apply text-lg p-4 transition duration-200 ease-in select-none cursor-pointer rounded-md w-fit font-semibold;
}
.product-page-price:hover {
  @apply scale-105 bg-emerald-400;
}
.product-page-description {
  @apply text-xl font-semibold py-2;
}
.cart {
  @apply transition duration-200 ease-in flex items-start pl-0 p-2 m-0 h-10 gap-2 select-none cursor-pointer text-lg font-bold;
}
.cart:hover {
  @apply text-white bg-emerald-400 rounded;
}
</style>
<script setup>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import Loader from "../components/Loader.vue";
import "vue3-carousel/dist/carousel.css";
import { compareProducts, addToCart } from "/src/script.js";
let compare = compareProducts();
let cart = addToCart();
import { onMounted, ref } from "vue";
let data = ref([]);
async function fetchCategory() {
  const response = await fetch(
    `https://dummyjson.com/products/${route.params.id}`
  );
  const json = await response.json();
  data.value = json;
  console.log(json);
}
onMounted(() => {
  fetchCategory();
});
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.params);
</script>
