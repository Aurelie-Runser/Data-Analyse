import { createRouter, createWebHistory } from 'vue-router';

import index from '@/views/index.vue'

import prodFiliereView from '@/views/prodFiliereView.vue'
import prodFiliereTempsView from '@/views/prodFiliereTempsView.vue'

import prodEolView from '@/views/prodEolView.vue'
import prodHydrauView from '@/views/prodHydrauView.vue'

import consoView from '@/views/consoView.vue'

import conclusionView from '@/views/conclusionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                        name: 'index',                    component: index },

    { path: '/prod_filiere',            name: 'prodFiliereView',     component: prodFiliereView },
    { path: '/prod_filiere_temps',      name: 'prodFiliereTempsView',     component: prodFiliereTempsView },

    { path: '/prod_eol',                name: 'prodEolView',              component: prodEolView },
    { path: '/prod_hydrau',             name: 'prodHydrauView',           component: prodHydrauView },

    { path: '/conso',                   name: 'consoView',             component: consoView },

    { path: '/conclusion',                   name: 'conclusionView',             component: conclusionView },
  ],

  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
})

export default router
