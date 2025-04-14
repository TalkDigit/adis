<template>
    <div class="tabs-container" :class="`map-${activeTab}`">
        <div class="tabs">
            <div class="tab-title bursa" :class="{ active: !activeTab }" @click="activeTab = 0">
                Güngören <br />
                Depolamalı RES <IconsRightold />
            </div>
            <div class="tab-title kirklareli" :class="{ active: activeTab === 1 }" @click="activeTab = 1">
                Armağan <br />
                Depolamalı RES <IconsRightold />
            </div>

            <div class="tab-title yenice" :class="{ active: activeTab === 2 }" @click="activeTab = 2">
                Yenice <br />
                Depolamalı RES <IconsRightold />
            </div>

            <div class="tab-title kislacik" :class="{ active: activeTab === 3 }" @click="activeTab = 3">
                Kışlacık <br />
                Depolamalı RES <IconsRightold />
            </div>

            <div class="tab-title kislacik" :class="{ active: activeTab === 4 }" @click="activeTab = 4">
                Bildim <br />
                Depolamalı GES <IconsRightold />
            </div>
        </div>

        <!-- Dinamik Tab İçerikleri -->
        <div v-for="(tabData, index) in tabsData" :key="index">
            <div class="tab-content" v-show="activeTab === index">
                <div class="contentFlex">
                    <div class="div">
                        <IconsInfo />
                        <p>{{ tabData.description }}</p>
                    </div>
                </div>
                <div class="circleTab">
                    <div class="power-capacity">
                        <small>Kurulu Güç</small>
                        <span class="capacity-value"> <span class="counter">{{ tabData.power }}</span> MWe </span>
                        <label class="capacity-label"><span>%</span>{{ tabData.percentage }}</label>
                    </div>

                    <div class="power-capacity">
                        <small>Yıllık Üretim</small>
                        <span class="capacity-value">
                            <span class="counter">{{ tabData.production }}</span>
                        </span>
                        <label class="capacity-label">Milyon kWh</label>
                    </div>

                    <div class="power-capacity">
                        <small>
                            Aydınlattığı <br />
                            Hane Sayısı
                        </small>
                        <span class="capacity-value">
                            <span class="counter">{{ tabData.households }}</span>
                        </span>
                    </div>

                    <div class="power-capacity">
                        <small>
                            Azalttığı <br />
                            Emisyon miktarı
                        </small>
                        <span class="capacity-value">
                            <span class="counter">{{ tabData.emission }}</span>
                        </span>
                        <label class="capacity-label">Ton/Yıl</label>
                    </div>

                    <div class="power-capacity">
                        <small>
                            Devreye <br />
                            Alınma Tarihi
                        </small>
                        <span class="capacity-value">
                            <span class="counter">{{ tabData.date }}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>

            <ModuleMapss/>
    </div>
</template>

<script setup>
    import { ref, computed } from "vue";

    const activeTab = ref(0);

    // Her tab için özel veriler
    const tabsData = [
        {
            // Bursa Tab
            description: "%100 yenilenebilir kaynaklara dayalı, depolamalı rüzgar ve güneş enerjisi santralleri geliştirerek Türkiye’nin enerji dönüşümüne katkı sunarken, ileri teknoloji depolama sistemleriyle sürdürülebilir, kesintisiz ve çevre dostu enerji üretimini mümkün kılıyor.",
            power: 100,
            percentage: 40,
            production: 346,
            households: "138.400",
            emission: "290.000",
            date: "2026Q1",
        },
        {
            // Kırklareli Tab
            description: "%100 yenilenebilir kaynaklara dayalı, depolamalı rüzgar ve güneş enerjisi santralleri geliştirerek Türkiye’nin enerji dönüşümüne katkı sunarken, ileri teknoloji depolama sistemleriyle sürdürülebilir, kesintisiz ve çevre dostu enerji üretimini mümkün kılıyor.",
            power: 100,
            percentage: 43,
            production: 376,
            households: "150.400",
            emission: "315.000",
            date: "2026Q1",
        },

        {
            // Yenice Tab
            description: "%100 yenilenebilir kaynaklara dayalı, depolamalı rüzgar ve güneş enerjisi santralleri geliştirerek Türkiye’nin enerji dönüşümüne katkı sunarken, ileri teknoloji depolama sistemleriyle sürdürülebilir, kesintisiz ve çevre dostu enerji üretimini mümkün kılıyor.",
            power: 100,
            percentage: 43,
            production: 376,
            households: "150,400",
            emission: "315.000",
            date: "2027Q1",
        },

        {
            // Kışlacık Tab
            description: "%100 yenilenebilir kaynaklara dayalı, depolamalı rüzgar ve güneş enerjisi santralleri geliştirerek Türkiye’nin enerji dönüşümüne katkı sunarken, ileri teknoloji depolama sistemleriyle sürdürülebilir, kesintisiz ve çevre dostu enerji üretimini mümkün kılıyor.",
            power: 75,
            percentage: 41,
            production: 270,
            households: "108.800",
            emission: "225.000",
            date: "2026Q1",
        },
        
        {
            // Bildim Tab
            description: "%100 yenilenebilir kaynaklara dayalı, depolamalı rüzgar ve güneş enerjisi santralleri geliştirerek Türkiye’nin enerji dönüşümüne katkı sunarken, ileri teknoloji depolama sistemleriyle sürdürülebilir, kesintisiz ve çevre dostu enerji üretimini mümkün kılıyor.",
            power: 100,
            percentage: 20,
            production: 241,
            households: "96.400",
            emission: "200.000",
            date: "2025Q4",
        },// Diğer tablar için veriler...
    ];

    const pathBounds = {
        0: { x: -350, y: 300, width: 3000, height: 3000 }, // Bursa
        1: { x: 0, y: 200, width: 1900, height: 1900 }, // Kırklareli
        // Diğer tablar...
    };

    const currentViewBox = computed(() => {
        if (!pathBounds[activeTab.value]) return "0 0 5528.7 2328.5";

        const bounds = pathBounds[activeTab.value];
        const padding = 100;

        return [bounds.x - padding, bounds.y - padding, bounds.width + padding * 2, bounds.height + padding * 2].join(" ");
    });

    const setActiveTab = (index) => {
        activeTab.value = index;
    };
</script>
