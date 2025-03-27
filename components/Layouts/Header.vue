<template>
    <header>
        <div class="container">
            <div class="headerFlex">
                <a href="#" class="video">
                    <video autoplay loop muted>
                        <source src="/assets/images/logo/logo.mp4" type="video/mp4" />
                    </video>
                </a>
                <div class="headerRight">
                    <ul :class="{ active: isMenuOpen }">
                        <li><a href="#">Institutional</a></li>
                        <li><a href="#">Fields of Activity</a></li>
                        <li><a href="#">Solutions</a></li>
                    </ul>
                    <div class="icon-search-container" :class="{ active: isActive }" @click="toggleSearch" ref="searchContainer">
                        <div class="icon-wrapper">
                            <IconsSearch />
                        </div>
                        <input 
                    ref="searchInput"
                    v-model="searchQuery" 
                    class="search-input" 
                    placeholder="Search" 
                    @focus="onFocus" 
                    @blur="onBlur" 
                    @click.stop
                />

                    </div>
                    <img class="desktopnone" src="/assets/images/mobilelogo.png"/>
                    <div class="langBtn">
                        <button>EN</button>
                    </div>
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

const toggleSearch = () => {
    isActive.value = !isActive.value;
    if (isActive.value) {
        setTimeout(() => searchInput.value?.focus(), 100);
    } else {
        searchQuery.value = "";
    }
};



const isActive = ref(false);
const searchQuery = ref("");
const searchContainer = ref(null);
const isMenuOpen = ref(false);


const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const onFocus = () => {
    isActive.value = true;
};

const closeSearchOnOutsideClick = (event) => {
    if (searchContainer.value && !searchContainer.value.contains(event.target)) {
        isActive.value = false;
        searchQuery.value = "";
    }
};

onMounted(() => {
    document.addEventListener("click", closeSearchOnOutsideClick);
});

onUnmounted(() => {
    document.removeEventListener("click", closeSearchOnOutsideClick);
});
</script>