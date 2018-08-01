import 'normalize.css'
import './reset.css'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { globals } from './config'
import store from './store'

Vue.config.productionTip = false

// Assign global instance properties
Object.keys(globals).forEach((key) => {
  // Note: Vue will throw a warning if you attempt to override a reserved instance property,
  //       a list of these can be found here: https://vuejs.org/v2/api/#Instance-Properties.
  Vue.prototype[`$${key}`] = { ...globals[key] }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  store,
  template: '<App/>'
})
