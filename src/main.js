import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap";
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
axios.defaults.baseURL = 'https://localhost:8000/'

var token = localStorage.getItem('token');
if(token)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

createApp(App).use(router).use(VueAxios, axios).mount('#app')
