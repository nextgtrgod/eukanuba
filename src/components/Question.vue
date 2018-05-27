<template>
<div class="question" :class="{ answered }">
	<h3>{{ about }}</h3>
	<h2>{{ locale[type] }}</h2>
	<div class="answers" :data-count="options.length">
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
	<button class="next" @click="next">Далее</button>
</div>
</template>


<script>
import keys from '@/utils/keys'
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

			if (this.selected.length) this.answered = true
		}
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
		margin: 40px auto;
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
