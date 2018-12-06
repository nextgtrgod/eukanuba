<template>
<div id="result">
	<a
		id="logo-afisha"
		@click="linkClick('https://www.afisha.ru/')"
		href="https://www.afisha.ru/"
		target="_blank"
	>
		<img src="../assets/images/logo-afisha-invert.svg">
	</a>

	<a
		id="logo-eukanuba"
		@click="linkClick('https://www.eukanuba.ru/product')"
		href="https://www.eukanuba.ru/product"
		target="_blank"
	>
		<img src="../assets/images/logo-eukanuba.svg">
	</a>

	<section class="dog">

		<router-link class="back" to="/">На главную</router-link>

		<div class="column image-wrap">
			<img v-if="device === 'mobile'" src="../assets/images/dog-mobile.jpg">
			<img v-else src="../assets/images/dog.jpg">
		</div>
		<div class="column text-wrap">
			<div class="info">
				<p><b>Возраст: </b>{{ selected.old }}</p>
				<p><b>Сложение: </b>{{ selected.body }}</p>
				<br>
				<p><b>Размер: </b>{{ selected.size }}</p>
				<p><b>Время прогулки: </b>{{ selected.time }}</p>
			</div>

			<div class="time">
				<h2>Оптимальная<br>продолжительность<br>прогулки для вашей<br>собаки:</h2>
				<div>
					<h1 class="parallax" data-blocky="true">{{ time[selected.time] }}</h1>
					<h2 class="parallax">минут</h2>
				</div>
			</div>

			<div class="games">
				<h3>Наиболее подходящие активности<br>во время прогулки</h3>
				<ul>
					<li
						v-for="(action, index) in dogInfo.actions"
						:key="index"
					>
						<span class="icon parallax" data-invertY="true">
							<img :src="getGameIcon(action)" class="parallax" data-speed="1.2">
						</span>
						<span class="caption parallax">{{ games[action] }}</span>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="food">
		<h1>Корм, который<br>подходит вашему<br>питомцу</h1>
		<h2>Корм, который подходит<br>вашему питомцу</h2>
		<div class="js_slider" ref="carousel">

			<button class="nav prev" @click="prev">
				<img src="../assets/images/prev.svg">
			</button>

			<button class="nav next" @click="next">
				<img src="../assets/images/next.svg">
			</button>

			<ul class="js_dots" ref="js_dots">
				<li
					v-for="(description, foodID) in dogInfo.food"
					:key="foodID"
				/>
			</ul>

			<div class="js_frame">
				<ul class="js_slides">
					<li
						class="js_slide"
						v-for="(description, foodID) in dogInfo.food"
						:key="foodID"
					>
						<span class="image">
							<img :src="getFoodImage(foodID)">

							<a :href="'https://eukanuba.ru/product/' + foodID">
								<span>Подробнее</span>
							</a>
						</span>

						<a class="image" :href="'https://eukanuba.ru/product/' + foodID">
							<img :src="getFoodImage(foodID)">
							<span>Подробнее</span>
						</a>
						<span class="text">
							<a :href="'https://eukanuba.ru/product/' + foodID">
								<h3 v-html="food[foodID]"/>
							</a>
							<p v-if="selected.old === 'щенки'">Количество корма в зависимости от веса<br>и возраста щенка - {{ description }}</p>
							<p v-else>Количество корма в зависимости<br>от веса - {{ description }}</p>
							<span>Количество приемов пищи - 2 раза в день.</span>
							<a
								v-if="device === 'desktop'"
								class="small"
								href="https://www.eukanuba.ru/product/"
								@click="linkClick('https://www.eukanuba.ru/product/')"
								target="_blank"
							>
								Узнать точные нормы кормления вы можете на сайте eukanuba.ru
							</a>
						</span>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="bloggers">
		<h2>Интересные рассказы<br>и советы популярных блогеров</h2>
		<ul>
			<li>
				<a href="https://daily.afisha.ru/cities/9179-hochetsya-poyti-vmeste-v-basseyn-vladelcy-sobak-o-sovmestnoy-aktivnoy-zhizni-v-gorode/?utm_source=lending&utm_medium=result&utm_campaign=eukanuba" @click="linkClick('https://daily.afisha.ru/cities/9179-hochetsya-poyti-vmeste-v-basseyn-vladelcy-sobak-o-sovmestnoy-aktivnoy-zhizni-v-gorode/?utm_source=lending&utm_medium=result&utm_campaign=eukanuba')" target="_blank">
					<img src="../assets/images/bloggers/1.png">
					<span>
						Иван Милехин
						<span>Фотограф</span>
					</span>
				</a>
			</li>
			<li>
				<a href="https://daily.afisha.ru/cities/9179-hochetsya-poyti-vmeste-v-basseyn-vladelcy-sobak-o-sovmestnoy-aktivnoy-zhizni-v-gorode/?utm_source=lending&utm_medium=result&utm_campaign=eukanuba" @click="linkClick('https://daily.afisha.ru/cities/9179-hochetsya-poyti-vmeste-v-basseyn-vladelcy-sobak-o-sovmestnoy-aktivnoy-zhizni-v-gorode/?utm_source=lending&utm_medium=result&utm_campaign=eukanuba')" target="_blank">
					<img src="../assets/images/bloggers/2.png">
					<span>
						Анна Екомасова
						<span>Фотограф</span>
					</span>
				</a>
			</li>
			<li class="title">
				<a>
					<h2>Интересные рассказы<br>и советы популярных<br>блогеров</h2>
				</a>
			</li>
			<li>
				<a href="https://daily.afisha.ru/cities/9179-hochetsya-poyti-vmeste-v-basseyn-vladelcy-sobak-o-sovmestnoy-aktivnoy-zhizni-v-gorode/?utm_source=lending&utm_medium=result&utm_campaign=eukanuba" @click="linkClick('https://daily.afisha.ru/cities/9179-hochetsya-poyti-vmeste-v-basseyn-vladelcy-sobak-o-sovmestnoy-aktivnoy-zhizni-v-gorode/?utm_source=lending&utm_medium=result&utm_campaign=eukanuba')" target="_blank">
					<img src="../assets/images/bloggers/3.png">
					<span>
						Максим Журило
						<span>Основатель ILOVERUNNING</span>
					</span>
				</a>
			</li>
			<li>
				<a href="https://daily.afisha.ru/cities/9179-hochetsya-poyti-vmeste-v-basseyn-vladelcy-sobak-o-sovmestnoy-aktivnoy-zhizni-v-gorode/?utm_source=lending&utm_medium=result&utm_campaign=eukanuba" @click="linkClick('https://daily.afisha.ru/cities/9179-hochetsya-poyti-vmeste-v-basseyn-vladelcy-sobak-o-sovmestnoy-aktivnoy-zhizni-v-gorode/?utm_source=lending&utm_medium=result&utm_campaign=eukanuba')" target="_blank">
					<img src="../assets/images/bloggers/4.png">
					<span>
						Дмитрий Игнатов
						<span>Телеведущий</span>
					</span>
				</a>
			</li>
		</ul>
	</section>

	<section class="man">
		<div class="column text-wrap">
			<div class="info">
				<p><b>Пол: </b>{{ selected.gender }}</p>
				<p><b>Возраст: </b>{{ selected.age }}</p>
				<p><b>Место прогулки: </b>{{ selected.place }}</p>
			</div>

			<div class="exercises">
				<span class="icon parallax" data-inverty="true" data-speed="1.2">
					<!-- <img src="../assets/images/heaviness.svg" class="parallax" data-speed="1.4"> -->
					<img src="../assets/images/dummy.svg">
				</span>
				<span class="text">
					{{ manInfo.description }}			
					<span>И не забудьте про разминку!</span>
				</span>
			</div>

			<div class="water">
				<span class="text parallax" data-speed="1">
					После окончания тренировки необходимо восполнить водный баланс негазированной минеральной водой.
				</span>
				<span class="icon parallax" data-inverty="true" data-speed="1.2">
					<!-- <img src="../assets/images/bottle.svg" class="parallax" data-speed="1.4"> -->
					<img src="../assets/images/dummy.svg">
				</span>
			</div>
		</div>
		<div class="column image-wrap">
			<img :src="humanImage">
		</div>
	</section>

	<section class="places">
		<h2>Рекомендуем вам прогуляться с вашим питомцем в:</h2>
		<ul>
			<li
				v-for="place in city"
				:key="place.id"
			>
				<span class="image-wrap">
					<img :src="getPlaceImage(place.id)">
				</span>
				<span class="text-wrap">
					<h2>{{ place.name }}</h2>

					<!-- <v-bar v-if="device === 'desktop'" wrapper="v-bar">
						<p v-html="place.description"/>
					</v-bar>
					<p v-else v-html="place.description"/> -->

					<p v-html="place.description"/>

					<span class="link-wrap">
						<span class="icon">
							<img src="../assets/images/marker.svg">
						</span>
						<a :href="getMapLink(place.latLng)" target="_blank">
							{{ place.address }}
						</a>
					</span>
				</span>
			</li>
		</ul>

		<router-link to="/" class="back">вернуться на главную</router-link>

	</section>

	<template v-if="device === 'desktop'">
		<button class="toggle-shares" @click="() => sharesVisible = !sharesVisible">
			<svg viewBox="0 0 26 26">
				<path
					stroke="#000"
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
	</template>
