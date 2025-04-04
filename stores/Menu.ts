export const useMenu = defineStore('Menu', () => {

    const HeaderMenu = ref(null)

    const fetchHeaderMenu = async () => {
        await useCustomFetch('menu/header-menu')
        .then(response => {
            HeaderMenu.value = response.data.value.data
        })
    }

    return {
        HeaderMenu,
        fetchHeaderMenu,
    }
})