<template>
<main>
	<div class="inner">
		<div v-if="device === 'desktop'" class="video-wrap">
			<video src="../assets/bg.mp4" autoplay loop muted/>
		</div>

		<a
			id="logo-afisha"
			@click="linkClick('https://www.afisha.ru/')"
			href="https://www.afisha.ru/"
			target="_blank"
		>
			<img src="../assets/images/logo-afisha.svg">
		</a>

		<a
			id="logo-eukanuba"
			@click="linkClick('https://www.eukanuba.ru/product/')"
			href="https://www.eukanuba.ru/product/"
			target="_blank"
		>
			<img src="../assets/images/logo-eukanuba.svg">
		</a>

		<div class="top-links">
			<router-link to="/interview">Программа тренировок</router-link>
			<a
				href="https://daily.afisha.ru/cities/9179-hochetsya-poyti-vmeste-v-basseyn-vladelcy-sobak-o-sovmestnoy-aktivnoy-zhizni-v-gorode/?utm_source=lending&utm_medium=result&utm_campaign=eukanuba"
				target="_blank"
				@click="linkClick('https://daily.afisha.ru/cities/9179-hochetsya-poyti-vmeste-v-basseyn-vladelcy-sobak-o-sovmestnoy-aktivnoy-zhizni-v-gorode/?utm_source=lending&utm_medium=result&utm_campaign=eukanuba')">
				Блогеры
			</a>
			<router-link to="/places">Локации</router-link>
		</div>

		<img class="title" src="../assets/images/main-page-title.svg">
		<p v-if="device === 'desktop'" v-html="'Любую прогулку c&nbsp;собакой можно превратить в&nbsp;отличную тренировку.<br>Ведь ваша собака&nbsp;&mdash; это ваш персональный тренер, который своей<br>энергией и&nbsp;силой поможет вам тренироваться каждый день.<br>А&nbsp;мы&nbsp;расскажем как и&nbsp;где это лучше всего делать, и&nbsp;как поддержать вашего питомца на&nbsp;пике формы!'"/>
		<p v-else v-html="'Любую прогулку c&nbsp;собакой можно превратить в&nbsp;отличную тренировку. Ведь ваша собака&nbsp;&mdash; это ваш персональный тренер, который своей энергией и&nbsp;силой поможет вам тренироваться каждый день. А&nbsp;мы&nbsp;расскажем как и&nbsp;где это лучше всего делать, и&nbsp;как поддержать вашего питомца на&nbsp;пике формы!'"/>

		<router-link to="/interview" class="such-beautiful-button">Подобрать программу</router-link>

		<!-- <div v-if="device === 'mobile'" class="js_slider" ref="carousel">

			<ul class="js_dots" ref="js_dots">
				<li/>
				<li/>
				<li/>
			</ul>

			<div class="js_frame">
				<ul class="js_slides">
					<li class="js_slide">
						<span class="img-wrap">
							<img src="../assets/images/card-2.svg">
						</span>
						<span class="text">
							Подберите подходящие виды активности для<br>вашей собаки и вас
							<router-link to="/interview">Подобрать</router-link>
						</span>
					</li>
					<li class="js_slide">
						<span class="img-wrap">
							<img src="../assets/images/card-3.svg">
						</span>
						<span class="text">
							Выберите места для<br>энергичных прогулок
							<router-link to="/places">Узнать</router-link>
						</span>
					</li>
					<li class="js_slide">
						<span class="img-wrap">
							<img src="../assets/images/card-4.svg">
						</span>
						<span class="text">
							Как популярные блогеры активно проводят время со своими питомцами
							<a
								href="https://daily.afisha.ru/cities/9179-hochetsya-poyti-vmeste-v-basseyn-vladelcy-sobak-o-sovmestnoy-aktivnoy-zhizni-v-gorode/?utm_source=lending&utm_medium=result&utm_campaign=eukanuba"
								target="_blank"
								@click="linkClick('https://daily.afisha.ru/cities/9179-hochetsya-poyti-vmeste-v-basseyn-vladelcy-sobak-o-sovmestnoy-aktivnoy-zhizni-v-gorode/?utm_source=lending&utm_medium=result&utm_campaign=eukanuba')"
							>
								Узнать
							</a>
						</span>
					</li>
				</ul>
			</div>
		</div> -->

		<!-- <div v-if="device === 'desktop'" class="cards">
			<router-link to="/interview">
				<span class="img-wrap">
					<img src="../assets/images/card-2.svg">
				</span>
				<span class="text">Подберите подходящие виды активности для<br>вашей собаки и вас</span>
				<span class="link">Подобрать</span>
			</router-link>
			<router-link to="/places">
				<span class="img-wrap">
					<img src="../assets/images/card-3.svg">
				</span>
				<span class="text">Выберите места для<br>энергичных прогулок</span>
				<span class="link">Выбрать</span>
			</router-link>
			<a href="https://daily.afisha.ru/cities/9179-hochetsya-poyti-vmeste-v-basseyn-vladelcy-sobak-o-sovmestnoy-aktivnoy-zhizni-v-gorode/?utm_source=lending&utm_medium=result&utm_campaign=eukanuba" target="_blank" @click="linkClick('https://daily.afisha.ru/cities/9179-hochetsya-poyti-vmeste-v-basseyn-vladelcy-sobak-o-sovmestnoy-aktivnoy-zhizni-v-gorode/?utm_source=lending&utm_medium=result&utm_campaign=eukanuba')">
				<span class="img-wrap">
					<img src="../assets/images/card-4.svg">
				</span>
				<span class="text">Интересно: как популярные<br>блогеры активно проводят<br>время со своими питомцами</span>
				<span class="link">Узнать</span>
			</a>
		</div> -->

		<button class="toggle-shares" @click="() => sharesVisible = !sharesVisible">
			<svg viewBox="0 0 26 26">
				<path
					stroke-width="2"
					d="M21.4,5.8c-1-1-2.4-1.6-3.9-1.6s-2.9,0.6-3.9,1.6L13,6.4l-0.6-0.6c-1-1-2.4-1.6-3.9-1.6c-1.5,0-2.9,0.6-3.9,1.6 C3.6,6.9,3,8.3,3,9.7c0,1.5,0.6,2.9,1.6,3.9l8,8c0.1,0.1,0.3,0.2,0.4,0.2c0.1,0,0.3-0.1,0.4-0.2l8-7.9c1-1,1.6-2.4,1.6-3.9 C23,8.3,22.4,6.9,21.4,5.8L21.4,5.8z"
				/>
			</svg>
		</button>
		<div class="shares" :class="{ visible: sharesVisible }">
			<a :href='shareTg' @click='shareClick("tg")' target='_blank'>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 261.2">
					<path d="M5.3 125.2L74.4 151l26.8 86c1.7 5.5 8.5 7.5 12.9 3.9l38.5-31.4c4-3.3 9.8-3.5 14-.4l69.5 50.5c4.8 3.5 11.6.9 12.8-4.9L299.8 9.8c1.3-6.3-4.9-11.6-10.9-9.3L5.2 110c-7 2.7-6.9 12.6.1 15.2z"/>
				</svg>
			</a>
			<a :href='shareFb' @click='shareClick("fb")' target='_blank'>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.3 412">
					<path d="M63.4 21.2C79.4 5.9 102.3.8 123.8.1c22.8-.2 45.6-.1 68.4-.1.1 24.1.1 48.1 0 72.2H148c-9.3-.6-18.9 6.5-20.6 15.8-.2 16.1-.1 32.2-.1 48.3 21.6.1 43.2 0 64.8.1-1.6 23.3-4.5 46.5-7.9 69.5-19.1.2-38.2 0-57.3.1-.2 68.7.1 137.3-.1 206-28.4.1-56.7-.1-85.1.1-.5-68.7 0-137.4-.3-206.1-13.8-.1-27.7.1-41.5-.1.1-23.1 0-46.2 0-69.2 13.8-.2 27.7 0 41.5-.1.4-22.4-.4-44.9.4-67.3 1.5-17.9 8.3-35.8 21.6-48.1z"/>
				</svg>
			</a>
			<a :href='shareTw' @click='shareClick("tw")' target='_blank'>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 416.1">
					<path d="M512 49.3c-18.8 8.4-39.1 14-60.3 16.5 21.7-13 38.3-33.6 46.2-58.1-20.3 12-42.8 20.8-66.7 25.5C412 12.8 384.7 0 354.5 0c-58 0-105 47-105 105 0 8.2.9 16.2 2.7 23.9-87.3-4.3-164.7-46.1-216.6-109.7-9 15.5-14.2 33.6-14.2 52.8 0 36.4 18.5 68.6 46.7 87.4-17.2-.5-33.4-5.3-47.6-13.1v1.3c0 50.9 36.2 93.3 84.3 103-8.8 2.4-18.1 3.7-27.7 3.7-6.8 0-13.3-.7-19.8-1.9 13.4 41.7 52.2 72.1 98.1 72.9-35.9 28.2-81.2 45-130.5 45-8.5 0-16.8-.5-25.1-1.5 46.5 29.8 101.7 47.2 161 47.2 193.2 0 298.9-160.1 298.9-298.9 0-4.6-.1-9.1-.3-13.6 20.7-14.7 38.5-33.2 52.6-54.2z"/>
				</svg>
			</a>
			<a :href='shareVk' @click='shareClick("vk")' target='_blank'>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 548.4 312.9">
					<path d="M545.5 282.5c-.7-1.4-1.3-2.6-1.9-3.6-9.5-17.1-27.7-38.2-54.5-63.1l-.6-.6-.3-.3-.3-.3h-.3c-12.2-11.6-19.9-19.4-23.1-23.4-5.9-7.6-7.2-15.3-4-23.1 2.3-5.9 10.9-18.4 25.7-37.4 7.8-10.1 14-18.2 18.6-24.3 32.9-43.8 47.2-71.8 42.8-83.9l-1.7-2.8c-1.1-1.7-4.1-3.3-8.8-4.7-4.8-1.4-10.9-1.7-18.3-.7l-82.2.6c-1.3-.5-3.2-.4-5.7.1-2.5.6-3.7.9-3.7.9l-1.4.7-1.1.9c-1 .6-2 1.6-3.1 3s-2.1 3.1-2.8 5c-9 23-19.1 44.4-30.6 64.2-7 11.8-13.5 22-19.4 30.7-5.9 8.7-10.8 15-14.8 19.1-4 4.1-7.6 7.4-10.9 9.8-3.2 2.5-5.7 3.5-7.4 3.1-1.7-.4-3.3-.8-4.9-1.1-2.7-1.7-4.8-4-6.4-7-1.6-3-2.7-6.7-3.3-11.1-.6-4.5-.9-8.3-1-11.6-.1-3.2 0-7.8.1-13.7.2-5.9.3-9.9.3-12 0-7.2.1-15.1.4-23.6.3-8.5.5-15.2.7-20.1.2-4.9.3-10.2.3-15.7s-.3-9.8-1-13c-.7-3.1-1.7-6.2-3-9.1-1.3-2.9-3.3-5.2-5.9-6.9-2.6-1.6-5.8-2.9-9.6-3.9-10.1-2.3-22.9-3.5-38.5-3.7-35.4-.4-58.1 1.9-68.2 6.9-4 2.1-7.6 4.9-10.8 8.6-3.4 4.2-3.9 6.5-1.4 6.9 11.4 1.7 19.5 5.8 24.3 12.3l1.7 3.4c1.3 2.5 2.7 6.9 4 13.1 1.3 6.3 2.2 13.2 2.6 20.8.9 13.9.9 25.8 0 35.7-1 9.9-1.9 17.6-2.7 23.1-.9 5.5-2.1 10-3.9 13.4-1.7 3.4-2.9 5.5-3.4 6.3-.6.8-1 1.2-1.4 1.4-2.5.9-5 1.4-7.7 1.4s-5.9-1.3-9.7-4c-3.8-2.7-7.8-6.3-11.8-11-4.1-4.7-8.7-11.2-13.9-19.6-5.1-8.4-10.5-18.3-16-29.7l-4.6-8.3c-2.9-5.3-6.8-13.1-11.7-23.3-5-10.2-9.3-20-13.1-29.6-1.5-4-3.8-7-6.9-9.1l-1.4-.9c-.9-.8-2.5-1.6-4.6-2.4-2.1-.9-4.3-1.5-6.6-1.9l-78.2.6c-8 0-13.4 1.8-16.3 5.4l-1.1 1.7C.3 22.4 0 23.9 0 26c0 2.1.6 4.7 1.7 7.7C13.1 60.6 25.6 86.4 39 111.4s25.1 45 35 60.2c9.9 15.2 20 29.6 30.3 43.1s17.1 22.2 20.4 26c3.3 3.8 6 6.7 7.9 8.6l7.1 6.9c4.6 4.6 11.3 10 20.1 16.4 8.9 6.4 18.7 12.7 29.4 18.9 10.8 6.2 23.3 11.2 37.5 15.1 14.3 3.9 28.2 5.5 41.7 4.7h32.8c6.7-.6 11.7-2.7 15.1-6.3l1.1-1.4c.8-1.1 1.5-2.9 2.1-5.3.7-2.4 1-5 1-7.9-.2-8.2.4-15.6 1.9-22.1 1.4-6.6 3-11.5 4.9-14.8 1.8-3.3 3.9-6.1 6.1-8.4 2.3-2.3 3.9-3.7 4.9-4.1.9-.5 1.7-.8 2.3-1 4.6-1.5 9.9 0 16.1 4.4 6.2 4.5 12 10 17.4 16.6 5.4 6.6 11.9 13.9 19.6 22.1 7.6 8.2 14.3 14.3 20 18.3l5.7 3.4c3.8 2.3 8.8 4.4 14.9 6.3 6.1 1.9 11.4 2.4 16 1.4l73.1-1.1c7.2 0 12.9-1.2 16.8-3.6 4-2.4 6.4-5 7.1-7.9.8-2.9.8-6.1.1-9.7-.6-3.7-1.3-6.2-1.9-7.7z"/>
				</svg>
			</a>
			<a :href='shareOk' @click='shareClick("ok")' target='_blank'>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.3 95.5">
					<path d="M24 67.3c-7.4-.8-14.1-2.6-19.8-7.1-.7-.6-1.4-1.1-2.1-1.7-2.5-2.4-2.8-5.2-.8-8 1.7-2.4 4.5-3.1 7.5-1.7.6.3 1.1.6 1.6 1 10.6 7.3 25.3 7.5 36 .3 1.1-.8 2.2-1.5 3.5-1.8 2.6-.7 4.9.3 6.3 2.5 1.6 2.5 1.5 5-.4 7-3 3-6.5 5.2-10.5 6.8-3.7 1.4-7.8 2.2-11.9 2.7.6.7.9 1 1.3 1.4 5.5 5.5 11 11 16.5 16.6 1.9 1.9 2.3 4.2 1.2 6.4-1.1 2.4-3.6 4-6.1 3.8-1.6-.1-2.8-.9-3.9-2C38.3 89.3 34 85.2 30 81c-1.2-1.2-1.8-1-2.8.1-4.2 4.3-8.4 8.5-12.7 12.7-1.9 1.9-4.2 2.2-6.4 1.2-2.4-1.1-3.9-3.6-3.7-6 .1-1.6.9-2.9 2-4l16.3-16.3c.4-.5.7-.9 1.3-1.4z"/>
					<path d="M28.5 48.3c-13.2 0-24-11-24-24.2C4.6 10.7 15.4 0 28.8 0s24.1 11 24 24.5c-.1 13.2-11 23.9-24.3 23.8zm12-24.2c0-6.6-5.3-11.8-11.8-11.8-6.6 0-11.9 5.3-11.8 11.9 0 6.5 5.3 11.7 11.9 11.7 6.5.1 11.7-5.2 11.7-11.8z"/>
				</svg>
			</a>
		</div>

		<span class="this-is-the-dog">Это собака Eukanuba</span>
	</div>
