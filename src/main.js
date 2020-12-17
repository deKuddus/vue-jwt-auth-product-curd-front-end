import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/dist/js/adminlte.min.js'
import 'admin-lte/plugins/fontawesome-free/css/all.min.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from 'axios'
require('@/store/subscriber')
axios.defaults.baseURL= 'http://127.0.0.1:8000/api/v1'

store.dispatch('auth/attemptLogin',localStorage.getItem('token')).then(()=>{

    const app = createApp(App)
 
    app.use(VueSweetalert2);
    app.use(store).use(router)
    app.mount('#app');
    // createApp(App).use(store).use(router).mount('#app')
})
