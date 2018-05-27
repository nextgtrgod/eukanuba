import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components'

Vue.use(Router)

let routes = [
	{
		path: '/',
		name: 'Main',
		component: Page
	}
]

export default new Router({
	routes,
	mode: 'history',
})