</div>
</template>


<script>
import { lory } from 'lory.js'
// import VBar from 'v-bar'
import Events from '@/events'
import { mapState } from 'vuex'
import shareMixin from '@/utils/shares'
import time from '@/data/time'
import man from '@/data/man'
import dog from '@/data/dog'
import games from '@/data/games'
import food from '@/data/food'
import places from '@/data/places'

import getMousePos from '@/utils/getMousePos'
import Parallax from '@/utils/parallax'

export default {
	name: 'ResultPage',
	mixins: [
		shareMixin
	],
	// components: {
	// 	VBar,
	// },
	data() {
		return {
			time,
			dog,
			man,
			food,
			games,
			places,
			sharesVisible: false,
			modalVisible: false,
		}
	},
	mounted() {
		this.initSlider()
		this.initParallax()

		this.app = document.getElementById('app')
		this.handleScroll()
	},
	methods: {
		handleScroll() {

			if (this.modalVisible) return

			if (this.app.scrollTop >= window.innerHeight) {
				this.modalVisible = true
				Events.$emit('modal-open')
			}

			requestAnimationFrame(this.handleScroll)
		},
		getMapLink: latLng => `https://www.google.com/maps/?q=${latLng[0]},${latLng[1]}`,
		getPlaceImage: id => {
			try {
				return require(`@/assets/images/places/${id}.jpg`)
			} catch (e) {
				console.log(e)
				return 'http://via.placeholder.com/400x260'
			}
		},
		getGameIcon(name) {
			try {
				// return require(`@/assets/images/games/${name}.svg`)
				return require(`@/assets/images/games/dummy.svg`)
			} catch (e) {
				console.log(e)
				return require (`@/assets/images/games/dog.svg`)
			}
		},
		getFoodImage(id) {
			try {
				return require(`@/assets/images/food/${id}.png`)
			} catch (e) {
				console.log(e)
				return require(`@/assets/images/food/51.png`)
			}
		},

		// parallax
		initParallax() {
			if (this.device === 'desktop') {
				let items = [...document.querySelectorAll('.parallax')]

				if (!items.length) return

				this.animation = new Parallax()

				items.map(item => this.animation.add(item))	

				this.animation.start()
			}			
		},

		// slider
		initSlider() {
			let carousel = this.$refs['carousel']

			// handle dots
			let dotCount = Object.keys(this.dogInfo.food).length
			let dotContainer = this.$refs['js_dots']
			let dotListItem = [...this.$refs['js_dots'].querySelectorAll('li')]

			function handleDotEvent(e) {
				if (e.type === 'before.lory.init') {
					dotListItem[0].classList.add('active');
				}

				if (e.type === 'after.lory.init') {
					for (let i = 0; i < dotCount; i++) {
						dotListItem[i].addEventListener('click', e => {
							console.log(i)
							dot_navigation_slider.slideTo(i)
						})
					}
				}

				if (e.type === 'after.lory.slide') {
					for (let i = 0; i < dotCount; i++) {
						dotListItem[i].classList.remove('active');
					}
					dotListItem[e.detail.currentSlide].classList.add('active');
				}

				if (e.type === 'on.lory.resize') {
					for (let i = 0, len = dotListItem.length; i < len; i++) {
						dotListItem[i].classList.remove('active');
					}
					dotListItem[0].classList.add('active');
				}
			}

			carousel.addEventListener('before.lory.init', handleDotEvent);
			carousel.addEventListener('after.lory.init', handleDotEvent);
			carousel.addEventListener('after.lory.slide', handleDotEvent);
			carousel.addEventListener('on.lory.resize', handleDotEvent);

			var dot_navigation_slider = lory(carousel, {
				enableMouseEvents: true
			})

			Events.$on('slider-next', dot_navigation_slider.next)
			Events.$on('slider-prev', dot_navigation_slider.prev)
		},

		prev: () => Events.$emit('slider-prev'),
		next: () => Events.$emit('slider-next'),
	},
	computed: {
		...mapState({
			selected: state => state.selected
		}),
		city() {
			return this.places[this.selected.city]
		},
		dogInfo() {
			let { old, body, size, time } = this.selected
			return this.dog[body][time][size][old]
		},
		manInfo() {
			let { gender, age, place, time } = this.selected
			// return this.man[gender][age][place][time]
			return this.man['мужской'][age][place][time]
		},
		humanImage() {
			return this.selected.gender === 'мужской'
				? require(`@/assets/images/man-${this.device}.jpg`)
				: require(`@/assets/images/woman-${this.device}.jpg`)
		}
	},
	beforeDestroy() {
		this.animation.stop()
	}
}
</script>


