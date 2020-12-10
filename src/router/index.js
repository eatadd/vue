import {createRouter, createWebHistory} from 'vue-router'
// import User from "../components/User";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/Home.vue'),
        children: [
            {
                path: '/home/news',
                name: 'HomeNews',
                component: () => import('../components/HomeNews.vue')
            },
            {
                path: '/home/message',
                name: 'HomeMessage',
                component: () => import('../components/HomeMessage.vue')
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('../components/User.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
