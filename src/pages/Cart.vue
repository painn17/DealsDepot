<template>
  <div
    class="compare-container overflow-hidden flex flex-col w-full h-full justify-between bg-blue-100 shadow-sm text-lg leading-none"
  >
    <div class="info-container">
      <span class="flex flex-col gap-1 py-1 w-fit mx-auto">
        <p class="font-bold text-base capitalize">{{ item.title }}</p>
        <span>Price for item: {{ item.price }}$</span>
        <!-- {{
            (item.price - (item.price * item.discountPercentage) / 100).toFixed(
              0
            )
          }} -->
        <span>Price for all items: {{ item.total }}$</span>
        <div class="flex flex-col">
          Quantity:
          <div class="flex flex-row items-center justify-around">
            <span
              class="material-symbols-outlined minus"
              @click="cart.changeQuanity(item, -1)"
            >
              remove
            </span>
            <span>
              {{ item.quantity }}
            </span>
            <span
              class="material-symbols-outlined plus"
              @click="cart.changeQuanity(item, 1)"
            >
              add
            </span>
          </div>
        </div>
      </span>
    </div>

    <span
      @click="cart.deleteFromCart(item)"
      class="material-symbols-outlined transition ease-in p-2 duration-200 h-min bg-red-200 w-fit mx-auto rounded remove"
    >
      remove
    </span>
  </div>
</template>
<style scoped>
div {
  @apply rounded py-1 px-4;
}
.remove:hover {
  @apply scale-105 bg-red-300;
}
</style>
<script setup>
defineProps(["item"], ["key"]);
import { addToCart } from "/src/script.js";
let cart = addToCart();
</script>
