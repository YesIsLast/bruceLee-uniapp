import Vue from 'vue'
import App from './App'

// 引入组件库
import uView from "uview-ui";
Vue.use(uView);
// 注册全局混入
import mixin from "mixin/mixin.js"
Vue.mixin(mixin)
// 注册全局通用方法
import utils from "common/utils.js"
Vue.prototype.$utils = utils

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
