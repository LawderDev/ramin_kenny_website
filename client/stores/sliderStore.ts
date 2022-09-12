import {defineStore} from "pinia";
import {ref} from "#imports";

export const useSliderStore = defineStore('slider', () => {
    let slider = null
    return { slider }
})
