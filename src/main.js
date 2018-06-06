import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false

// device width/type
Vue.prototype.device = 'desktop'

const checkDevice = () => {
	Vue.prototype.device = (window.innerWidth >= 960) ? 'desktop' : 'mobile'
}
checkDevice()
window.addEventListener('resize', () => checkDevice())

new Vue({
	el: '#app',
	store,
	router,
	components: {
		App
	},
	template: '<App/>'
})