</main>
</template>


<script>
import { lory } from 'lory.js'
import Events from '@/events'
import shareMixin from '@/utils/shares'

export default {
	name: 'MainPage',
	mixins: [
		shareMixin
	],
	data() {
		return {
			sharesVisible: false,
		}
	},
	// mounted() {
	// 	if (this.device === 'desktop') return

	// 	let carousel = this.$refs['carousel']

	// 	// handle dots
    //     let dotCount = 3
    //     let dotContainer = this.$refs['js_dots']
	// 	let dotListItem = [...this.$refs['js_dots'].querySelectorAll('li')]

    //     function handleDotEvent(e) {
    //         if (e.type === 'before.lory.init') {
    //         	dotListItem[0].classList.add('active');
	// 		}

    //         if (e.type === 'after.lory.init') {
	// 			for (let i = 0; i < dotCount; i++) {
	// 				dotListItem[i].addEventListener('click', e => {
	// 					dot_navigation_slider.slideTo(i)
	// 				})
    //          	}
	// 		}

    //         if (e.type === 'after.lory.slide') {
	// 			for (let i = 0; i < dotCount; i++) {
	// 				dotListItem[i].classList.remove('active');
	// 			}
    //           	dotListItem[e.detail.currentSlide].classList.add('active');
	// 		}

    //         if (e.type === 'on.lory.resize') {
    //             for (let i = 0, len = dotListItem.length; i < len; i++) {
    //                 dotListItem[i].classList.remove('active');
    //             }
    //             dotListItem[0].classList.add('active');
    //         }
	// 	}

    //     carousel.addEventListener('before.lory.init', handleDotEvent);
    //     carousel.addEventListener('after.lory.init', handleDotEvent);
    //     carousel.addEventListener('after.lory.slide', handleDotEvent);
	// 	carousel.addEventListener('on.lory.resize', handleDotEvent);

	// 	var dot_navigation_slider = lory(carousel, {
    //         enableMouseEvents: true
	// 	})
	// },
}
</script>


