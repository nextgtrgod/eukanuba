<script>
	import Events from '@/events'
	import { throttle } from 'lodash'

	import HeaderView from './Header'
	import MenuView from './Menu'

	// sections
	import About from './sections/About'
	import Revolution from './sections/Revolution'
	import Gastronomy from './sections/Gastronomy'
	import Stagnation from './sections/Stagnation'
	import Crazy from './sections/Crazy'
	import Changes from './sections/Changes'
	import Product from './sections/Product'

	import Modal from '@/components/Modal'

	import * as PIXI from 'pixi.js'

	import texturesUrl from '@/data/textures'

	export default {
		name: 'Page',
		components: {
			HeaderView,
			MenuView,
			About,
			Revolution,
			Gastronomy,
			Stagnation,
			Crazy,
			Changes,
			Product,
			Modal,
		},
		data() {
			return {
				currentSection: null,
				pages: [
					'about',
					'revolution',
					'gastronomic',
					'stagnant',
					'dinners',
					'changes',
					'100let'
				],
				menuOpened: false,
				scrollState: true,
			}
		},
		created() {
			Events.$on('menu-open', () => this.menuOpened = true)
			Events.$on('menu-close', () => this.menuOpened = false)

			Events.$on('stop-page-scroll', () => this.scrollState = false)
			Events.$on('start-page-scroll', () => this.scrollState = true)

			// load assets to pixi
			PIXI.loader
				.add([
					Object.values(texturesUrl.revolution),
					Object.values(texturesUrl.gastronomy),
					Object.values(texturesUrl.stagnation),
					Object.values(texturesUrl.crazy),
					Object.values(texturesUrl.changes),
				])
		},
		mounted() {
			let routeName = this.$route.name.toLowerCase()
			if (this.pages.indexOf(routeName) > -1) this.currentSection = routeName

			let throttleTime = 1500

			this.$el.addEventListener('mousewheel', e => this.preventNativeScroll(e) )
			this.$el.addEventListener('DOMMouseScroll', e => this.preventNativeScroll(e) )

			this.$el.addEventListener('mousewheel', _.throttle(e => this.scroll(e), throttleTime, { trailing: false }) )
			this.$el.addEventListener('DOMMouseScroll', _.throttle(e => this.scroll(e), throttleTime, { trailing: false }) )


			document.addEventListener('keyup', e => {

				let next = this.pages[this.pages.indexOf(this.$route.name) + { 38: -1, 40: 1 }[e.keyCode]]

				if (next) {
					this.currentSection = next
					this.$router.push(`/${next}`)
				}
			})
		},
		watch: {
			'$route'(to, from) {
				let routeName = to.name.toLowerCase()

				this.pages.indexOf(routeName) > -1 ? this.currentSection = routeName : this.currentSection = null

				Events.$emit('menu-close')

				ga('send', 'event', 'page', `from ${from.name}`, `to ${to.name}`)
			}
		},
		methods: {
			checkDevice() {
				this.device = (window.innerWidth >= 960) ? 'desktop' : 'mobile'
			},
			preventNativeScroll(e) {
				if (
					this.device === 'desktop' &&
					this.currentSection &&
					this.scrollState
				) {
					e.preventDefault()
				}
			},
			scroll(e) {
				if (this.device === 'mobile') return
				if (this.menuOpened) return
				if (!this.currentSection) return
				if (!this.scrollState) return

				let delta = (e.wheelDelta || -e.detail)

				let next
				let current = this.pages.indexOf(this.currentSection)

				if (delta < 0) {
					current === this.pages.length - 1 
						// ? next = this.pages[0]
						? next = this.pages[this.pages.length - 1] // no lopp
						: next = this.pages[current + 1]
				} else {
					current === 0
						// ? next = this.pages[this.pages.length - 1]
						? next = this.pages[0] // no loop
						: next = this.pages[current - 1]
				}

				this.currentSection = next
				this.$router.push(`/${next}`)
			}
		}
	}
</script>


<template>
	<main>
		<!-- temp -->
		<div class="progress" :style="{
			width: 100 * (this.pages.indexOf(this.currentSection) + 1) / this.pages.length + '%' 
		}"/>
		<!-- temp -->

		<div class="sections-wrap">
			<about :class="{ active: currentSection === 'about' }"/>
			<revolution :class="{ active: currentSection === 'revolution' }"/>
			<gastronomy :class="{ active: currentSection === 'gastronomic' }"/>
			<stagnation :class="{ active: currentSection === 'stagnant' }"/>
			<crazy :class="{ active: currentSection === 'dinners' }"/>
			<changes :class="{ active: currentSection === 'changes' }"/>
			<product :class="{ active: currentSection === '100let' }"/>
		</div>

		<header-view />
		<menu-view />
		<modal />
	</main>
</template>


<style lang="less">

	body {
		font-family: 'Montserrat', sans-serif;
		font-weight: 400;
		color: #FFFEFE;
		background-color: #F3EBD1;
		-webkit-tap-highlight-color: transparent;
	}

	h1, h2, h3, h4 {
		font-family: 'Luga', sans-serif;
		font-weight: 400;
	}

	section {
		position: relative;
		height: auto;

		@media (min-width: 960px) {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			height: 100vh;
			opacity: 0;
			pointer-events: none;
			transition: opacity .4s;
		}

		&.active {
			opacity: 1;
			pointer-events: all;
			z-index: 3;
		}

		h1, h2, h3 {
			text-align: center;
		}

		h2 {
			font-size: 50px;
			color: #F1338D;
		}

		p {
			font-size: 14px;
			color: #252525;
		}
	}

	.progress {
		display: none; // temp
		position: absolute;
		left: 0;
		bottom: 0;
		height: 8px;
		background-color: #FFF;
		z-index: 2;
		transition: width .2s;
	}


	.scroll-back,
	.scroll-forward {
		animation: levitate 1.2s ease-in-out infinite;

		img {
			width: 40px;
			height: 35px;
		}
	}

	@keyframes levitate {
		0% {
			transform:translateY(-2px)
		}
		50% {
			transform:translateY(4px)
		}
		100% {
			transform:translateY(-2px)
		}
	}

</style>