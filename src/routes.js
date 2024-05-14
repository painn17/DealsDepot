import { createRouter, createWebHistory } from 'vue-router';
import Home from "./pages/Home.vue"
import Categories from "./pages/Categories.vue"
import About from './pages/About.vue'
import Info from './pages/Info.vue'
import Contact from './pages/Contact.vue'
import Error from './pages/Error.vue'
import CategoryProduct from './pages/CategoryProduct.vue'
import ProductPage from "./pages/ProductPage.vue";
import Compare from './pages/Compare.vue'
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
    {
    path: '/Compare',
    component: Compare
    },
]

const router = createRouter({
    routes: routes,
    history: createWebHistory(),
})

export default router
