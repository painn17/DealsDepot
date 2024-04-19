

<template>
    <div class="about_container">
        <div class="about">
        <p class="py-2">About Us</p>
        <span class="">
        Welcome to Deals Depot, your one-stop shop for all your needs!
        At Deals Depot, we pride ourselves on offering a wide range of products to cater to every aspect of your life. Whether you
        're looking for the latest gadgets in electronics, stylish apparel, trendy watches, high-quality cosmetics, or luxurious fragrances, we've got you covered.
        Our mission is to provide our customers with a seamless shopping experience, offering competitive prices, fast shipping, and excellent 
        customer service. With a commitment to quality and satisfaction, we strive to exceed your expectations with every purchase.
        Explore our extensive collection and discover why Deals Depot is your ultimate destination for all your shopping needs.</span>
        </div>
        

            <vue-collapsible-panel-group>
        <vue-collapsible-panel :expanded="false"  class="about">
            <template #title>
                <div><p id="story-about">Our Story</p></div>
            </template>
            <template #content>
               <span>At Deals Depot, our story began with a passion for providing customers with convenient access to a diverse selection of products. Founded on the principles of quality, affordability, and customer satisfaction, Deals Depot started as a humble venture with a vision to become a trusted name in the retail industry. Over the years, we've grown and evolved, but our commitment to excellence remains unchanged.</span>
            </template>
        </vue-collapsible-panel>
        <vue-collapsible-panel :expanded="false"   class="about">
            <template #title>
                <div ><p id='mission-about'>Mission & Vision</p></div>
            </template>
            <template #content>
                <span>Our mission at Deals Depot is to empower customers by offering a comprehensive range of high-quality products at competitive prices. We aim to create a seamless shopping experience that delights and inspires our customers, fostering long-term relationships built on trust and reliability. Our vision is to become a leading global retailer known for innovation, integrity, and exceptional service.</span>
            </template>
        </vue-collapsible-panel>
        <vue-collapsible-panel :expanded="false" class="about">
            <template #title>
                <div ><p id='team-about'>Meet the Team</p></div>
            </template>
            <template #content>
                <span>Behind every success story is a dedicated team of individuals who work tirelessly to bring our vision to life. At Deals Depot, our team is comprised of passionate professionals with diverse backgrounds and expertise, united by a shared commitment to excellence. Get to know the faces behind the brand and discover the people who make Deals Depot possible.</span>
            </template>
        </vue-collapsible-panel>
    </vue-collapsible-panel-group>
        </div>
</template>

<style scoped>
p{
    @apply text-4xl select-none cursor-pointer
}
.about_container{
    @apply  w-3/4 mx-auto my-8 py-8 flex flex-col items-center justify-center text-center rounded relative overflow-hidden
}
.about{
    @apply rounded border px-8 mx-8 my-2 flex items-center justify-center flex-col 
}
span{
    @apply text-xl leading-10 select-none 
}

.hs-accordion{
    @apply text-center mx-auto 
}

.about_container, .hs-accordion{
    @apply border rounded-lg border-gray-300
}


</style>

<script setup>
import {
  VueCollapsiblePanelGroup,
  VueCollapsiblePanel,
} from '@dafcoe/vue-collapsible-panel'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCounterStore } from '/src/script.js'
const store = useCounterStore()

const test = ref(null)




function scrollTo() {
    if (store.name === 'story') {
        let anchor = document.querySelector('#story-about')
        anchor.scrollIntoView()
        anchor.click()
    }
    else if (store.name === 'mission') {
        let anchor = document.querySelector('#mission-about')
        anchor?.scrollIntoView()
        anchor.click()
    }
    else if (store.name === 'team') {
        let anchor = document.querySelector('#team-about')
        anchor?.scrollIntoView()
        anchor.click()
    }
}

onMounted(() => {
    scrollTo()
    store.name = 'default'
})

</script>