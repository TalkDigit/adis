<template>
    <div class="tabs-container">
        <div class="tabs">
            <div class="tab-title" :class="{ active: activeTab === 0 }" @click="activeTab = 0">
                Güngören <br />
                Depolamalı RES <IconsRightold />
            </div>
            <div class="tab-title" :class="{ active: activeTab === 1 }" @click="activeTab = 1">
                Armağan <br />
                Depolamalı RES <IconsRightold />
            </div>
            <div class="tab-title" :class="{ active: activeTab === 2 }" @click="activeTab = 2">
                Yenice <br />
                Depolamalı RES <IconsRightold />
            </div>
            <div class="tab-title" :class="{ active: activeTab === 3 }" @click="activeTab = 3">
                Kışlacık <br />
                Depolamalı RES <IconsRightold />
            </div>
            <div class="tab-title" :class="{ active: activeTab === 4 }" @click="activeTab = 4">
                Bildim <br />
                Depolamalı GES <IconsRightold />
            </div>
        </div>
        <div class="tab-content" v-show="activeTab === 0">
            <div class="contentFlex">
              <div class="div">
                <IconsInfo/>
                <p>
                   
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Tellus praesent maximus diam suscipit, pulvinar suspendisse tempor eu ultricies.
                </p>
              </div>
            </div>
            <div class="circleTab">
                <div class="power-capacity">
                    <small>Kurulu Güç</small>
                    <span class="capacity-value"> <span class="counter">100</span> MWe </span>
                    <label class="capacity-label"><span>%</span>43</label>
                </div>

                <div class="power-capacity">
                    <small>Yıllık Üretim</small>
                    <span class="capacity-value">
                        <span class="counter">376 </span>
                    </span>
                    <label class="capacity-label">Milyon kWh</label>
                </div>

                <div class="power-capacity">
                    <small>
                        Aydınlattığı <br />
                        Hane Sayısı
                    </small>
                    <span class="capacity-value">
                        <span class="counter">150.400</span>
                    </span>
                </div>

                <div class="power-capacity">
                    <small>
                        Azalttığı <br />
                        Emisyon miktarı
                    </small>
                    <span class="capacity-value">
                        <span class="counter">315.000 </span>
                    </span>
                    <label class="capacity-label">Ton/Yıl</label>
                </div>

                <div class="power-capacity">
                    <small>
                        Devreye <br />
                        Alınma Tarihi
                    </small>
                    <span class="capacity-value">
                        <span class="counter">2026Q1</span>
                    </span>
                </div>
            </div>
            <img src="/assets/images/adis-map.svg" alt=""/>
        </div>
        <div class="tab-content" v-show="activeTab === 1">
            <p>Bu Tab 2 içeriğidir.</p>
        </div>
        <div class="tab-content" v-show="activeTab === 2">
            <p>Bu Tab 3 içeriğidir.</p>
        </div>
        <div class="tab-content" v-show="activeTab === 3">
            <p>Bu Tab 4 içeriğidir.</p>
        </div>
        <div class="tab-content" v-show="activeTab === 4">
            <p>Bu Tab 5 içeriğidir.</p>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    const activeTab = ref(0);
</script>


