import Vue from 'vue'
import App from './App.vue'

import { hunhe, hunhe1 } from './mixin'

Vue.config.productionTip = false

// 全局混合
Vue.mixin(hunhe)
Vue.mixin(hunhe1)

new Vue({
    el: '#app',
    render: h => h(App)
})
