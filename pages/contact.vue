<template>
    <section class="contact">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-8 col-xl-6">
                    <div class="contact-main">
                        <div class="contact-content-title">
                            <h1>İletişime Geç</h1>
                            <p>Contact Us</p>
                        </div>
                        <div class="contact-details">
                            <a href="tel:0 000 000 00 00" class="contact-item">
                                <IconsPhonee/>
                                <div class="contact-item-content">
                                    <h2>Telephone:</h2>
                                    <p>0 000 000 00 00</p>
                                </div>
                            </a>
                            <a href="mailto:info@adisenerji.com.tr" class="contact-item">
                                <IconsEmaill/>
                                <div class="contact-item-content">
                                    <h2>E-Mail: </h2>
                                    <p>info@adisenerji.com.tr</p>
                                </div>
                            </a>
                            <a href="#" target="_blank" class="contact-item">
                                <IconsAdress/>
                                <div class="contact-item-content">
                                    <h2>Adres</h2>
                                    <p>Ferko Signature, Esentepe, Büyükdere Cd. No:175, 34394 Şişli / İstanbul</p>
                                </div>
                            </a>
                        </div>

                       <ModuleForm/>
                    </div>
                </div>
            </div>
        </div>

        <!-- KVKK Popup -->
        <div v-if="showKvkkPopup" class="kvkk-popup">
            <div class="kvkk-popup-content">
                <button class="close-btn" @click="showKvkkPopup = false">×</button>
                <h2>KVKK Aydınlatma Metni</h2>
                <p>
                    Buraya KVKK metnini ekleyebilirsin. Kişisel verilerin korunması hakkında bilgilendirme yazısı.
                </p>
            </div>
        </div>
    </section>
</template>



<style scoped>
/* KVKK Popup */
.kvkk-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
.kvkk-popup-content {
    background: white;
    padding: 20px;
    width: 600px;
    border-radius: 10px;
    position: relative;
}
.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
}
.kvkk-link {
    cursor: pointer;
}
</style>
