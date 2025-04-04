<template>
    <div v-if="Result">
        <div class="container">
            <div class="page">
                <div class="breadcrumb">
                    <ul class="breadcrumb-list">
                        <li><NuxtLink :to="{name : locale == 'tr' ? 'home' : 'homeEn'}" alt="">{{ $t('home') }}</NuxtLink></li>
                        <li> &nbsp;"<b>{{ route.params.key }}</b>" {{ $t('searchResult') }}</li>
                    </ul>
                </div>
            </div>
            <div class="corporate-banner">
                <h1>"<b>{{ route.params.key }}</b>" {{ $t('searchResult') }}</h1>
                <p>{{ Result.length }} {{ $t('searchFound') }}</p>
            </div>

            <div class="product-list-main">
                <div class="product-list-main-flex">
                    <div class="product-found" v-if="!Result.length">
                        <p>{{ $t('searchNotFound') }}</p>
                    </div>
                    <div class="product-card" v-for="item in Result" v-else>
                        <img v-if="item.data.urun_gorsel && item.data.urun_gorsel[locale]" :src="getAssets(item.data.urun_gorsel[locale])" class="product-card-img" alt="" />
                        <div class="product-card-main">
                            <!-- <p>{{ item.data.baslik[locale] }}</p> -->
                            <NuxtLink style="opacity: 0;" :to="`${locale == 'tr' ? '/' : '/en/'}` + item.data.slug[locale]" alt="" class="stretched-link">{{ $t('goHome') }} <IconsProductLink /></NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useSearch } from "~/stores/Search";
    import getAssets from "~/utilities/getAssets";

    const { locale } = useI18n(),
        route = useRoute(),
        SearchStore = useSearch(),
        langStore = useLangControl(),
        Result = computed(() => {
            const data = SearchStore.SearchProductResult;

            if (data == null) {
                return false;
            }

            return data;
        });

    langStore.route.tr = "/arama/" + route.params.key;
    langStore.route.en = "/en/search/" + route.params.key;
    await callOnce(SearchStore.fetchSearchProduct);
</script>

<style scoped>
    .corporate-banner {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 0rem;
    }
    .product-list-main {
    display: flex
;
    gap: 51px;
    margin: 91px auto 140px;
    max-width: 1550px;
    width: 100%;
}
    .corporate-banner p {
        color: #fff;
        font-style: italic;
    }
    .product-list-main-flex {
    display: flex
;
    flex-wrap: wrap;
    gap: 30px;
    max-width: unset;
    row-gap: 25px;
    width: 100%;
}
    .product-list-main-flex {
        max-width: unset;
    }
    .product-found {
        color: #747474;
        letter-spacing: -0.4px;
        font-family: "Ubuntu", sans-serif;
        text-decoration: unset;
    }
    .corporate-banner {
        align-items: center;
        background: linear-gradient(98deg, #0C4282, #0C4282, #0C4282);
        border-radius: 40px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0;
        justify-content: center;
        height: 300px;
        margin: 16px auto 0;
        max-width: 1650px;
        overflow: hidden;
        padding: 0 120px;
        position: relative;
        width: 100%;
    }
    .corporate-banner h1 {
        color: #fff;
        font-family: Ubuntu, sans-serif;
        font-size: 45px;
        font-weight: 300;
        letter-spacing: -1.13px;
        line-height: 50px;
        max-width: 623px;
        width: 100%;
    }
    .corporate-banner p {
        color: #fff;
        font-style: italic;
    }
    @media(max-width:768px){
        .corporate-banner{
            height: 100% !important;
            padding: 30px !important;
            margin: 0px !important;
        }
        .corporate-banner h1{
            font-size: 22px;
        }
    }
    @media (min-width: 991px) {
        .product-card {
            width: calc(100% / 4 - 22.5px);
        }
     
    }
    .breadcrumb-list {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .breadcrumb-list li,
    .breadcrumb-list li a {
        color: #747474;
        font-family: Ubuntu, sans-serif;
        font-weight: 300;
        letter-spacing: -0.4px;
        text-decoration: unset;
    }
</style>
