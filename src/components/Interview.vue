<template>
<section id="interview">
	<img class="logo" src="../assets/images/logo-eukanuba.svg">
	<div class="wrapper">
		<p>Выберите параметры, которые помогут нам подобрать лучшую программу для вас и вашей собаки</p>
		<question
			v-if="currentQuestion === key"
			v-for="(value, key) in options"
			:key="key"
			:options="value"
			:type="key"
			:next="moveNext"
			v-model="selected[key]"
		/>
	</div>
</section>
</template>


<script>
import keys from '@/utils/keys'
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
			selected: { },
			currentQuestion: '',
		}
	},
	created() {
		Object.keys(this.options).map(key => {
			this.selected[key] = ''
		})

		this.currentQuestion = Object.keys(this.options)[0]

		console.dir(this.selected)
	},
	methods: {
		moveNext() {
			let index = keys(this.selected).indexOf(this.currentQuestion) + 1

			if (index > keys(this.selected).length - 1) index = keys(this.selected).length - 1

			this.currentQuestion = keys(this.selected)[index]
		}
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

</style>
