export const usekvkk = defineStore('kvkk', () => {

    const kvkkState = ref(null)

    const fetchkvkk = async () => {

        await useCustomFetch('/moduldata/kvkk', {
            method : 'POST',
            query : {
                addtional : {
                    where : {
                        status : true
                    }
                }
            }
        })
        .then(response => {
            if(!response.data.value.success){
                Page.value = 404;
                return false
            }
            kvkkState.value = response.data.value.data
        })
    }

    return {
        kvkkState,
        fetchkvkk,
    }
})