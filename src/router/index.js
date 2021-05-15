import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from "@/views/Products";
import ProductDetail from "@/views/ProductDetail";
import Login from "@/views/Login";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/product/:productId',
    name: 'ProductDetail',
    component: ProductDetail,
    props: route =>({productId: route.params.productId})
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
