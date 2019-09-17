import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('@/views/Home')), 'chunkname1')
const Homechild = r => require.ensure([], () => r(require('@/views/Homechild')), 'chunkname2')
const Package = r => require.ensure([], () => r(require('@/views/Package')), 'chunkname3')

Vue.use(Router)

export default new Router({
    //   mode: 'history',
    //   base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {//首页
                path: '/',
                name: 'homechild',
                component: Homechild
            },
            {//背包
                path: '/package',
                name: 'package',
                component: Package
            }
        ]
    }]
})