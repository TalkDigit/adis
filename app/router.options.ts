import type { RouterConfig } from '@nuxt/schema'

const home = () => import('~/pages/index.vue').then(r => r.default || r),
page = () => import('~/pages/page.vue').then(r => r.default || r) ,
search = () => import('~/pages/search.vue').then(r => r.default || r)



export default <RouterConfig> {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: home,
      meta : {
        menuLight : true
      }
    },
    {
      name: 'homeEn',
      path: '/en',
      component: home,
      meta : {
        menuLight : true,
        lang : 'en'
      }
    },


    {
      name: 'page',
      path: '/:page',
      component: page
    },
    {
      name: 'pageEn',
      path: '/en/:page',
      component: page,
      meta : {
        lang : 'en'
      }
    },

    {
      name: 'search',
      path: '/arama/:key',
      component: search
    },

    {
      name: 'searchEn',
      path: '/en/search/:key',
      component: search,
      meta : {
        lang : 'en'
      }
    },

    {
      name: 'aboutUs',
      path: '/aboutUs',
      component: () => import('~/pages/aboutUs.vue')
    },
    {
      name: 'projects',
      path: '/projects',
      component: () => import('~/pages/projects.vue')
    },
    {
      name: 'contact',
      path: '/contact',
      component: () => import('~/pages/contact.vue')
    }
    
  ],
}