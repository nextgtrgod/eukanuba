<template>
<div id="modal" :class="{ visible }">
	<div class="overlay" @click="close"/>
	<div class="inner">
		<button class="close" @click="close">
			<svg fill="#FFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
				<path d="M14 1.4L12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7 14 1.4z"/>
				<path fill="none" d="M-5-5h24v24H-5V-5z"/>
			</svg>
		</button>
		<h3>поделись своим результатом с друзьями:</h3>
		<div class="shares visible">
			<a :href='shareFb' @click='shareClick("fb")' target='_blank'>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.3 412">
					<path d="M63.4 21.2C79.4 5.9 102.3.8 123.8.1c22.8-.2 45.6-.1 68.4-.1.1 24.1.1 48.1 0 72.2H148c-9.3-.6-18.9 6.5-20.6 15.8-.2 16.1-.1 32.2-.1 48.3 21.6.1 43.2 0 64.8.1-1.6 23.3-4.5 46.5-7.9 69.5-19.1.2-38.2 0-57.3.1-.2 68.7.1 137.3-.1 206-28.4.1-56.7-.1-85.1.1-.5-68.7 0-137.4-.3-206.1-13.8-.1-27.7.1-41.5-.1.1-23.1 0-46.2 0-69.2 13.8-.2 27.7 0 41.5-.1.4-22.4-.4-44.9.4-67.3 1.5-17.9 8.3-35.8 21.6-48.1z"/>
				</svg>
			</a>
			<a :href='shareOk' @click='shareClick("ok")' target='_blank'>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.3 95.5">
					<path d="M24 67.3c-7.4-.8-14.1-2.6-19.8-7.1-.7-.6-1.4-1.1-2.1-1.7-2.5-2.4-2.8-5.2-.8-8 1.7-2.4 4.5-3.1 7.5-1.7.6.3 1.1.6 1.6 1 10.6 7.3 25.3 7.5 36 .3 1.1-.8 2.2-1.5 3.5-1.8 2.6-.7 4.9.3 6.3 2.5 1.6 2.5 1.5 5-.4 7-3 3-6.5 5.2-10.5 6.8-3.7 1.4-7.8 2.2-11.9 2.7.6.7.9 1 1.3 1.4 5.5 5.5 11 11 16.5 16.6 1.9 1.9 2.3 4.2 1.2 6.4-1.1 2.4-3.6 4-6.1 3.8-1.6-.1-2.8-.9-3.9-2C38.3 89.3 34 85.2 30 81c-1.2-1.2-1.8-1-2.8.1-4.2 4.3-8.4 8.5-12.7 12.7-1.9 1.9-4.2 2.2-6.4 1.2-2.4-1.1-3.9-3.6-3.7-6 .1-1.6.9-2.9 2-4l16.3-16.3c.4-.5.7-.9 1.3-1.4z"/>
					<path d="M28.5 48.3c-13.2 0-24-11-24-24.2C4.6 10.7 15.4 0 28.8 0s24.1 11 24 24.5c-.1 13.2-11 23.9-24.3 23.8zm12-24.2c0-6.6-5.3-11.8-11.8-11.8-6.6 0-11.9 5.3-11.8 11.9 0 6.5 5.3 11.7 11.9 11.7 6.5.1 11.7-5.2 11.7-11.8z"/>
				</svg>
			</a>
			<a :href='shareVk' @click='shareClick("vk")' target='_blank'>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 548.4 312.9">
					<path d="M545.5 282.5c-.7-1.4-1.3-2.6-1.9-3.6-9.5-17.1-27.7-38.2-54.5-63.1l-.6-.6-.3-.3-.3-.3h-.3c-12.2-11.6-19.9-19.4-23.1-23.4-5.9-7.6-7.2-15.3-4-23.1 2.3-5.9 10.9-18.4 25.7-37.4 7.8-10.1 14-18.2 18.6-24.3 32.9-43.8 47.2-71.8 42.8-83.9l-1.7-2.8c-1.1-1.7-4.1-3.3-8.8-4.7-4.8-1.4-10.9-1.7-18.3-.7l-82.2.6c-1.3-.5-3.2-.4-5.7.1-2.5.6-3.7.9-3.7.9l-1.4.7-1.1.9c-1 .6-2 1.6-3.1 3s-2.1 3.1-2.8 5c-9 23-19.1 44.4-30.6 64.2-7 11.8-13.5 22-19.4 30.7-5.9 8.7-10.8 15-14.8 19.1-4 4.1-7.6 7.4-10.9 9.8-3.2 2.5-5.7 3.5-7.4 3.1-1.7-.4-3.3-.8-4.9-1.1-2.7-1.7-4.8-4-6.4-7-1.6-3-2.7-6.7-3.3-11.1-.6-4.5-.9-8.3-1-11.6-.1-3.2 0-7.8.1-13.7.2-5.9.3-9.9.3-12 0-7.2.1-15.1.4-23.6.3-8.5.5-15.2.7-20.1.2-4.9.3-10.2.3-15.7s-.3-9.8-1-13c-.7-3.1-1.7-6.2-3-9.1-1.3-2.9-3.3-5.2-5.9-6.9-2.6-1.6-5.8-2.9-9.6-3.9-10.1-2.3-22.9-3.5-38.5-3.7-35.4-.4-58.1 1.9-68.2 6.9-4 2.1-7.6 4.9-10.8 8.6-3.4 4.2-3.9 6.5-1.4 6.9 11.4 1.7 19.5 5.8 24.3 12.3l1.7 3.4c1.3 2.5 2.7 6.9 4 13.1 1.3 6.3 2.2 13.2 2.6 20.8.9 13.9.9 25.8 0 35.7-1 9.9-1.9 17.6-2.7 23.1-.9 5.5-2.1 10-3.9 13.4-1.7 3.4-2.9 5.5-3.4 6.3-.6.8-1 1.2-1.4 1.4-2.5.9-5 1.4-7.7 1.4s-5.9-1.3-9.7-4c-3.8-2.7-7.8-6.3-11.8-11-4.1-4.7-8.7-11.2-13.9-19.6-5.1-8.4-10.5-18.3-16-29.7l-4.6-8.3c-2.9-5.3-6.8-13.1-11.7-23.3-5-10.2-9.3-20-13.1-29.6-1.5-4-3.8-7-6.9-9.1l-1.4-.9c-.9-.8-2.5-1.6-4.6-2.4-2.1-.9-4.3-1.5-6.6-1.9l-78.2.6c-8 0-13.4 1.8-16.3 5.4l-1.1 1.7C.3 22.4 0 23.9 0 26c0 2.1.6 4.7 1.7 7.7C13.1 60.6 25.6 86.4 39 111.4s25.1 45 35 60.2c9.9 15.2 20 29.6 30.3 43.1s17.1 22.2 20.4 26c3.3 3.8 6 6.7 7.9 8.6l7.1 6.9c4.6 4.6 11.3 10 20.1 16.4 8.9 6.4 18.7 12.7 29.4 18.9 10.8 6.2 23.3 11.2 37.5 15.1 14.3 3.9 28.2 5.5 41.7 4.7h32.8c6.7-.6 11.7-2.7 15.1-6.3l1.1-1.4c.8-1.1 1.5-2.9 2.1-5.3.7-2.4 1-5 1-7.9-.2-8.2.4-15.6 1.9-22.1 1.4-6.6 3-11.5 4.9-14.8 1.8-3.3 3.9-6.1 6.1-8.4 2.3-2.3 3.9-3.7 4.9-4.1.9-.5 1.7-.8 2.3-1 4.6-1.5 9.9 0 16.1 4.4 6.2 4.5 12 10 17.4 16.6 5.4 6.6 11.9 13.9 19.6 22.1 7.6 8.2 14.3 14.3 20 18.3l5.7 3.4c3.8 2.3 8.8 4.4 14.9 6.3 6.1 1.9 11.4 2.4 16 1.4l73.1-1.1c7.2 0 12.9-1.2 16.8-3.6 4-2.4 6.4-5 7.1-7.9.8-2.9.8-6.1.1-9.7-.6-3.7-1.3-6.2-1.9-7.7z"/>
				</svg>
			</a>
			<a :href='shareTw' @click='shareClick("tw")' target='_blank'>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 416.1">
					<path d="M512 49.3c-18.8 8.4-39.1 14-60.3 16.5 21.7-13 38.3-33.6 46.2-58.1-20.3 12-42.8 20.8-66.7 25.5C412 12.8 384.7 0 354.5 0c-58 0-105 47-105 105 0 8.2.9 16.2 2.7 23.9-87.3-4.3-164.7-46.1-216.6-109.7-9 15.5-14.2 33.6-14.2 52.8 0 36.4 18.5 68.6 46.7 87.4-17.2-.5-33.4-5.3-47.6-13.1v1.3c0 50.9 36.2 93.3 84.3 103-8.8 2.4-18.1 3.7-27.7 3.7-6.8 0-13.3-.7-19.8-1.9 13.4 41.7 52.2 72.1 98.1 72.9-35.9 28.2-81.2 45-130.5 45-8.5 0-16.8-.5-25.1-1.5 46.5 29.8 101.7 47.2 161 47.2 193.2 0 298.9-160.1 298.9-298.9 0-4.6-.1-9.1-.3-13.6 20.7-14.7 38.5-33.2 52.6-54.2z"/>
				</svg>
			</a>
			<a :href='shareTg' @click='shareClick("tg")' target='_blank'>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 261.2">
					<path d="M5.3 125.2L74.4 151l26.8 86c1.7 5.5 8.5 7.5 12.9 3.9l38.5-31.4c4-3.3 9.8-3.5 14-.4l69.5 50.5c4.8 3.5 11.6.9 12.8-4.9L299.8 9.8c1.3-6.3-4.9-11.6-10.9-9.3L5.2 110c-7 2.7-6.9 12.6.1 15.2z"/>
				</svg>
			</a>
		</div>
	</div>
