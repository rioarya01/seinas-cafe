import { createApp } from 'vue'
import './assets/css/main.css'
import App from './App.vue'
import router from '@/router'
import 'bootstrap/dist/css/bootstrap.min.css' 
import  bootstrap from 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"


createApp(App)
.use(router)
.use(bootstrap)
.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
})
.mount('#app')
