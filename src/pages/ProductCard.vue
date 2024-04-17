<template>
<RouterLink :to="`/categories/${product.category}/${product.id}`">
    
    <div class="card" >
        <img :src="`${product.thumbnail}`" alt="">
        <div class="product-info">
            <div class="category-text ">
                <p >{{product.title}}</p>
            </div>
            <div class="flex flex-row items-center gap-2">
                <div class="cart">
                    <span class="material-symbols-outlined">
                        compare_arrows
                    </span>
                    
                </div>
                <div class="cart">
                    <p>{{ product.price }}$</p>
                    <span class="material-symbols-outlined ">
                    shopping_cart
                    </span>
                </div>
            </div>
        </div>
    </div>
</RouterLink>
</template>
<style scoped>
.product-info{
    @apply flex flex-col items-center justify-end
}
.category-text{
    @apply  overflow-hidden text-ellipsis px-2
}
.cart{
    @apply transition duration-200 ease-in flex items-start p-1 m-0 h-8 gap-2
}
.cart:hover{
    @apply text-white bg-emerald-400 rounded
}
</style>
<script setup>
defineProps(['product'])
</script>