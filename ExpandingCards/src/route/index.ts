import { createRouter, createWebHistory } from 'vue-router'
import ColorPalette from "@/components/selectColor/ColorPalette.vue";

// 创建routerHistory对象
const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/ColorPalette',
            component: ColorPalette
        }
    ]
})

export default router
