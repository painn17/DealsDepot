<template>
    <RouterLink :to="`/categories/${category}`">
        <div class="card">
            <img :src="`/src/assets/images/${category}.png`" alt="">
            <div class="category-text"><p class="">{{category.replace('-', ' ')}}</p></div>
        </div>
    </RouterLink>
</template>
<style >
.category-text{
    @apply capitalize text-lg text-slate-900 py-2 mx-auto
}

.card{
    @apply flex flex-col justify-between min-h-[17rem] max-h-[17rem] m-4
}

.card img{
    @apply min-h-36 px-6 py-2 min-w-32 max-w-56 mx-auto
}

</style>

<script setup>
import { RouterLink } from 'vue-router';
defineProps(['category'])
import { onMounted, ref } from "vue";

// let product = ref([])
// onMounted(() => {
//     fetch(`https://dummyjson.com/products`)
//         .then((res) => res.json())
//         .then((data) => (product.value = data))
//         .then((data) => (console.log(data.products)))
    
// });


</script>