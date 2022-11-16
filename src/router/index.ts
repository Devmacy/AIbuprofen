import { createRouter, createWebHistory } from 'vue-router'
import ColorPalette from "@/views/SelectColor/index.vue";
import VaporWaves from "@/views/VaporWaves/VaporWaves.vue"
import LuckySheet from "@/views/LuckySheet/index.vue"

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
        },
        {
            path: '/LuckySheet',
            component: LuckySheet
        }
    ]
})

export default router
