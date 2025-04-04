export const useSearch = defineStore('Search', () => {

    const SearchProductResult = ref(null)


    const fetchSearchProduct = async () => {
        const nuxtApp = useNuxtApp(),  
        route = useRoute()

        let pages = nuxtApp.$i18n.locale.value == 'tr' ? 'sayfalar' : 'pages'
        await useCustomFetch('/moduldata/' + pages, {
            method : 'POST',
            query : {
                search: route.params.key,
                addtional : {
                    where : {
                        status : true
                    }
                }
            }
        })
        .then(response => {
            if(!response.data.value.success){
                SearchProductResult.value = []
                return false;
            }
            SearchProductResult.value = response.data.value.data
        })
    }

    return {
        SearchProductResult,
        fetchSearchProduct,
    }
})