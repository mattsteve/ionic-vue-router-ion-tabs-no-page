import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/:catchAll(.*)',
        redirect: {
            name: 'page1'
        }
    },
    {
        path: '/page1',
        name: 'page1',
        meta: {
            title: 'page1'
        },
        component: () => import('../views/page1.vue')
    },
    {
        path: '/page2',
        name: 'page2',
        meta: {
            title: 'page2'
        },
        component: () => import('../views/page2.vue')
    },
    {
        path: '/page3',
        name: 'page3',
        meta: {
            title: 'page3'
        },
        component: () => import('../views/page3.vue')
    }
];

export default routes;
