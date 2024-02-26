import { createRouter, createWebHistory} from 'vue-router'

const routes = [
    // Home
    {
        path: '/', 
        name: 'Home', 
        component: () => import('@/views/Home.vue'),
    },
    // Menu
    {
        path: '/menu', 
        name: 'Menu', 
        component: () => import('@/views/Menu.vue')
    },
    // Menu Detail
    {
        path: '/menu/:id', 
        name: 'MenuDetail', 
        component: () => import('@/views/MenuDetail.vue')
    },
    // Cart
    {
        path: '/cart', 
        name: 'Cart', 
        component: () => import('@/views/Cart.vue')
    },
    // Success Order
    {
        path: '/success-order', 
        name: 'SuccessOrder', 
        component: () => import('@/views/SuccessOrder.vue')
    },
    //  Not Found
    {
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: () => import('@/views/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router