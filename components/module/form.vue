<template>
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


</template><script>
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