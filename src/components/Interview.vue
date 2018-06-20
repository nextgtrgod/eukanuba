<template>
<section id="interview">
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
		@click="linkClick('https://www.eukanuba.ru/product/')"
		href="https://www.eukanuba.ru/product/"
		target="_blank"
	>
		<img src="../assets/images/logo-eukanuba.svg">
	</a>
	<div class="wrap">

		<router-link class="back" to="/">На главную</router-link>

		<p v-html="'Выберите параметры, которые помогут нам подобрать лучшую программу для вас и&nbsp;вашей собаки'"/>
		<question
			v-if="currentQuestion === key"
			v-for="(value, key) in filteredOptions"
			:key="key"
			:options="value"
			:type="key"
			:next="moveNext"
			v-model="selected[key]"
		/>

		<ul class="dots">
			<li
				v-for="(key, index) in keysOf(filteredOptions)"
				:key="index"
				:class="{
					selected: currentQuestion === key,
					active: selected[key],
					hidden: hidden.includes(key)
				}"
				@click="skipQuestion(index)"
			>
				<span/>
			</li>
		</ul>
	</div>

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
		</div>
	</template>
</section>
</template>


<script>
import Events from '@/events'
import { mapState } from 'vuex'
import shareMixin from '@/utils/shares'
import keysOf from '@/utils/keysOf'
import Question from '@/components/Question';
import options from '@/data/options'

export default {
	name: 'InterviewPage',
	mixins: [
		shareMixin
	],
	components: {
		Question,
	},
	data() {
		return {
			options,
			currentIndex: 0,
			hidden: [],
			sharesVisible: false,
		}
	},
	created() {
		keysOf(this.selected).map(key => this.selected[key] = '') // drop selection

		Events.$on('state-update', ({ state }) => {
			// skip 'телосложение'
			if (state.selected['old'] === 'щенки') {
				if (!this.hidden.includes('body')) {
					this.hidden.push('body')
					this.selected['body'] = 'атлетичное'
				}
			}
			else {
				this.hidden = []
				// this.selected['body'] = ''
			}
		})
	},
	computed: {
		...mapState({
			selected: state => state.selected
		}),
		currentQuestion() {
			return keysOf(this.filteredOptions)[this.currentIndex]
		},
		filteredOptions() {
			let opts = {}

			keysOf(this.options).map(key => {
				if (!this.hidden.includes(key)) {
					opts[key] = this.options[key]
				}
			})

			return opts
		},
	},
	methods: {
		moveNext() {
			if (this.currentIndex === keysOf(this.filteredOptions).length - 1) {
				if (!Object.values(this.selected).includes('')) {
					this.$router.push({ name: 'Result' })
				}
			} else {
				this.currentIndex++
			}
		},
		skipQuestion(index) {
			this.selected[keysOf(this.selected)[index]].length && (this.currentIndex = index)
		},
		keysOf: obj => keysOf(obj),
	},
}
</script>


<style lang="less" scoped>
@import '../styles/variables';
@import '../styles/animations';


#interview {
	position: relative;
	opacity: 0;
	animation: fade-in .6s forwards;
	height: 100%;

	@media (min-width: 960px) {
		min-height: 800px;
	}

	.toggle-shares {
		position: fixed;
		left: 25px;
		bottom: 30px;

		&:hover {
			svg {
				fill: #000;
			}
		}
	}

	.shares {
		position: fixed;
		left: 12px;
		bottom: 60px;
		flex-direction: column-reverse;

		a {
			margin-bottom: 25px;
		}

		svg {
			fill: #000;
		}
	}
}

a#logo-afisha {
	position: absolute;
	top: 40px;
	left: 45px;
	width: 110px;
	z-index: 2;
}

a#logo-eukanuba {
	position: absolute;
	top: 35px;
	right: 0;
	width: 300px;
	z-index: 2;
}

#logo-afisha,
#logo-eukanuba {
	display: none;

	@media (min-width: 960px) {
		display: block;
	}
}

.wrap {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #E6E9EC;

	@media (min-width: 960px) {
		top: 60px;
		left: 80px;
		right: 80px;
		bottom: 60px;
	}

	p {
		display: none;
		margin-top: 30px;
		margin-bottom: 40px;
		padding: 0 40px;
		font-family: @font-gotham;
		font-size: 16px;
		font-weight: 400;
		line-height: 21px;
		text-align: center;

		@media (min-width: 960px) {
			display: block;
		}
	}
}

.back {
	display: none;
	align-self: flex-start;
	margin-top: 20px;
	margin-left: 35px;
	font-family: @font-roboto;
	font-size: 14px;
	color: #000;
	text-decoration: underline !important;
	text-transform: uppercase;
	z-index: 1;

	@media (min-width: 960px) {
		display: inline-block;
	}
}

ul.dots {
	margin-top: 35px;

	li {
		display: inline-block;
		width: 22px;
		height: 22px;
		padding: 5px;
		box-sizing: border-box;

		span {
			display: block;
			width: 10px;
			height: 10px;
			border: 1px solid @color-main;
			border-radius: 50%;
			opacity: .5;
			transition: all .2s;
		}

		&.active,
		&.selected {
			cursor: pointer;
			span {
				background-color: @color-main;
			}
		}

		&.active {
			&:hover {
				span {
					opacity: .75;
				}
			}
		}

		&.selected {
			span {
				opacity: 1 !important;
			}
		}

		&.hidden {
			display: none;
		}
	}
}

</style>
