<template>
    <div class="dropdown language">
        <button class="langBtn" @click.stop="toggleDropdown">
            {{ locale }}
        </button>
        <ul class="dropdown-menu" :class="{ show: isDropdownOpen }">
            <li v-if="locale === 'tr'">
                <a :href="langStore.route.en" class="dropdown-item">EN</a>
            </li>
            <li v-else>
                <a :href="langStore.route.tr" class="dropdown-item">TR</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useLangControl } from "@/stores/langControl"; // Store'u doğru çağır

const route = useRoute();
const langStore = useLangControl();
const { locale } = useI18n();

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
    console.log("Dropdown durumu:", isDropdownOpen.value);
};

// Dışına tıklayınca dropdown'ı kapat
const closeDropdownOnOutsideClick = (event) => {
    if (isDropdownOpen.value && !event.target.closest(".dropdown")) {
        console.log("Dropdown dışına tıklandı, kapanıyor...");
        isDropdownOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener("click", closeDropdownOnOutsideClick);
});

onUnmounted(() => {
    document.removeEventListener("click", closeDropdownOnOutsideClick);
});
</script>

<style>
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-menu {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    background: transparent;
    box-shadow: none;
    padding: 0px;
    border:none;
    border-radius: 5px;
    list-style: none;
    z-index: 1000;
    margin-left: 10px;
    transition: opacity 0.3s ease, visibility 0.3s;
    min-width:50px
}
.dropdown-menu:hover a{
    background-color: transparent !important; 
    box-shadow: none !important;
}

.dropdown-menu.show {
    visibility: visible;
    opacity: 1;
}
</style>
