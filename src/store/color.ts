import {defineStore} from 'pinia'

export const useColorStore = defineStore('color', {
    state: () => {
        return {
            colorR: 0,
            colorG: 0,
            colorB: 0,
        }
    },
    actions: {
        /**
         * 改变store的类型
         * @param r red
         * @param g green
         * @param b blue
         */
        changeState(r: number, g: number, b: number) {
            this.colorR = r || 0
            this.colorG = g || 0
            this.colorB = b || 0
        }
    },
})
