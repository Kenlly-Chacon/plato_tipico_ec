import { createRouter, createWebHistory } from 'vue-router';

import NotFound from "@/components/NotFound.vue";
import Home from "@/views/Home.vue";
import PlatillosFavoritos from "@/pages/PlatillosFavoritos.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                title: 'Inicio - Get Fit', // Puedes personalizar el título aquí
            },
        },
        {
            path: '/:pathMatch(.*)*', // Coincide con todas las rutas no definidas
            name: 'NotFound',
            component: NotFound,
        },
        {
            path: '/platillos',
            name: 'Platillos',
            component: PlatillosFavoritos,
        },
    ],
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Get Fit';
    next();
});

export default router;
