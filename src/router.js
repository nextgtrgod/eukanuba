import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components'
import InterviewPage from '@/components/Interview'
import ResultPage from '@/components/Result'

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
	}
]

export default new Router({
	routes,
	mode: 'history',
})
