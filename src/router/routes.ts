import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/:catchAll(.*)',
        redirect: {
            name: 'login'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('../views/main.vue'),
        redirect: '/main/home',
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('../views/home.vue')
            },
            {
                path: 'feature1',
                name: 'feature1',
                component: () => import('../views/feature1.vue')
            }
        ]
    }
];

export default routes;