<style lang="less" scoped>
@import '../styles/variables';
@import '../styles/animations';
@import '../styles/shares.less';

main {
	width: 100%;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
	color: #FFF;
	text-align: center;
	box-sizing: border-box;
	opacity: 0;
	animation: fade-in .4s forwards;
	overflow: hidden;

	@media (min-width: 960px) {
		padding: 40px;
		overflow: visible;
	}
}

.inner {
	position: relative;
	width: 100%;
	height: 100%;
	min-height: calc(~'100vh - 40px');
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-image: url('../assets/images/bg-mobile.jpg');
	background-size: cover;
	background-color: @color-main;
	box-sizing: border-box;
	// overflow: hidden;

	@media (min-width: 960px) {
		min-height: calc(~'100vh - 80px');
		background-image: url('../assets/images/main-page-bg-new.jpg');
	}

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: fade(#000, 70%);
		z-index: 1;
	}

	.toggle-shares {
		position: absolute;
		z-index: 3;

		@media (max-width: 959px) {
			left: 20px;
			bottom: 20px;
		}
	}

	.shares {
		position: absolute;
		z-index: 3;

		@media (max-width: 959px) {
			left: 60px;
			bottom: 23px;
		}
	}
}

.video-wrap {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 0;
	overflow: hidden;
}