<style lang="less" scoped>
@import '../styles/variables';
@import '../styles/animations';


#result {
	position: relative;
	width: 100%;
	background-color: #e6e9ec;
	opacity: 0;
	animation: fade-in .4s forwards;
	overflow: hidden;

	@media (min-width: 960px) {
		margin: 60px auto;
		margin-bottom: 70px;
		width: calc(~'100% - 150px');
		max-width: 1120px;
		overflow: visible;
	}

	.toggle-shares {
		display: none;
		position: fixed;
		left: 24px;
		bottom: 30px;

		@media (min-width: 960px) {
			display: block;
		}

		@media (min-width: 1270px) {
			left: calc(~'((100vw - 1120px) / 2) - 50px');
		}

		&:hover {
			svg {
				fill: #000;
			}
		}
	}

	.shares {
		position: fixed;
		left: 11px;
		bottom: 60px;
		flex-direction: column-reverse;

		@media (min-width: 1270px) {
			left: calc(~'((100vw - 1120px) / 2) - 63px');
		}

		a {
			margin-bottom: 25px;
		}

		svg {
			fill: #000;
		}
	}
}

.back {
	display: inline-block;
	font-family: @font-roboto;
	font-size: 14px;
	color: #000;
	text-decoration: underline !important;
	text-transform: uppercase;
	z-index: 1;
}

