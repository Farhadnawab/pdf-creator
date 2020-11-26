import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/assets/css/style.css'
import Autocomplete from 'v-autocomplete'
import '@/assets/css/v-autocomplete.css'

Vue.use(Autocomplete)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
