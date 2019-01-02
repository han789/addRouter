import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/HelloWorld'
import NotFound from '@/views/error-page/400'
Vue.use(Router)
let constantRouterMap = [{
    path: '/login',
    component: Login,
    name: 'login',
    meta: {
        title: '登录',
        icon: 'dashboard'
    }
}, {
    path: '/error',
    component: NotFound,
    name: 'error',
    meta: {
        title: '不存在',
        icon: 'dashboard'
    }
}]

// export const constantRouterMap = [
//   {
//     path: '',
//     component: Layout,
//     redirect: 'dashboard',
//     children: [{
//       path: 'dashboard',
//       component: _import('dashboard/index'),
//       meta: { title: '首页', icon: 'dashboard'}
//     }]
//   },

//   {
//     path: '/example',
//     component: Layout,
//     redirect: '/example/table',
//     name: 'Example',
//     meta: { title: '案例', icon: 'example' },
//     children: [
//       {
//         path: 'table',
//         name: 'Table',
//       component: _import('table/index'),

//         meta: { title: '表格', icon: 'table' }
//       },
//       {
//         path: 'tree',
//         name: 'Tree',
//       component: _import('tree/index'),

//         meta: { title: '树形菜单', icon: 'tree' }
//       }
//     ]
//   },

//   {
//     path: '/form',
//     component: Layout,
//     children: [
//       {
//         path: 'index',
//         name: 'Form',
//       component: _import('form/index'),
//         meta: { title: '表单', icon: 'form' }
//       }
//     ]
//   },

//   { path: '*', redirect: '/404', hidden: true }
// ]


export default new Router({
    routes: constantRouterMap

})