import {createRouter, createWebHistory} from 'vue-router'
// @ts-ignore
import Home from '../pages/Home.vue'

// @ts-ignore
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => Home
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
