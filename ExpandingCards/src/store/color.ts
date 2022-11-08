import { defineStore } from 'pinia'

export const useColorStore = defineStore('color', {
    state: () => {
        return {
            color:{
                R:0,
                G:0,
                B:0
            }
        }
    },
    actions: {

    },
})
