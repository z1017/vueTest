import Vue from 'vue'
import App from './App.vue'

// 按需引入
import { Button, Row, DatePicker } from 'element-ui';

Vue.component('atguigu-button', Button,);
Vue.component('atguigu-row', Row,);
Vue.component('atguigu-date-picker', DatePicker,);

/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

/* // 引入 ElementUI 组件库
import ElementUI from 'element-ui';
// 引入 ElementUI 全部样式
import 'element-ui/lib/theme-chalk/index.css'; */

Vue.config.productionTip = false

// 应用 ElementUI
// Vue.use(ElementUI)

new Vue({
    el: '#app',
    render: h => h(App),
})