a#logo-afisha {
	position: absolute;
	top: 30px;
	left: 20px;
	width: 110px;
	z-index: 2;

	@media (min-width: 960px) {
		top: -20px;
		left: -35px;
	}
}

a#logo-eukanuba {
	position: absolute;
	top: 23px;
	right: -80px;
	width: 250px;
	z-index: 2;

	@media (min-width: 480px) {
		display: block;
	}

	@media (min-width: 960px) {
		top: -25px;
		right: -75px;
		width: 300px;
	}

	@media (min-width: 1270px) {
		right: calc(~'(1120px - 100vw) / 2');
	}
}

section {
	font-family: @font-gotham;
}

h1, h2, h3 {
	margin: 0;
	font-family: @font-roboto;
	text-transform: uppercase;
}

h1 {
	font-size: 26px;
	line-height: 35px;
}

h2 {
	font-size: 20px;
	line-height: 26px;

	@media (min-width: 960px) {
		font-size: 24px;
		line-height: 30px;
	}
}

h3 {
	font-size: 22px;
	line-height: 30px;
}

.column {
	width: 100%;
	flex-basis: 100%;

	@media (min-width: 960px) {
		width: 50%;
		flex-basis: 50%;
	}
	overflow: hidden;
}

.image-wrap {
	position: relative;
	font-size: 0;

	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;

		@media (min-width: 960px) {
			width: auto;
			height: 100%;
		}
	}
}

