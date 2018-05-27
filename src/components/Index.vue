<script>
import Events from '@/events'

export default {
	name: 'Page',
}
</script>


<template>
<main>
	<img class="bg" src="../assets/images/main-page-bg.jpg">
	<img class="logo" src="../assets/images/logo-eukanuba.svg">
	<span class="this-is-the-dog">Это собака Eukanuba</span>
	<section>
		<article>
			<img src="../assets/images/main-page-title.svg">
			<p> Жизнь в большом городе часто не оставляют времени на спорт и полезные для здоровья активности. Но, если у вас есть собака, вы сможете поддерживать отличную физическую форму вместе с вашим четвероногим тренером каждый день. Ведь любая прогулка  - это способ двигаться больше и дольше и не останавливаться на достигнутом. Главное - подобрать ту программу тренировок, которая подойдет вашей собаке и лично вам.</p>
			<router-link to="/test">Подобрать программу</router-link>
		</article>
	</section>
</main>
</template>


<style lang="less" scoped>
@import '../styles/variables';
@import '../styles/mixins';


.bg {
	position: absolute;
	top: 40px;
	right: 40px;
	bottom: 40px;
	height: calc(~'100% - 80px');
}

.logo {
	position: absolute;
	width: 250px;
	top: 40px;
	right: 40px;
}

.this-is-the-dog {
	position: absolute;
	right: 75px;
	bottom: 60px;
	font-family: @font-roboto;
	font-size: 24px;
	font-weight: 700;
	line-height: 45px;
	color: #FFF;
}

section {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	width: 595px;
	height: 100vh;
	background-color: #EF33A2;
	color: #FFF;

	img {
		margin-bottom: 5px;
	}
}

article {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	max-width: 540px;
	height: 100%;
	padding-left: 60px;
	padding-right: 50px;
	box-sizing: border-box;

	&>* {
		position: relative;
	}

	img {
		width: 540px;
		margin-left: -60px;
		align-self: flex-start;
	}

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 110px;
		background-color: @color-main;
	}
}

p {
	margin: 25px 0;
	font-size: 16px;
	font-weight: 300;
	line-height: 24px;
}

a {
	padding: 15px 20px;
	padding-top: 17px;
	font-size: 12px;
	text-transform: uppercase;
	border: 2px solid #FFF;
	transition: all .2s;

	&:hover {
		background-color: #FFF;
		color: @color-main;
	} 
}

</style>