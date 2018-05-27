<script>
import Events from './events'

export default {
	name: 'App',
	created() {
		ga('send', 'event', 'page', 'loaded')
	}
}
</script>


<template>
	<div id='app'>
		<router-view/>
	</div>
</template>


<style lang='less'>
@import './styles/normalize.less';
@import './styles/variables.less';

#app {
	max-width: 100%;
	font-family: @font-gotham;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	overflow: hidden;
}

</style>