.text-wrap {
	box-sizing: border-box;
}

.info {
	p {
		display: inline-block;
		margin: 0;
		margin-right: 10px;
		font-size: 14px;
		line-height: 20px;
		opacity: .5;

		@media (min-width: 960px) {
			display: inline-block;
		}
	}
}


.dog {
	display: flex;
	flex-wrap: wrap;

	.back {
		display: none;
		position: absolute;
		top: 45px;
		left: 40px;

		@media (min-width: 960px) {
			display: inline-block;
		}
	}

	.image-wrap {
		padding-top: 70%;

		@media (min-width: 960px) {
			padding-top: 64.2857%;
		}
	}

	.text-wrap {
		p:nth-of-type(2n) {
			margin-right: 0;
		}
	}

	.info {
		padding: 20px;
		padding-top: 25px;
		padding-right: 0;
		background-color: #eef0f2;

		@media (min-width: 960px) {
			padding: 35px;
			padding-top: 45px;
		}

		br {
			display: none;

			@media (min-width: 960px) {
				display: block;
			}
		}
	}

	.time {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		padding: 0 20px;
		padding-bottom: 25px;
		background-color: #eef0f2;

		&>h2 {
			@media (max-width: 719px) {
				font-size: 18px;
			}
		}

		@media (min-width: 960px) {
			padding: 35px;
		}

		div {
			position: relative;
			display: inline-flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			&:before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				margin: auto;
				width: 105px;
				height: 105px;
				border-radius: 50%;
				background-color: #d7dbe1;
				z-index: 0;

				@media (min-width: 960px) {
					top: 10px;
					width: 145px;
					height: 145px;
				}
			}

			&>* {
				position: relative;
				font-family: @font-gotham;
				color: @color-main;
				text-transform: none;
			}

			h1 {
				font-size: 90px;
				font-weight: 700;
				line-height: 70px;

				@media (min-width: 720px) {
					font-size: 100px;
					line-height: 80px;
				}

				@media (min-width: 960px) {
					font-size: 140px;
					line-height: 110px;
				}
			}

			h2 {
				font-size: 24px;
				line-height: 1.2;

				@media (min-width: 960px) {
					font-size: 36px;
				}
			}

			h3 {
				font-size: 24px;
				font-weight: 400;
				color: #000;
			}
		}
	}

	.games {
		padding: 20px;
		padding-top: 25px;

		@media (min-width: 960px) {
			padding: 35px;
		}

		h3 {
			margin: 0 auto;
			margin-bottom: 30px;
			text-align: center;

			@media (min-width: 960px) {
				margin-left: 0;
				margin-bottom: 30px;
				text-align: left;
			}
		}

		ul {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;

			li {
				width: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: flex-start;
				margin-bottom: 20px;

				&:nth-child(1) {
					.icon {
						margin-right: 20px;
					}
				}

				&:nth-child(2) {
					flex-direction: row-reverse;

					.icon {
						margin-left: 10px;
					}
				}

				&:last-child {
					margin-bottom: 0;
				}

				.icon {
					flex: 0 0 auto;
					position: relative;
					width: 100px;
					height: 100px;
					background-color: #d7dbe1;
					border-radius: 50%;

					@media (min-width: 960px) {
						width: 120px;
						height: 120px;
					}

					img {
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						margin: auto;
						width: 100%;
						height: auto;
					}
				}

				.caption {
					max-width: 320px;
					font-size: 16px;
					line-height: 25px;
				}
			}
		}
	}
}


