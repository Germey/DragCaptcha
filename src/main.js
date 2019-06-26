import Vue from 'vue'
import App from './App.vue'
import VueDragDrop from 'vue-drag-drop'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueDragDrop)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
