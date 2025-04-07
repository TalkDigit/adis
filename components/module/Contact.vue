<template>
    <section class="contact">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-8 col-xl-6">
                    <div class="contact-main">
                        <div class="contact-content-title">
                            <h1> {{ $t('iletisimeGec') }} </h1>
                            <p>{{ $t('contactUs') }} </p>
                        </div>
                        <div class="contact-details">
                            <a href="tel:+90 212 830 34 00" class="contact-item">
                                <IconsPhonee/>
                                <div class="contact-item-content">
                                    <h2>{{ $t('telephone') }}</h2>
                                    <p>+90 212 830 34 00</p>
                                </div>
                            </a>
                            <a href="tel:+90 212 809 23 47" class="contact-item">
                                <IconsPhonee/>
                                <div class="contact-item-content">
                                    <h2>{{ $t('Fax') }}</h2>
                                    <p>+90 212 809 23 47</p>
                                </div>
                            </a>
                            <a href="mailto:info@adisenerji.com.tr" class="contact-item">
                                <IconsEmaill/>
                                <div class="contact-item-content">
                                    <h2>{{ $t('email') }}</h2>
                                    <p>info@adisenerji.com.tr</p>
                                </div>
                            </a>
                            <a href="#" target="_blank" class="contact-item">
                                <IconsAdress/>
                                <div class="contact-item-content">
                                    <h2>{{ $t('adres') }}</h2>
                                    <p>Ferko Signature, Esentepe, Büyükdere Cd. No:175, 34394 Şişli / İstanbul</p>
                                </div>
                            </a>
                        </div>

                       <ModuleForm/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>




