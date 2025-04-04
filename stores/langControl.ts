export const useLangControl = defineStore('langControl', () => {
    const route = ref({
        tr : '/',
        en : '/en'
    })

    return {
        route
    }
})