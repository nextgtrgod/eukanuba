<template>
<div class="question" :class="{ answered }">
	<h3>{{ about }}</h3>
	<h2>{{ locale[type] }}</h2>

	<div v-if="type === 'gender'" class="answers gender">
		<button
			class="checkbox"
			:class="{ selected: selected === 'мужской' }"
			@click="select('мужской')"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.1 78.7">
  				<path d="M20 33.5c8.6 0 14.6.4 17.6.7-1.1 3.6-4 11.2-8 20.4-4.2 9.8-7.3 16-9.1 19.1-1.9-3.4-5.2-10.1-9.1-19.1-4-9.3-6.9-16.9-8-20.5 2.8-.3 8.2-.6 16.6-.6m0-3C10.2 30.5.6 31 0 32c-1.2 2.1 17.8 46.6 20.5 46.6 2.7 0 21.7-44.7 20.5-46.6-.5-1-10.8-1.5-21-1.5zM20.6 3c5.6 0 10.2 4.6 10.2 10.2s-4.6 10.2-10.2 10.2-10.2-4.6-10.2-10.2S15 3 20.6 3m0-3C13.3 0 7.4 5.9 7.4 13.2s5.9 13.2 13.2 13.2 13.2-5.9 13.2-13.2S27.8 0 20.6 0z"/>
			</svg>
			<span/>
		</button>
		<button
			class="checkbox"
			:class="{ selected: selected === 'женский' }"
			@click="select('женский')"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.1 78.7">
				<path d="M20.6 35.4c1.9 3.4 5.2 10.1 9.1 19.1 4 9.3 6.9 16.9 8 20.5-2.7.3-8.1.7-16.6.7-8.6 0-14.6-.4-17.6-.7 1.1-3.6 4-11.2 8-20.4 4.2-9.9 7.3-16.1 9.1-19.2m0-4.9C17.9 30.5-1.1 75.2.1 77.1c.6 1 10.9 1.5 21 1.5 9.8 0 19.4-.5 20-1.5 1.1-2.1-17.8-46.6-20.5-46.6zm0-27.5c5.6 0 10.2 4.6 10.2 10.2s-4.6 10.2-10.2 10.2-10.2-4.6-10.2-10.2S15 3 20.6 3m0-3C13.3 0 7.4 5.9 7.4 13.2s5.9 13.2 13.2 13.2 13.2-5.9 13.2-13.2S27.8 0 20.6 0z"/>
			</svg>
			<span/>
		</button>
	</div>

	<div v-else class="answers" :data-count="options.length">
		<button
			v-for="(option, index) in options"
			:key="index"
			class="checkbox"
			:class="{ selected: selected === option }"
			@click="select(option)"
		>
			<span/>
			<p :data-description="description[option]">{{ option }}</p>
		</button>
	</div>
	<button class="next" @click="next" ref="next">
		Далее
	</button>
</div>
</template>


<script>
import keysOf from '@/utils/keysOf'
import locale from '@/data/locale'
import description from '@/data/description'

export default {
	name: 'Question',
	props: {
		value: {
			type: String,
			default: ''
		},
		options: {
			type: Array,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		next: {
			type: Function,
			required: true,
		},
	},
	data() {
		return {
			locale,
			description,
			answered: false,
			about: 'о вас',
			selected: this.value,
		}
	},
	created() {
		this.about = (this.type === 'old') || (this.type === 'body') || (this.type === 'size')
			? 'о вашей собаке'
			: 'о вас'
		
		this.selected.length && (this.answered = true)
	},
	methods: {
		select(value) {
			this.selected = value
		},
	},
	watch: {
		value(value) {
			this.selected = value.trim()
		},
		selected(value) {
			this.$emit('input', value.trim())

			value.length && (this.answered = true)
			this.$refs['next'].focus()
		},
	},
}
</script>


<style lang="less" scoped>
@import '../styles/variables';
@import '../styles/animations';


.question {
	position: relative;
	width: 570px;
	height: 380px;
	padding-top: 50px;
	background-color: #FFF;
	text-align: center;
	box-shadow: 0 6px 10px 1px rgba(0, 0, 0, 0.05);
	box-sizing: border-box;

	&:before,
	&:after {
		content: '';
		position: absolute;
		background-color: @color-main;
		opacity: 1;
		transition: opacity .2s;
	}

	&:before {
		left: 20px;
		top: calc(~'50% - 100px');
		width: 4px;
		height: 100px;
	}

	&:after {
		right: 30px;
		bottom: 20px;
		width: 100px;
		height: 4px;
	}

	&.answered {
		&:before,
		&:after {
			opacity: .2;
		}

		button.next {
			opacity: 1;
			pointer-events: all;
		}
	}
}

h2, h3 {
	margin: 0;
	text-transform: uppercase;
	font-family: @font-roboto;
	font-weight: 700;
	line-height: 1;
}

h2 {
	margin-bottom: 25px;
	font-size: 24px;
	color: #000;
}

h3 {
	margin-bottom: 10px;
	font-size: 18px;
	font-weight: 700;
	color: @color-main;
	text-transform: uppercase;
}

.answers {
	display: inline-flex;
	margin: 0 auto;
	padding-left: 35px;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	box-sizing: border-box;

	&[data-count="4"] {
		max-width: 500px;
		margin: 45px auto;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: flex-start;

		button {
			flex: 1 0 50%;
			justify-content: flex-start;
		}
	}

	&.gender {
		flex-direction: row;
		padding-left: 0;

		button.checkbox {
			min-width: 50px;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			svg {
				margin-bottom: 10px;
			}

			span {
				margin: 0;
			}
		}
	}
}

button.checkbox {
	min-width: 180px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 10px 0;
	font-family: @font-gotham;
	font-size: 15px;
	font-weight: 400;
	color: #000;

	&:hover,
	&.selected {
		span {
			background-color: @color-main;
		}
	}

	p {
		margin: 0;
		margin-top: 3.5px;
		&:first-letter {
			text-transform: uppercase;
		}

		&:after {
			content: attr(data-description);
			margin-left: 4px;
			color: #7d7d7d;
		}
	}

	span {
		width: 20px;
		height: 20px;
		margin-right: 10px;
		border: 2px solid @color-main;
		border-radius: 50%;
		background-color: #FFF;
		transition: background-color .2s;
		box-shadow: inset 0 0 0 3px #FFF;
	}

	svg {
		height: 40px;
	}
}

button.next {
	position: absolute;
	left: 50%;
	bottom: 45px;
	margin: auto;
	transform: translateX(-50%);
	padding: 15px 32px;
	padding-top: 17px;
	font-family: @font-gotham;
	font-size: 12px;
	font-weight: 400;
	text-transform: uppercase;
	color: #FFF;
	background-color: @color-main;
	opacity: .2;
	transition: opacity .2s;
	pointer-events: none;
}

</style>
