<template>
        <header class="header_container">
            <div >
                <span class="material-symbols-outlined search">search</span>
                <router-link to="/Categories"><span class="header_component">Shop</span></router-link>
                <span class="material-symbols-outlined compare">
                            compare_arrows
                        </span>
            </div>
            <router-link to="/"><img src="/src/assets/DealsDepot.png" class="icon_container header_component" alt="DD" srcset=""></router-link>
            <router-link to="/about"><span class="header_component">About Us</span></router-link>
        </header>
</template>

<style scoped>
.header_component{
    @apply lg:text-3xl md:text-2xl sm:text-xl text-slate-800 transition ease-in-out duration-300 p-1
    }
.header_component:hover{
    @apply border-b border-emerald-400
}
.header_container>div{
   @apply flex flex-row items-center gap-2 
}

img{
    @apply transition ease-in duration-300
}

img:hover{
    @apply scale-105 border-none
}

.header_container{
    @apply mx-auto w-full p-4 bg-slate-100 flex justify-evenly
    select-none cursor-pointer rounded items-center  
}
.icon_container{
    @apply sm:max-h-12 md:max-h-20 xs:max-h-10 w-max
}
.compare, .search{
    @apply transition ease-in duration-200 rounded p-1
}
.compare:hover, .search:hover{
    @apply bg-emerald-400 scale-105 text-white
}

</style>