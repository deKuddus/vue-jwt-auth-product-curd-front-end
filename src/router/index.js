import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'


const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/components/auth/Login.vue'),
    beforeEnter:(to, from, next) => {
      if(store.getters['auth/authenticated']){
        return next({
            name:'create'
        })
      }
      next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/auth/Login.vue'),
    beforeEnter:(to, from, next) => {
      if(store.getters['auth/authenticated']){
        return next({
            name:'create'
        })
      }
      next()
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/components/auth/Register.vue'),
    beforeEnter:(to, from, next) => {
      if(store.getters['auth/authenticated']){
        return next({
            name:'product'
        })
      }
      next()
    }
  },
  {
    path: '/product/',
    name: 'product',
    component: () => import('@/components/product/Index.vue'),
    beforeEnter:(to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
            name:'login'
        })
      }
      next()
    }
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('@/components/product/Create.vue'),
    beforeEnter:(to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
            name:'login'
        })
      }
      next()
    }
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('@/components/product/Edit.vue'),
    beforeEnter:(to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
            name:'login'
        })
      }
      next()
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
