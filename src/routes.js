import { createRouter, createWebHistory } from 'vue-router';
import Home from "./pages/Home.vue"
import Categories from "./pages/Categories.vue"
import About from './pages/About.vue'
import Info from './pages/Info.vue'
import Contact from './pages/Contact.vue'
import Error from './pages/Error.vue'
import CategoryProduct from './pages/CategoryProduct.vue'
import ProductPage from "./pages/ProductPage.vue";
const routes = [
    {
    path: '/',
    component: Home
    },
    {
    path: '/categories',
    component: Categories
    },
    {
    path: '/about',
    component: About,
    props: true
    },
    {
    path: '/info',
    component: Info
    },
    {
    path: '/contact',
    component: Contact
    },
    {
    path: "/:pathMatch(.*)*",
    component: Error
    },
    {
    path: "/categories/:category",
    component: CategoryProduct
    },
    {
    path: "/categories/:category/:id",
    component: ProductPage
    },
]

const router = createRouter({
    routes: routes,
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
      },
})

export default router