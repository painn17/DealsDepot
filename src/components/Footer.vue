
import { RouterLink } from 'vue-router';

import { RouterLink } from 'vue-router';
<template>
    <footer class="footer_container">
        <div>
            <div class="footer_column">
                <router-link to="/info"><span class="column_header">Info</span></router-link>
                <span class="column_info">
                    <span>FAQ</span>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                    <span></span>
                </span>
            </div>
            <div class="footer_column">
                <router-link to="/about"><span class="column_header">About Us</span></router-link>
                <span class="column_info">
                    <RouterLink to="/about"><span>Our Story</span></RouterLink>
                    <RouterLink to="/about"><span>Mission & Vision</span></RouterLink>
                    <RouterLink to="/about"><span>Meet the Team</span></RouterLink>
                    <span></span>
                </span>
            </div>
            <div class="footer_column">
                <router-link to="/contact"><span class="column_header">Contact</span></router-link>
                <span class="column_info">
                    <span>Get in Touch</span>
                    <span>Customer Support</span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div class="footer_column">
                <span class="column_header">Shop</span>
                <span class="column_info">
                    <router-link to="/Categories"><span>Browse Products</span></router-link>
                    <router-link to="/"><span>Home</span></router-link>
                    <span>Sells</span>
                </span>
            </div>
        </div>
        <div>
            Copyright @DealsDepot 2024
        </div>
    </footer>

</template>

<style>
.footer_container{
        @apply bg-slate-100 p-4 select-none cursor-pointer items-center
    }
    .footer_container>div{
        @apply flex flex-row mx-8 p-8 justify-evenly
    }
    .footer_column{
        @apply flex flex-col gap-6
    }
    .footer_column .column_header{
        @apply  text-2xl
    }
    .footer_column>.column_info{
        @apply flex flex-col gap-4 cursor-pointer
    }

    .column_info span{
        @apply text-xl text-slate-800 transition ease-in-out duration-300 p-1 pl-0
    }
    .column_info span:hover{
        @apply border-b border-emerald-400
    }
</style>