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

                        <form class="contact-form">
                            <div class="contact-form-personal-info">
                                <input type="text" placeholder="Adınız" />
                                <input type="text" placeholder="Soyadınız" />
                            </div>
                            <div class="contact-form-personal-info">
                                <input type="email" placeholder="E-Posta Adresiniz" />
                                <input type="tel" 
                                       v-model="phone" 
                                       @input="formatPhone" 
                                       placeholder="Telefon Numaranız" 
                                       maxlength="16" />
                            </div>
                           
                            <input class="w-100 mw-100" type="text" placeholder="Konu" />
                            <textarea placeholder="Mesajınız"></textarea>
                            
                            <!-- KVKK Checkbox -->
                            <label class="custom-checkbox" @click="showKvkkPopup = true">
                                <input type="checkbox">
                                <span class="checkmark"></span>
                                I have read and understood the  
                                <span class="kvkk-link">&nbsp;Information Text on the Protection of Personal Data.</span>
                            </label>

                            <div class="form-footer">
                                <button type="submit" class="submit-btn">
                                    <IconsWhiteIcon/> Send
                                </button>
                            </div>
                        </form>
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

<script>
export default {
    data() {
        return {
            phone: "",
            showKvkkPopup: false // Popup başlangıçta kapalı
        };
    },
    methods: {
        formatPhone() {
            let input = this.phone.replace(/\D/g, ""); // Sadece rakamları al
            if (input.startsWith("0")) {
                input = input.substring(1); // Başta 0 varsa kaldır
            }

            if (input.length > 10) input = input.substring(0, 10); // Maksimum 10 karakter al

            let formatted = input.length > 0 ? "0" : ""; // Eğer giriş varsa 0 ekle
            if (input.length > 0) formatted += `(${input.substring(0, 3)}`;
            if (input.length >= 4) formatted += `) ${input.substring(3, 6)}`;
            if (input.length >= 7) formatted += ` ${input.substring(6, 8)}`;
            if (input.length >= 9) formatted += ` ${input.substring(8, 10)}`;

            this.phone = formatted;
        }
    }
};
</script>

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