a#logo-afisha {
	position: absolute;
	top: 10px;
	left: 20px;
	display: block;
	width: 110px;
	z-index: 2;

	@media (min-width: 960px) {
		top: 20px;
		left: 30px;
	}
}

a#logo-eukanuba {
	display: none !important;
	position: absolute;
	top: 0;
	right: -80px;
	display: block;
	width: 250px;
	z-index: 2;

	@media (min-width: 480px) {
		display: block !important;
	}

	@media (min-width: 960px) {
		top: 20px;
		right: -40px;
	}
}

p {
	position: relative;
	max-width: 685px;
	margin-top: 40px;
	margin-bottom: 45px;
	padding: 0 20px;
	text-align: left;
	font-family: @font-gotham;
	font-size: 16px;
	line-height: 24px;
	z-index: 2;

	@media (min-width: 960px) {
		margin-bottom: 45px;
		text-align: center;
	}
}

img.title {
	position: relative;
	max-width: 540px;
	z-index: 2;

	// @media (min-width: 480px) {
	// 	margin-top: 20px;
	// }

	@media (min-width: 960px) {
		margin-top: 90px;
	}
}


// carousel

.js_slider {
	position: relative;
	text-align: left;
	margin-bottom: 90px;
	z-index: 1;
}

.js_frame {
	position: relative;
	width: calc(~'100vw - 40px');
	overflow: hidden;
	white-space: nowrap;
	box-sizing: border-box;
}

