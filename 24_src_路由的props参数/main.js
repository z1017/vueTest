import Vue from 'vue'
import App from './App.vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router/index'
Vue.config.productionTip = false
// 应用插件
Vue.use(VueRouter)

new Vue({
    el: '#app',
    // eslint-disable-next-line no-undef
    router,
    render: h => h(App),
})
