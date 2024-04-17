<template>
    <div><h1>Nothing here...</h1>
    <RouterLink to="/"><p>Take me home</p></RouterLink>
    </div>
</template>
<style scoped>
div{
    @apply flex flex-col justify-center items-center gap-4
}

p{
    @apply bg-emerald-400 p-4 rounded-lg text-white transition duration-200 ease-in
}
p:hover{
    @apply scale-105
}
</style>