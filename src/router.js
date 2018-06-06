import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store'
import MainPage from '@/components'
import InterviewPage from '@/components/Interview'
import ResultPage from '@/components/Result'
import PlacesPage from '@/components/Places'

import keysOf from '@/utils/keysOf'

Vue.use(Router)

let routes = [
	{
		path: '/',
		name: 'Main',
		component: MainPage
	},
	{
		path: '/interview',
		name: 'Interview',
		component: InterviewPage
	},
	{
		path: '/result',
		name: 'Result',
		component: ResultPage
	},
	{
		path: '/places',
		name: 'Places',
		component: PlacesPage
	}
]

const router = new Router({
	routes,
	mode: 'history'
})

router.beforeEach(async(to, from, next) => {

	let selected = Store.state.selected

	if (to.name.toLowerCase() === 'result') {
		if (keysOf(selected).findIndex(key => selected[key] === '') > -1) {
			return next('/')
		}
	}

	return next()
})

export default router
