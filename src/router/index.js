import {createWebHistory, createRouter} from 'vue-router'
import Login from '@/components/Login.vue'
import TheWelcome from '@/components/TheWelcome.vue'


const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },

    {
        path: '/home',
        name: 'TheWelcome',
        component: TheWelcome
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;