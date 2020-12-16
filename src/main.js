import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/dist/js/adminlte.min.js'
import axios from 'axios'
require('@/store/subscriber')
axios.defaults.baseURL= 'http://127.0.0.1:8000/api/v1'

store.dispatch('auth/attemptLogin',localStorage.getItem('token')).then(()=>{

    createApp(App).use(store).use(router).mount('#app')
})
