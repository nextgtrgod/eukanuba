import 'babel-polyfill'

import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false

// device width/type
Vue.prototype.device = 'desktop'
Vue.prototype.device = (window.innerWidth >= 960) ? 'desktop' : 'mobile'

new Vue({
	el: '#app',
	store,
	router,
	components: {
		App
	},
	template: '<App/>'
})
