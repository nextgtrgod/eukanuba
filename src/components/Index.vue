<template>
<main>
	<img class="bg" src="../assets/images/main-page-bg.jpg">
	<a
		class="logo"
		@click="linkClick('https://www.eukanuba.ru/')"
		href="https://www.eukanuba.ru/"
		target="_blank"
	>
		<img src="../assets/images/logo-eukanuba.svg">	
	</a>
	<span class="this-is-the-dog">Это собака Eukanuba</span>
	<section>
		<article>
			<img src="../assets/images/main-page-title.svg">
			<p>Жизнь в большом городе часто не оставляют времени на спорт и полезные для здоровья активности. Но, если у вас есть собака, вы сможете поддерживать отличную физическую форму вместе с вашим четвероногим тренером каждый день. Ведь любая прогулка  - это способ двигаться больше и дольше и не останавливаться на достигнутом. Главное - подобрать ту программу тренировок, которая подойдет вашей собаке и лично вам.</p>
			<router-link class="button" to="/interview">Подобрать программу</router-link>
		</article>
	</section>
</main>
</template>


<script>
import Events from '@/events'

export default {
	name: 'MainPage',
	methods: {
		linkClick: url => ga('send', 'event', 'link', url),
	},
}
</script>


<style lang="less" scoped>
@import '../styles/variables';
@import '../styles/animations';


img.bg {
	position: absolute;
	top: 40px;
	right: 40px;
	bottom: 40px;
	height: calc(~'100% - 80px');
	opacity: 0;
	animation: fade-in .6s forwards;
}

a.logo {
	position: absolute;
	width: 250px;
	top: 40px;
	right: 40px;
	opacity: 0;
	animation: fade-in .5s forwards;
	animation-delay: 1.8s;
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
	opacity: 0;
	animation: fade-in .4s forwards;
	animation-delay: .8s;
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
	transform: translateX(-100%);
	animation: move-right .5s forwards;
	animation-delay: .4s;

	// @media (min-width: 1200px) {
	// 	width: 45%;
	// }

	img {
		margin-bottom: 5px;
	}

	&:before,
	&:after {
		content: '';
		position: absolute;
		background-color: #FFF;
	}

	&:before {
		left: 40px;
		top: calc(~'50% - 150px');
		width: 4px;
		height: 100px;
		transform: scaleY(0);
		transform-origin: 50% 0%;
		animation: scale-bottom .4s forwards;
		animation-delay: 1.6s;
	}

	&:after {
		right: 40px;
		bottom: 40px;
		width: 100px;
		height: 4px;
		transform: scaleX(0);
		transform-origin: 0% 50%;
		animation: scale-right .4s forwards;
		animation-delay: 1.6s;
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

	img, p, a {
		opacity: 0;
		animation: fade-in .6s forwards;
		animation-delay: 1.2s;
	}

	img {
		align-self: flex-start;
		width: 540px;
		margin-left: -60px;
		animation-duration: .8s;
	}

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 110px;
		background-color: @color-main;
		transform: translateY(-100%);
		animation: move-down .6s forwards;
		animation-delay: 1s;
	}
}

p {
	margin: 25px 0;
	font-size: 16px;
	font-weight: 300;
	line-height: 24px;
}

a.button {
	padding: 16px 20px;
	padding-top: 19px;
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