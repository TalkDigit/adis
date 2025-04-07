export const useSettings = defineStore('Settings', {
    state : () => ({
        settings : null
    }),
    actions : {
        async FetchSettings() {
            await useCustomFetch('settings')
            .then(response => {
                this.settings = response.data.value.data
            })
        }
    }
})