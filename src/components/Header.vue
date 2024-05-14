<template>
  <header class="header_container">
    <div class="">
      <div class="flex flex-row search" @click="open.toggleHeightCart()">
        <span class="material-symbols-outlined">shopping_cart </span>
        <div
          v-if="cart.storeQuantity > 0"
          class="bg-red-500 h-min rounded px-1 font-bold text-white"
        >
          {{ cart.storeQuantity }}
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="bg-emerald-200 flex flex-col grid-cols-3 gap-2 overflow-hidden absolute my-8 transition-all ease-in duration-200 justify-items-end z-10 text-center rounded w-fit h-fit max-h-[800px] top-1/4;"
          :style="{
            height: open.isOpenCart ? 'auto' : '0%',
            padding: open.isOpenCart ? '8px' : '0',
            display: cart.store.length > 3 ? 'grid' : 'flex',
          }"
        >
          <div v-if="cart.store.length == 0" class="text-lg font-semibold">
            Nothing here
          </div>
          <Cart
            v-else
            v-for="(item, index, counter) in cart.store"
            :item="item"
            :key="index"
            :counter="counter"
          />
          <div
            v-if="cart.store.length != 0"
            class="order bg-blue-100 text-xl font-bold flex items-center justify-center"
            :style="{
              width: cart.store.length > 3 ? '100%' : 'auto',
              gridColumnStart: cart.store.length > 3 ? '1' : '1',
              gridColumnEnd: cart.store.length > 3 ? '4' : '1',
            }"
            @click="cart.orderProducts()"
          >
            Order
          </div>
          <div
            v-if="cart.store.length != 0"
            class="bg-blue-100 rounded tracking-tighter font-semibold text-xl w-full items-center justify-center flex py-1"
            :style="{
              gridColumnStart: cart.store.length > 3 ? '1' : '1',
              gridColumnEnd: cart.store.length > 3 ? '4' : '1',
            }"
          >
            Total: {{ cart.totalprice }}$
          </div>
        </div>
      </div>
      <router-link to="/Categories"
        ><span class="header_component">Shop</span></router-link
      >
      <div class="flex flex-col">
        <span
          class="material-symbols-outlined compare"
          @click="open.toggleHeightCompare()"
        >
          compare_arrows
        </span>

        <div
          class="grid grid-cols-3 gap-2 overflow-hidden absolute my-8 transition-all ease-in duration-200 justify-items-end z-10 text-center bg-emerald-200 rounded w-full h-fit left-0 top-1/4"
          :style="{
            height: open.isOpenCompare ? '50%' : '0%',
            padding: open.isOpenCompare ? '16px' : '0',
          }"
        >
          <div
            class="absolute left-[47%] top-[40%] text-2xl font-semibold"
            v-if="compare.totalCompareQuantity < 1"
          >
            Nothing Here
          </div>
          <Compare
            v-else
            class="compare-container overflow-hidden flex flex-col w-full justify-between bg-blue-100 shadow-sm"
            v-for="(item, index) in compare.store"
            :item="item"
            :key="index"
          />
        </div>
      </div>
    </div>
    <router-link to="/"
      ><img
        src="/src/assets/DealsDepot.png"
        class="icon_container header_component"
        alt="DD"
        srcset=""
    /></router-link>
    <router-link to="/about" @click="store.dflt()"
      ><span class="header_component">About Us</span></router-link
    >
  </header>
</template>

<style scoped>
.header_component {
  @apply lg:text-3xl md:text-2xl sm:text-xl text-slate-800 transition ease-in-out duration-300 p-1;
}
.header_component:hover {
  @apply border-b border-emerald-400;
}
.header_container > div {
  @apply flex flex-row items-center gap-2;
}

img {
  @apply transition ease-in duration-300;
}

img:hover {
  @apply scale-105 border-none;
}
.header_container {
  @apply mx-auto w-full p-4 bg-slate-100 flex justify-evenly
    select-none cursor-pointer rounded items-center;
}
.icon_container {
  @apply sm:max-h-12 md:max-h-20 xs:max-h-10 w-max px-2;
}
</style>
<script setup>
import Compare from "../pages/Compare.vue";
import Cart from "../pages/Cart.vue";
import { scroll_div } from "/src/script.js";
import { ref } from "vue";
import { FwbAlert } from "flowbite-vue";

const store = scroll_div();
// const quantityOfCart = ref(0);
import { compareProducts, openWindow, addToCart } from "/src/script.js";
let compare = compareProducts();
let cart = addToCart();
let open = openWindow();
</script>
