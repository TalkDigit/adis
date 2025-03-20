<template>
    <header>
        <div class="container">
            <div class="headerFlex">
                <a href="#">
                    <video autoplay loop muted>
                        <source src="/assets/images/logo/logo.mp4" type="video/mp4" />
                    </video>
                </a>
                <div class="headerRight">
                    <ul>
                    <li><a href="#">Institutional</a></li>
                    <li><a href="#">Fields of Activity</a></li>
                    <li><a href="#">Solutions</a></li>
                </ul>
                    <div class="icon-search-container" :class="{ active: isActive }" @click="toggleSearch" ref="searchContainer">
                        <div class="icon-wrapper">
                            <IconsSearch />
                        </div>
                        <input 
                            v-model="searchQuery" 
                            class="search-input" 
                            placeholder="Search" 
                            @focus="onFocus" 
                            @blur="onBlur" 
                            @click.stop
                        />
                    </div>

                    <div class="langBtn">
                        <button>EN</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from "vue";

    const isActive = ref(false);
    const searchQuery = ref("");
    const searchContainer = ref(null);

    const toggleSearch = () => {
        isActive.value = !isActive.value;
        if (isActive.value) {
            setTimeout(() => document.querySelector(".search-input").focus(), 100);
        } else {
            searchQuery.value = "";
        }
    };

    const onFocus = () => {
        isActive.value = true;
    };

    const closeSearchOnOutsideClick = (event) => {
        if (searchContainer.value && !searchContainer.value.contains(event.target)) {
            isActive.value = false;
            searchQuery.value = ""; // Optionally clear the search query
        }
    };

    onMounted(() => {
        document.addEventListener("click", closeSearchOnOutsideClick);
    });

    onUnmounted(() => {
        document.removeEventListener("click", closeSearchOnOutsideClick);
    });
</script>