</div>
</template>


<script>
import Events from '@/events'
import shareMixin from '@/utils/shares'

export default {
	name: 'Modal',
	mixins: [
		shareMixin
	],
	data() {
		return {
			visible: false,
		}
	},
	created() {
		Events.$on('modal-open', this.open)
	},
	methods: {
		open() {
			this.visible = true
		},
		close() {
			this.visible = false
			Events.$emit('modal-close')
		}
	},
}
</script>


<style lang="less" scoped>
@import '../styles/variables.less';
@import '../styles/animations.less';
@import '../styles/shares.less';

#modal {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: fade(#000, 50%);
	opacity: 0;
	transition: opacity .3s;
	pointer-events: none;
	text-align: center;

	&.visible {
		opacity: 1;
		pointer-events: all;
	}
}

.overlay {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}

.inner {
	position: relative;
	width: calc(~'100% - 40px');
	max-width: 575px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 50px 20px;
	padding-top: 50px;
	background-color: @color-main;
	background-image: url('../assets/images/modal-bg.jpg');
	background-size: cover;
	background-position: center;
	color: #FFF;
	box-sizing: border-box;

	@media (min-width: 720px) {
		width: 100%;
		height: 100%;
		max-width: 575px;
		max-height: 560px;
	}
}

.close {
	position: absolute;
	top: 15px;
	right: 15px;
	width: 15px;
	height: 15px;

	@media (min-width: 720px) {
		top: 20px;
		right: 20px;
		width: 20px;
		height: 20px;
	}
}

h3 {
	margin: 0;
	margin-bottom: 30px;
	text-transform: uppercase;
	font-size: 24px;
	font-family: @font-roboto;

	@media (min-width: 720px) {
		font-size: 32px;
		margin-bottom: 45px;
	}
}

.shares {
	position: relative;
	left: 0;
	bottom: 0;

	a {
		height: 25px;
		pointer-events: inherit !important;
		transition: transform .2s;
		transition-delay: 0s !important;

		&:hover {
			transform: scale(1.1)
		}
	}
}

</style>
