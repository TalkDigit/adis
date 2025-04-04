<template>
    <form class="contact-form">
        <div class="contact-form-personal-info">
            <input type="text" :placeholder="$t('ad')" v-model="FormStore.FormCheck['name']" />
            <input type="text" :placeholder="$t('soyad')" v-model="FormStore.FormCheck['surname']" />
        </div>
        <div class="contact-form-personal-info">
            <input type="email" :placeholder="$t('email')" v-model="FormStore.FormCheck['email']" />
            <input type="tel" v-model="FormStore.FormCheck['phone']" @input="maskPhoneNumber" :placeholder="$t('phone')" maxlength="16" />
        </div>

        <input class="w-100 mw-100" type="text" :placeholder="$t('konu')" v-model="FormStore.FormCheck['subject']" />
        <textarea :placeholder="$t('mesaj')" v-model="FormStore.FormCheck['message']"></textarea>

        <!-- KVKK Checkbox -->
        <label class="custom-checkbox">
            <input type="checkbox" v-model="kvkkAccepted" />
            <span class="checkmark"></span>
           
            <span @click="showKvkkPopup = true">
                {{ $t('kvkk') }}
            </span>
        </label>

        <div class="form-footer">
            <button @click="submitForm" type="submit" class="submit-btn"> {{ $t('send') }}</button>
        </div>
    </form>

    <!-- KVKK Popup -->
    <div v-if="showKvkkPopup" class="kvkk-popup">
        <div class="kvkk-popup-content">
            <button class="close-btn" @click="showKvkkPopup = false">✖</button>
            <h3>Kişisel Verilerin Korunması Aydınlatma Metni</h3>
            <p>
                Kişisel verileriniz 6698 sayılı Kişisel Verilerin Korunması Kanunu çerçevesinde işlenmektedir. Detaylı bilgi için lütfen KVKK metni ni okuyunuz.
            </p>
        </div>
    </div>
</template>


<script setup>
import { ref } from "vue";
import notification from "duct-notification";
import getData from "@/utilities/getData";
import getAssets from "@/utilities/getAssets";
const FormStore = useForm();

const kvkkAccepted = ref(false);
const showKvkkPopup = ref(false); // ✅ Popup için ref eklendi

const submitForm = (event) => {
    // Prevent the default form submission (which reloads the page)
    event.preventDefault();

    // First, check if all fields are filled
    if (
        !FormStore.FormCheck.name ||
        !FormStore.FormCheck.surname ||
        !FormStore.FormCheck.phone ||
        !FormStore.FormCheck.email ||
        !FormStore.FormCheck.subject ||
        !FormStore.FormCheck.message
    ) {
        // Show the danger notification if any fields are missing
        notification({
            type: "danger",
            head: "Hata",
            message: "Lütfen tüm alanları doldurun!",
            timer: 5000
        });
        return false; // Prevent further form submission
    }

    // Proceed with form submission
    const form = new FormData();
    const dataObj = FormStore.FormCheck;
    for (const key in dataObj) {
        if (Object.hasOwnProperty.call(dataObj, key)) {
            form.append(`data[${key}]`, dataObj[key] || "");
        }
    }

    FormStore.FormCheck = form;

    // Here we can call the API or submit the form
    callOnce(FormStore.PostFormContact);

    // Reset the form and notifications
    FormStore.FormCheck = {};
    kvkkAccepted.value = false;

    // Show the success notification after successful form submission
    notification({
        type: "success",
        message: "Mesajınız başarıyla iletildi. Talebinizi inceleyerek en kısa sürede size dönüş sağlayacağız.",
        timer: 5000 // Adjust timer if necessary
    });
};



const maskPhoneNumber = (event) => {
    let input = event.target;
    let value = input.value.replace(/\D/g, "");

    if (value.length > 10) value = value.slice(0, 10);

    let maskedValue = "";
    if (value.length > 0) maskedValue = `(${value.slice(0, 3)}`;
    if (value.length > 3) maskedValue += `) ${value.slice(3, 6)}`;
    if (value.length > 6) maskedValue += ` ${value.slice(6, 8)}`;
    if (value.length > 8) maskedValue += ` ${value.slice(8, 10)}`;

    input.value = maskedValue;
    FormStore.FormCheck["phone"] = maskedValue;
};
</script>


<style scoped>
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
    width: 100%;
    max-width:900px;
    border-radius: 10px;
    position: relative;
}
.kvkk-popup-content h3{
    font-size:22px;
    color:#565656
}
.kvkk-popup-content p{
    color:#9B9B9B;
    font-size:14px
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
    text-decoration: underline;
}
.kvkk-link:hover {
    color: darkblue;
}

</style>
