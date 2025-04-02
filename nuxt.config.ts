// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({


  app : {
    head: {
      link: [
         { rel: 'icon', type: 'image/png', href: "/assets/images/favicon.png" },
      ]
   }
  },


  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  router: {
    options: {
      linkActiveClass: 'active'
    }
  },
  css: ["bootstrap/dist/css/bootstrap.min.css", "~/scss/main.scss"],
  i18n: {
    vueI18n: './lang/i18n.config.ts'
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.BASE_API_URL,
      cdnUri : process.env.CDN_URL
    }
  },
  components: {
    global: true,
    dirs: ['~/components']
  },
  plugins: [
    { src: "~/plugins/jquery", mode: "client" },
    { src: "~/plugins/bootstrap.ts", mode: "client" }
  ],
  modules: ['@pinia/nuxt', '@nuxtjs/i18n', "nuxt-aos"]
})