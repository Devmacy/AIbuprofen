import { createRouter, createWebHistory } from 'vue-router'
import Contract from "./../components/Contract.vue";

// 创建routerHistory对象
const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/Contract',
            component: Contract
        }
    ]
})

export default router
