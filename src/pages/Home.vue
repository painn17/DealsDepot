<template>
    <div class=" home_container">
        <span class="text-3xl mx-auto">See our Products</span>
        <div>
            <hr class="hr">
            <div class="flex flex-col mx-auto gap-2 carousel">
                <span class="main_text">Our Bestseller! Try it</span>
                <Carousel :autoplay="3500" :wrap-around="true" :items-to-show="2" :transition="500" class="">
                  <Slide v-for="slide in 1" :key="slide" class="slide">
                    <RouterLink to="/categories/womens-shoes"><img src="/src/assets/images/womens-shoes.png"  alt="" srcset=""></RouterLink>
                  </Slide>
                  <Slide v-for="slide in 1" :key="slide" class="slide">
                    <RouterLink to="/categories/skincare"><img src="/src/assets/images/skincare.png"  alt="" srcset=""></RouterLink>
                  </Slide>
                  <Slide v-for="slide in 1" :key="slide" class="slide">
                    <RouterLink to="/categories/groceries"><img src="/src/assets/images/groceries_1.png"  alt="" srcset=""></RouterLink>
                  </Slide>
                  <Slide v-for="slide in 1" :key="slide" class="slide">
                    <RouterLink to="/categories/smartphones"><img src="/src/assets/images/smartphones.png"  alt="" srcset=""></RouterLink>
                  </Slide>
                <template #addons>
                  <Pagination/>
                  <Navigation/>
                </template>
                </Carousel>
            </div>
            <hr class="hr">
            <div class="products_grid">
                <span class="main_text">See more</span>
                <div class="plate_container">
                    <div class="fir-prod plate"><RouterLink to="/categories/fragrances"><img src="/src/assets/images/fragrances.png"  class="fir-prod" alt="" srcset=""></RouterLink></div>
                    <div class="sec-prod plate"><RouterLink to="/categories/skincare"><img src="/src/assets/images/cosmetics.png"  alt="" srcset=""></RouterLink></div>
                    <div class="four-prod plate"><RouterLink to="/categories/mens-watches"><img src="/src/assets/images/mens-watches.png"  alt="" srcset=""></RouterLink></div>
                    <div class="thir-prod plate"><RouterLink to="/categories/groceries"><img src="/src/assets/images/groceries.png"  alt="" srcset=""></RouterLink></div>
                    <div class="five-prod plate"><RouterLink to="/categories/laptops"><img src="/src/assets/images/laptops.png"  alt="" srcset=""></RouterLink></div>
                    <div class="six-prod plate"><RouterLink to="/categories/mens-shirts"><img src="/src/assets/images/mens-shirts.png"  alt="" srcset=""></RouterLink></div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
    .slide{
      @apply px-1
    }
</style>

<script >
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'Autoplay',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
  })
  </script>