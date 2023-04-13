// 该文件专门用于创建整个应用的路由器
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

Vue.use(VueRouter)

// 创建一个路由器
const router = new VueRouter({
    mode:'hash',
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
            meta: {isAuth: true, title: '关于' }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    // 独享路由守卫只有前置无后置
                    beforeEnter: (to, from, next) => {
                        console.log('独享路由守卫', to, from);
                        if (to.meta.isAuth) { // 判断是否需要鉴权
                            if (localStorage.getItem('school') === 'atguigu') {
                                next()
                            } else {
                                alert('学校名称不对，无权查看！')
                            }
                        } else {
                            next()
                        }
                    }
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            // 占位
                            path: 'detail/:id/:title',
                            name: 'detail',
                            component: Detail,
                            meta: { isAuth: true, title: '详情' },
                            // props 的第一种写法，值为对象，
                            // 该对象中的所有 key-value 都会以 props 的形式传给 Detail组件
                            // props:{a:1,b:'hello'}

                            // props 的第二种写法，值为布尔值，
                            // 若布尔值为真，会把该路由组件收到的所有 praams 参数，以props的形式传给Detail组件
                            // props:true,

                            // props 的第二种写法，值为函数，
                            props($router) { // 此处可以使用解构赋值
                                return {
                                    id: $router.params.id,
                                    title: $router.params.title,
                                }
                            }
                        },
                    ]
                }
            ]
        },
    ]
})
// 全局前置路由守卫
// 初始化的时候被调用、在每次路由切换之前都会调用一个函数
/* router.beforeEach((to, from, next) => {
    console.log('前置路由守卫', to, from);
    if (to.meta.isAuth) { // 判断是否需要鉴权
        if (localStorage.getItem('school') === 'atguigu') {
            next()
        } else {
            alert('学校名称不对，无权查看！')
        }
    } else {
        next()
    }
}) */

// 全局后置路由守卫
// 初始化的时候被调用、在每次路由切换之后都会调用一个函数
router.afterEach((to, from) => {
    document.title = to.meta.title || '测试'
    console.log('后置路由守卫', to, from);
})


// 暴露
export default router