ul.js_dots {
	position: absolute;
	bottom: -30px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	z-index: 2;

	li {
		width: 10px;
		height: 10px;
		margin-right: 15px;
		background-color: #FFF;
		border-radius: 50%;
		opacity: .5;
		transition: opacity .2s;
		cursor: pointer;

		&:last-child {
			margin-right: 0;
		}

		&.active {
			opacity: 1;
		}
	}
}

ul.js_slides {
	display: inline-flex;
	align-items: stretch;
	justify-content: center;
	z-index: 1;
}

li.js_slide {
	flex: 1 0 auto;
	position: relative;
	width: calc(~'100vw - 40px');
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	white-space: initial;
	box-sizing: border-box;

	a {
		&:hover {
			&>* {
				text-decoration: underline;
			}
		}
	}

	span {
		display: block;
	}

	.img-wrap {
		flex-shrink: 0;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 60px;
		height: 100px;
		margin-left: 20px;
		margin-right: 10px;
		overflow: visible;

		@media (min-width: 480px) {
			width: 90px
		}

		img {
			position: absolute;
			top: 0;
			left: 0;
			// right: 0;
			bottom: 0;
			margin: auto;
			width: 80%;
		}
	}

	.text {
		position: relative;
		display: flex !important;
		align-items: center;
		width: 100%;
		height: 130px;
		padding-right: 20px;
		font-size: 16px;
		line-height: 20px;
		box-sizing: border-box;

		a {
			position: absolute;
			left: 0;
			bottom: 0;
			text-decoration: underline;
		}
	}
}

