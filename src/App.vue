<template>
  <Header></Header>
  <div class="content_container" @click="closeWindows()">
    <div class="bg-slate-50 min-h-fit">
      <router-view />
    </div>
  </div>
  <Footer @click="closeWindows()"></Footer>
</template>

<style>
.content_container {
  @apply flex flex-col justify-around min-h-[50vh] container mx-auto;
}
a {
  text-decoration: none;
  @apply text-slate-900;
}
.vcp__header {
  @apply flex flex-row items-center mx-auto;
}

.vcp {
  @apply flex flex-col justify-center;
}
</style>
<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import "@coreui/coreui/dist/css/coreui.min.css";
import { openWindow } from "./script.js";
let window = openWindow();
function closeWindows() {
  if (window.isOpenCart == true) {
    window.isOpenCart = false;
  }
  if (window.isOpenCompare == true) {
    window.isOpenCompare = false;
  }
}
</script>