.food {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 35px 10px;
	padding-bottom: 65px;
	background-color: @color-main;
	color: #FFF;
	box-sizing: border-box;

	@media (min-width: 720px) {
		padding: 35px 10px;
	}

	@media (min-width: 960px) {
		flex-direction: row;
		height: 330px;
	}

	h1 {
		display: none;
		flex-shrink: 0;
		font-size: 32px;
		line-height: 40px;
		margin-right: 80px;

		@media (min-width: 1200px) {
			display: block;
		}
	}

	h2 {
		margin: 0;
		text-align: center;

		@media (min-width: 720px) {
			margin-top: 10px;
		}

		@media (min-width: 960px) {
			display: none;
		}
	}

	.js_slider {
		position: relative;

		.nav {
			position: absolute;
			top: 100px;
			width: 20px;
			height: 20px;
			margin: auto;
			opacity: .8;
			z-index: 2;

			@media (min-width: 720px) {
				top: 0;
				bottom: 0;
				display: block;
			}

			&:hover {
				opacity: 1;
			}

			img {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				height: 100%;
				margin: auto;
			}

			&.prev {
				left: 20px;

				@media (min-width: 720px) {
					left: 10px;
				}

				@media (min-width: 960px) {
					left: -40px;
				}
			}

			&.next {
				right: 20px;

				@media (min-width: 720px) {
					right: 10px;
				}

				@media (min-width: 960px) {
					right: -30px;
				}
			}
		}
	}

	.js_frame {
		position: relative;
		width: 100vw;
		overflow: hidden;
		white-space: nowrap;
		box-sizing: border-box;

		@media (min-width: 720px) {
			padding: 0 20px;
		}

		@media (min-width: 960px) {
			padding: 0;
			width: 660px;
		}
	}

	ul.js_dots {
		position: absolute;
		bottom: -40px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		z-index: 2;

		@media (min-width: 720px) {
			bottom: 0;
		}

		@media (min-width: 960px) {
			left: 211.5px;
			bottom: 30px;
			transform: translateX(0);
		}

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
		align-items: flex-start;
		justify-content: center;
		z-index: 1;

		@media (min-width: 960px) {
			align-items: stretch;
		}
	}

	li.js_slide {
		flex: 1 0 auto;
		position: relative;
		width: 100vw;
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		white-space: initial;
		box-sizing: border-box;

		@media (min-width: 720px) {
			flex-direction: row;
			height: 330px;
			padding: 20px;
		}

		@media (min-width: 960px) {
			padding: 0;
			width: 660px;
		}

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
	}

	h2, span {
		user-select: none;
	}


	span.image {
		display: flex !important;

		a span {
			text-decoration: underline;
		}

		@media (min-width: 720px) {
			display: none !important;
		}		
	}

	a.image {
		display: none;

		@media (min-width: 720px) {
			display: flex;
		}
	}

	.image {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 190px;
		height: 200px;
		margin-bottom: 30px;

		@media (min-width: 720px) {
			height: 330px;
			margin-right: 20px;
			margin-bottom: 0;
		}

		&:before {
			content: '';
			position: absolute;
			top: 40px;
			left: 0;
			right: 0;
			width: 140px;
			height: 140px;
			margin: auto;
			background-color: #ef33a2;
			border-radius: 50%;
			z-index: -1;

			@media (min-width: 720px) {
				top: 70px;
				width: 190px;
				height: 190px;
			}
		}

		img {
			flex: 0 0 auto;
			width: 100%;
			max-width: 80px;
			margin-bottom: 10px;

			@media (min-width: 720px) {
				max-width: 110px;
				margin-bottom: 30px;
			}
		}

		span {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			font-size: 14px;
			text-align: center;

			@media (min-width: 720px) {
				bottom: 45px;
			}
		}
	}

	.text {
		text-align: center;

		@media (min-width: 720px) {
			text-align: left;
		}

		@media (min-width: 960px) {
			width: 100%;
		}

		&>p,
		&>span {
			@media (max-width: 719px) {
				padding: 0 20px;
			}
		}

		h3 {
			@media (max-width: 719px) {
				font-size: 20px;
			}
		}

		p {
			margin-top: 10px;
			margin-bottom: 5px;
			font-size: 16px;
			line-height: 24px;
		}

		span, a {
			margin-bottom: 5px;
			font-size: 16px;
			line-height: 21px;
			opacity: .8;
		}

		a.small {
			margin-bottom: 0;
			font-size: 14px;
			line-height: 16px;
			transition: opacity .2s;
			opacity: .6;

			&:hover {
				opacity: 1;
				text-decoration: underline;
			}
		}
	}
}


