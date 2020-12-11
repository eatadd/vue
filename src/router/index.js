import {createRouter, createWebHistory} from 'vue-router'
// import User from "../components/User";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/Home.vue'),
        children: [
            {
                path: '',
                component: () => import('../components/HomeNews.vue')
            },
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
        ],
        meta: {
            title: '首页'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../components/About.vue'),
        meta: {
            title: '关于'
        }
    },
    {
        path: '/user?:id&:username',
        name: 'User',
        component: () => import('../components/User.vue'),
        meta: {
            title: '用户'
        },
        beforeEnter: (to, from, next) => {
            let login = true;
            if(login){
                next()
            }else {
                console.log('请登录');
            }
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
//前置守卫
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title;
    // console.log('前置钩子显示:title'+ to.matched[0].meta.title);
    next();
})
//后置钩子
router.afterEach((to, from) => {
    // console.log('后置钩子');
})

export default router
