<template>
	<div id='app'>
		<router-view/>
		<modal/>
	</div>
</template>


<script>
import Events from './events'
import Modal from '@/components/Modal'

export default {
	name: 'App',
	components: {
		Modal,
	},
	created() {
		window.addEventListener('resize', this.checkDevice)
	},
	methods: {
		checkDevice() {
			this.device = (window.innerWidth >= 960) ? 'desktop' : 'mobile'
		}
	},
	watch: {
		'$route'(to, from) {
			if (to.name.toLowerCase() === 'result') {
				this.$el.scrollTop = 0
				Events.$emit('modal-open')
			}

			ga('send', 'event', 'link', to.name.toLowerCase())
		}
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.checkDevice)
	}
}
</script>


<style lang='less'>
@import './styles/normalize.less';
@import './styles/variables.less';
@import './styles/animations.less';
@import './styles/shares.less';

#app {
	max-width: 100%;
	height: 100%;
	font-family: @font-gotham;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	overflow: auto;
}

</style>
