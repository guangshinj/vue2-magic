import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/slot',
    name: 'Slot',
    component: () => import(/* webpackChunkName: "slot" */ '../views/Slot.vue'),
    children:[
      {
        path:'named-slot',
        alias:'',
        component: () => import('@/components/slot/NamedSlot.vue'),
      },
      {
        path:'scoped-slot',
        component: () => import('@/components/slot/ScopedSlot.vue'),
      },
    ]
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import(/* webpackChunkName: "vuex" */ '../views/Vuex.vue'),
    children:[
      {
        path:'vuex-using',
        alias:'',
        component: () => import('@/components/vuex/VuexUsing.vue'),
      }
    ]
  },
  {
    path: '/router',
    name: 'Router',
    component: () => import(/* webpackChunkName: "router" */ '../views/Router.vue'),
    children:[
      {
        path:'router-hook',
        alias:'',
        component: () => import('@/components/router/RouterHook.vue'),
      },
      {
        path:'router-params',
        component: () => import('@/components/router/RouterParams.vue'),
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
