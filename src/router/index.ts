import { createRouter, createWebHistory } from 'vue-router'
import ColorPalette from "@/views/SelectColor/index.vue";
import VaporWaves from "@/views/VaporWaves/VaporWaves.vue"

// 创建routerHistory对象
const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/ColorPalette',
            component: ColorPalette
        },
        {
            path: '/VaporWaves',
            component: VaporWaves
        }
    ]
})

export default router
