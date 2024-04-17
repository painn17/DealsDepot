<template>
    <div v-if="category_data.length == 0" class="loading loader"> </div>
    <div class="product-container" v-else>
        <RouterLink class="back-button" :to="`/Categories`"><span class="material-symbols-outlined">
arrow_back
</span>Back</RouterLink>
        <div class="flex flex-row gap-2 p-4">
            <p class="">{{ route.params.category.replace('-', ' ') }}</p>
            <p>({{ category_data.total }})</p>
        </div>
        <div class="category-container">
                <ProductCard v-for="product in products_data" class="category-card"  :product="product"/>
        </div>
    </div>
</template>
<style scoped>
p{
    @apply capitalize text-3xl
}
.product-container{
    @apply flex flex-col
}

</style>
<script setup>
import ProductCard from './ProductCard.vue'
import {onMounted, ref} from 'vue'
import { useRoute } from "vue-router";
let category_data = ref([])
let products_data = ref([])

async function fetchCategory() {
    const response = await fetch(`https://dummyjson.com/products/category/${route.params.category}`)
    const json = await response.json()
    category_data.value = json
    products_data = json.products
    console.log(json.products);
}
onMounted(() => {
    fetchCategory()
})
const route = useRoute();
// console.log(route.params)
</script>