.bloggers {
	// height: 200px;
	background-color: #052046;
	// background-image: url('../assets/images/bloggers/bg.jpg');
	background-size: cover;
	text-align: center;
	color: #FFF;
	padding-top: 40px;

	&>h2 {
		display: block;

		@media (min-width: 1110px) {
			display: none;
		}
	}

	h2 {
		margin-bottom: 40px;
		font-family: @font-gotham;
		font-size: 24px;
		line-height: 32px;
		text-transform: none;

		@media (min-width: 1110px) {
			margin-top: 15px;
			margin-bottom: 0px;
			font-size: 20px;
			line-height: 30px;
		}
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-around;

		li {
			width: 180px;
			display: inline-flex;
			align-items: center;
			flex-direction: column;
			margin-bottom: 40px;

			img {
				width: 110px;
				margin-bottom: 10px;
			}
			
			span {
				display: block;
				font-size: 14px;

				span {
					font-size: 12px;
					line-height: 20px;
				}
			}
		}

		li.title {
			display: none;
			width: 240px;
			align-self: center;

			@media (min-width: 1110px) {
				display: block;
			}
		}
	}
}


.man {
	display: flex;
	flex-wrap: wrap;
	background-color: #dbdfe4;

	.text-wrap {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.info {
		padding: 20px;
		padding-top: 30px;
		// padding-right: 0;
		background-color: #e6e9ec;

		p:last-child {
			margin-right: 0;
		}

		@media (min-width: 960px) {
			padding: 35px;
			padding-right: 0;
		}
	}

	.exercises {
		// display: flex;
		padding: 0 20px;
		padding-bottom: 20px;
		background-color: #e6e9ec;
		margin-bottom: auto;

		@media (min-width: 960px) {
			padding: 0 35px;
			padding-bottom: 35px;
		}

		.icon {
			float: left;
			flex: 0 0 auto;
			position: relative;
			display: block;
			width: 80px;
			height: 80px;
			margin-top: 10px;
			margin-right: 30px;
			margin-bottom: 15px;
			background-color: #cfd2d4;
			border-radius: 50%;

			img {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				margin: auto;
				width: 60px;
				height: auto;
			}
		}

		.text {
			display: block;
			// max-width: 300px;
			font-size: 16px;
			line-height: 25px;

			span {
				display: block;
				margin: 10px 0;
				opacity: .6;
				font-style: italic;
			}
		}
	}

	.water {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px;
		padding-right: 40px;
		margin-bottom: auto;

		@media (min-width: 960px) {
			padding: 50px 35px;
			padding-top: 40px;
			padding-right: 100px;
		}

		.text {
			max-width: 300px;
			font-size: 16px;
			line-height: 28px;

			@media (min-width: 960px) {
				font-size: 18px;
			}
		}

		.icon {
			flex-shrink: 0;
			position: relative;
			display: block;
			width: 105px;
			height: 105px;
			margin-top: 10px;
			background-color: #e2e5e9;
			border-radius: 50%;

			img {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				margin: auto;
				width: 75px;
				height: auto;
			}
		}
	}

	.image-wrap {
		padding-top: 75%;
		order: -1;

		@media (min-width: 960px) {
			padding-top: 62.5%;
			order: 0;
		}
	}
}

.places {
	padding: 10px 20px;
	background-color: @color-main;
	color: #FFF;

	@media (min-width: 960px) {
		padding: 10px 50px;
		padding-top: 55px;
	}

	h2 {
		margin: 0;
		margin-bottom: 35px;
		font-size: 28px;
		line-height: 35px;
		font-weight: 700;
		font-family: @font-roboto;
		text-transform: uppercase;
		text-align: center;

		@media (min-width: 960px) {
			font-size: 24px;
			text-align: center;
			margin-bottom: 30px;
		}
	}

	ul {
		@media (min-width: 960px) {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 100%;
			// max-width: 750px;
			margin: auto;
		}

		li {
			margin-bottom: 60px;

			&:last-child {
				margin-bottom: 30px;
			}

			@media (min-width: 960px) {
				display: inline-flex;
				align-items: flex-start;
				justify-content: center;
				width: 100%;
				margin-bottom: 40px;
			}
		}

		.image-wrap {
			display: block;

			img {
				position: relative;
				width: 100%;
			}

			@media (min-width: 960px) {
				width: 380px;
				height: 260px;
				flex: 0 0 380px;
				margin-right: 40px;
				overflow: hidden;
		
				img {
					position: relative;
					width: 100%;
					height: auto;
				}
			}
		}

		img {
			max-width: 100%;
		}

		h2 {
			margin-top: 25px;
			margin-bottom: 15px;
			font-family: @font-gotham;
			font-size: 22px;
			font-weight: 700;
			line-height: 28px;

			@media (min-width: 960px) {
				font-size: 24px;
				line-height: 30px;
				margin-top: 0;
				margin-bottom: 10px;
				font-family: @font-gotham;
				text-align: left;
				text-transform: none;
			}
		}

		span.text-wrap {
			flex-basis: 100%;
		}

		.v-bar {
			display: block;
			width: 100%;
			height: 4 * 24px;
			margin-bottom: 25px;
			padding: 5px 0;
			border-bottom: 1px dashed fade(#FFF, 50%);
		}

		p {
			margin: 0;
			margin-bottom: 25px;
			font-size: 16px;
			font-weight: 400;
			line-height: 21px;

			@media (min-width: 960px) {
				width: calc(~'100% - 40px');
				padding-right: 40px !important;
				font-size: 14px;
				line-height: 20px;
			}
		}

		.link-wrap {
			display: inline-flex;
			align-items: center;
			justify-content: flex-start;

			.icon {
				position: relative;
				flex-shrink: 0;
				width: 50px;
				height: 50px;
				margin-right: 20px;
				background-color: #ef33a2;
				border-radius: 50%;

				img {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					margin: auto;
					width: 24px;
				}
			}

			a {
				font-size: 16px;
				line-height: 24px;

				@media (min-width: 960px) {
					font-size: 14px;
					line-height: 21px;
				}

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}

	.back {
		color: #FFF;
		margin-bottom: 30px;
	}

}


</style>
