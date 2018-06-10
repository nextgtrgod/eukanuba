<template>
	<div id='app'>
		<router-view/>
	</div>
</template>


<script>
import Events from './events'

export default {
	name: 'App',
	created() {
		ga('send', 'event', 'page', 'loaded')
	},
	watch: {
		'$route'(to, from) {
			ga('send', 'event', 'link', to.name.toLowerCase())
		}
	},
}
</script>


<style lang='less'>
@import './styles/normalize.less';
@import './styles/variables.less';
@import './styles/animations.less';
@import './styles/shares.less';

#app {
	max-width: 100%;
	font-family: @font-gotham;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	overflow: hidden;
}

</style>
