<template>
<section id="interview">
	<img class="logo" src="../assets/images/logo-eukanuba.svg">
	<div class="wrapper">
		<p>Выберите параметры, которые помогут нам подобрать лучшую программу для вас и вашей собаки</p>
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
</section>
</template>


<script>
import Events from '@/events'
import { mapState } from 'vuex'
import keysOf from '@/utils/keysOf'
import Question from '@/components/Question';
import options from '@/data/options'

export default {
	name: 'InterviewPage',
	components: {
		Question,
	},
	data() {
		return {
			options,
			currentIndex: 0,
			hidden: [],
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
	opacity: 0;
	animation: fade-in .6s forwards;
}

.logo {
	position: absolute;
	top: 30px;
	right: 0;
	width: 295px;
	z-index: 1;
}

.wrapper {
	position: absolute;
	top: 60px;
	left: 80px;
	right: 80px;
	bottom: 60px;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #E6E9EC;

	p {
		margin: 0;
		margin-bottom: 35px;
		font-family: @font-gotham;
		font-size: 16px;
		font-weight: 400;
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
