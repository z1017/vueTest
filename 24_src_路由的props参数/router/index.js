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
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            // 占位
                            path: 'detail/:id/:title',
                            name: 'detail',
                            component: Detail,
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

// 暴露
export default router