h2, span {
	user-select: none;
}

.cards {
	position: relative;
	display: inline-flex;
	flex-wrap: wrap;
	align-items: stretch;
	justify-content: center;
	margin-bottom: 60px;
	z-index: 2;

	a {
		max-width: 240px;
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		padding: 0 35px;
		margin-bottom: 40px;

		&:hover {
			.link {
				border-bottom: 1px solid #FFF;
			}
		}

		&:last-child {
			margin-right: 0;
		}

		.img-wrap {
			position: relative;
			width: 80px;
			height: 100px;
			margin-bottom: 15px;
		}

		img {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			max-width: 90px;
			max-height: 100px;
		}

		.text {
			font-size: 16px;
			line-height: 24px;
			margin-bottom: 20px;
		}

		.link {
			margin-top: auto;
			border-bottom: 1px solid transparent;
			transition: border .2s;
		}
	}
}

.this-is-the-dog {
	display: none;
	position: absolute;
	font-family: @font-roboto;
	font-size: 30px;
	line-height: 1;
	font-weight: 700;
	text-transform: uppercase;
	z-index: 2;

	@media (min-width: 600px) {
		display: block;
		right: 20px;
		bottom: 17px;
	}

	@media (min-width: 960px) {
		right: 30px;
		bottom: 27px;
	}
}


.such-beautiful-button {
	position: relative;
	width: 250px;
	height: 42px;
	margin-bottom: 75px;
	line-height: 44px;
	background-image: url('../assets/images/button-shape.svg');
	background-size: 100% 100%;
	box-shadow: 0 8px 10px fade(#000, .2);
	font-size: 14px;
	z-index: 9001;

	@media (min-width: 960px) {
		width: 285px;
		height: 48px;
		line-height: 47px;
		font-size: 16px;
	}
}


.top-links {
	position: relative;
	left: 0;
	right: 0;
	width: 100%;
	margin: 30px auto;
	margin-bottom: 0;
	padding: 20px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: space-between;
	font-size: 14px;
	z-index: 9001;
	box-sizing: border-box;

	@media (min-width: 480px) {
		margin-top: 50px;
		margin-bottom: 30px;
		flex-direction: row;
		width: 360px;
		padding: 0;
	}

	@media (min-width: 960px) {
		position: absolute;
		top: 30px;
		margin: 0 auto;
	}

	a {
		margin: 10px 0;
		border-bottom: 1px solid transparent;
		transition: all .2s;

		@media (min-width: 960px) {
			margin: 0;
		}

		&:hover {
			border-bottom: 1px solid #FFF;
		}
	}
}


</style>
