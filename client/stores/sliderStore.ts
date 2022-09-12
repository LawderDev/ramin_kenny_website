import {defineStore} from "pinia";
import {ref} from "#imports";
import {Swiper} from "swiper";

export const useSliderStore = defineStore('slider', () => {
    let slider = ref({} as Swiper)
    const slideTo = (index: number) => slider.value.slideTo(index)
    return { slider, slideTo }
})
