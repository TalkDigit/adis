import type { RouterConfig } from '@nuxt/schema'

const home = () => import('~/pages/index.vue').then(r => r.default || r)

export default <RouterConfig> {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: home
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