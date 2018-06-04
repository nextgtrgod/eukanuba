import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import Events from '@/events'

import options from '@/data/options'

Vue.use(Vuex)

let selected = {}

Object.keys(options).map(key => selected[key] = '')

const state = {
	selected,
}

const store = new Vuex.Store({
	strict: false,
	state,
	getters,
	actions,
	mutations,
})

store.watch(
	state => state.selected,
	() => Events.$emit('state-update', { state }),
	{ deep: true }
)

export default store
