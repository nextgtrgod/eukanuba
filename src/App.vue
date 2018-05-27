<script>
import Events from './events'
import shareMixin from '@/utils/shares'

export default {
	name: 'App',
	mixins: [
		shareMixin
	],
	data() {
		return {
			sharesVisible: false,
		}
	},
	created() {
		ga('send', 'event', 'page', 'loaded')
	},
	methods: {
		toggleShares() {
			this.sharesVisible = !this.sharesVisible
		},
	},
}
</script>


<template>
	<div id='app'>
		<svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.3 18.2">
			<path fill="#FFF" d="M3.5 10.3c0-.5.3-.9 1-.9h4.2v2.1H4.5c-.8 0-1-.5-1-.8v-.4zm8.6-3.8c0-1.2-1-1.8-2.2-1.8H.6v1.7h7.1c.5 0 1 .2 1 .8v.3H1.9C.7 7.5 0 8.4 0 9.3v2.1c0 .8.6 1.9 1.9 1.9h10.2V6.5zm60.6 3.8c0-.5.3-.9 1-.9h4.2v2.1h-4.2c-.8 0-1-.5-1-.8v-.4zm8.6-3.8c0-1.2-1-1.8-2.2-1.8h-9.4v1.7h7.2c.5 0 1 .2 1 .8v.3h-6.8c-1.2 0-1.9.9-1.9 1.8v2.1c0 .8.6 1.9 1.9 1.9h10.2V6.5zm-38 2.6v4.4h3.6V4.8h-3.6l-5.1 5.6V4.8h-3.6v8.6h3.6l5.1-5.7v1.4zm24.3-4.3h-3.5v6.8h-4.2V4.8h-3.5v6.8h-4.2V4.8h-3.6v8.6h19zm-36.7 0h-5.7V0h-3.6v4.8h-5.7c-1.2 0-2.2.5-2.2 1.8v5.1c0 1.2 1 1.9 2.2 1.9h5.7v4.6h3.6v-4.8h5.7c1.2 0 2.2-.6 2.2-1.9V6.4C33 5.3 32 4.8 30.9 4.8zm-9.3 6.8h-3.4c-.6 0-1-.3-1-.9V7.5c0-.6.4-.9 1-.9h3.4v5zm8-.9c0 .6-.4.9-1 .9h-3.4V6.5h3.4c.6 0 1 .3 1 .9v3.3z" class="st0"/>
		</svg>
		<button class="toggle-shares" @click="toggleShares">
			<svg x="0px" y="0px" viewBox="0 0 26 26">
				<path stroke="#FFF" stroke-width="2" d="M21.4,5.8c-1-1-2.4-1.6-3.9-1.6s-2.9,0.6-3.9,1.6L13,6.4l-0.6-0.6c-1-1-2.4-1.6-3.9-1.6c-1.5,0-2.9,0.6-3.9,1.6 C3.6,6.9,3,8.3,3,9.7c0,1.5,0.6,2.9,1.6,3.9l8,8c0.1,0.1,0.3,0.2,0.4,0.2c0.1,0,0.3-0.1,0.4-0.2l8-7.9c1-1,1.6-2.4,1.6-3.9 C23,8.3,22.4,6.9,21.4,5.8L21.4,5.8z"/>
			</svg>
		</button>
		<div class="shares" :class="{ visible: sharesVisible }">
			<a :href='shareTg' @click='shareClick("tg")' target='_blank'><img src="./assets/images/shares/telegram.svg"></a>
			<a :href='shareFb' @click='shareClick("fb")' target='_blank'><img src="./assets/images/shares/facebook.svg"></a>
			<a :href='shareTw' @click='shareClick("tw")' target='_blank'><img src="./assets/images/shares/twitter.svg"></a>
			<a :href='shareVk' @click='shareClick("vk")' target='_blank'><img src="./assets/images/shares/vk.svg"></a>
		</div>
		<router-view/>
	</div>
</template>


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

#logo {
	position: absolute;
	top: 40px;
	left: 40px;
	width: 110px;
	opacity: 0;
	animation: fade-in .5s forwards;
	animation-delay: 1.8s;
	z-index: 1;
}


</style>
