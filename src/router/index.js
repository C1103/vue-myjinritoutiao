import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
Router.prototype.animate = 0
const _import_ = file => () => import('../views/' + file + '.vue')


/*
    slide: 页面切换动画
    login: 是否需要登陆

 */
export const constantRouterMap = [
    { 
        path: '/', 
        name: '首页', 
        meta: { page: true},
        component: _import_('Layout/index'),
        redirect: '/home',
        children: [
            { path: 'home', component: _import_('Home/index'), name: '首页' }
        ]
    },
    { 
        path: '/video',  
        meta: { page: true},
        component: _import_('Layout/index'),
        redirect: '/',
        children: [
            { path: '/', component: _import_('Video/index'), name: '视频' }
        ]
    },
    { 
        path: '/headline',  
        meta: { page: true},
        component: _import_('Layout/index'),
        redirect: '/',
        children: [
            { path: '/', component: _import_('Headline/index'), name: '微头条' }
        ]
    },
    { 
        path: '/account', 
        meta: { page: true}, 
        component: _import_('Account/index'),
        name: '个人中心'
    }
]
export const asyncRouterMap = [

]

export const router = new Router({
    // mode: 'history',
    routes: constantRouterMap
})

