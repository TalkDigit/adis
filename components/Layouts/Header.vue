<template>
    <header>
        <div class="container">
            <div class="headerFlex">
                <a href="/" class="video">
                    <video autoplay loop muted>
                        <source src="/assets/images/logo/logoneww.mp4" type="video/mp4" />
                    </video>
                </a>
                <div class="headerRight">
                    <ul :class="{ active: isMenuOpen }">
                        <li><a :href="$t('hakkimizdaLink')">{{ $t('hakkimizda') }}</a></li>
                        <li><a :href="$t('projelerLink')">{{ $t('projeler') }}</a></li>
                        <li><a :href="$t('iletisimLink')">{{ $t('iletisim') }}</a></li>
                    </ul>

                    <!-- Arama -->
                    <div class="icon-search-container" :class="{ active: isActive }" @click="toggleSearch" ref="searchContainer">
                        <div class="icon-wrapper" @click="searchTerm">
                            <IconsSearch />
                        </div>
                        <input ref="searchInput" v-model="search" class="search-input" @keyup.enter="searchTerm" placeholder="Search" @focus="onFocus" @blur="onBlur" @click.stop />
                    </div>

                    <!-- Mobilde Popup Açılan Arama -->
                    <div v-if="isActive && isMobile" class="search-popup">
                        <div class="search-popup-content">
                            <input ref="searchInput" v-model="search" @keyup.enter="searchTerm"  class="search-input" placeholder="Search" />
                            <button class="close-btn" @click="isActive = false">✖</button>
                        </div>
                    </div>

                    <a href="/">
                        <img class="desktopnone" src="/assets/images/mobilelogo.png" />
                    </a>

                    <!-- <ModuleLang/> -->
                    <div class="hamburgerbg">
                        <div class="hamburger" :class="{ active: isMenuOpen }" @click="toggleMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from "vue";

    const searchInput = ref(null);
    const isActive = ref(false);
    const searchQuery = ref("");
    const isMenuOpen = ref(false);
    const isMobile = ref(false); 
    const search = ref(null);

    const route = useRoute(),
        langStore = useLangControl(),
        { locale } = useI18n();

    const toggleSearch = () => {
        isActive.value = !isActive.value;
        if (isActive.value) {
            setTimeout(() => searchInput.value?.focus(), 100);
        } else {
            searchQuery.value = "";
        }
    };

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    };

    // **Ekran genişliğini belirleme fonksiyonu**
    const updateScreenSize = () => {
        if (typeof window !== "undefined") {
            isMobile.value = window.innerWidth <= 768;
        }
    };

    // Dışarı tıklayınca popup'ı kapat
    const closeSearchOnOutsideClick = (event) => {
        if (isActive.value && !event.target.closest(".search-popup-content") && !event.target.closest(".icon-search-container")) {
            isActive.value = false;
            searchQuery.value = "";
        }
    };

    // **ESC tuşuna basılınca popup'ı kapat**
    const closeOnEscape = (event) => {
        if (event.key === "Escape") {
            isActive.value = false;
            searchQuery.value = "";
        }
    };

    // **Bileşen yüklendiğinde ekran genişliğini kontrol et**
    onMounted(() => {
        updateScreenSize(); // İlk başta çağır
        window.addEventListener("resize", updateScreenSize);
        document.addEventListener("click", closeSearchOnOutsideClick);
        document.addEventListener("keydown", closeOnEscape);
    });

    // **Bileşen kaldırıldığında eventleri temizle**
    onUnmounted(() => {
        window.removeEventListener("resize", updateScreenSize);
        document.removeEventListener("click", closeSearchOnOutsideClick);
        document.removeEventListener("keydown", closeOnEscape);
    });

    const searchTerm = () => {
        location.href = locale.value == 'tr' ? "/arama/" + search.value.toLocaleLowerCase("tr-TR") : "/en/search/" + search.value.toLocaleLowerCase("tr-TR");
    };



</script>

<style scoped>
    @media (max-width: 768px) {
        header .search-popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }
        .language{
            display: none;
        }
        header .icon-search-container.active {
            width: 50px !important;
            height: 50px !important;
            background-color: #0c4282;
        }
        .headerRight a{
            z-index: 3;
        }
        header .search-popup-content {
            background: white;
            padding: 20px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
            width: 80%;
            max-width: 400px;
        }

        header .search-input {
            flex-grow: 1;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        header .close-btn {
            background: #0c4282;
            color: white;
            border: none;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 8px 15px;
            font-size: 18px;
            cursor: pointer;
            border-radius: 50%;
        }

        header .icon-search-container input {
            display: none;
        }
    }

    @media (min-width: 769px) {
        header .search-popup {
            display: none !important;
        }
    }
</style>
