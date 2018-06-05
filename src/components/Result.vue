<template>
<div id="result">
	<img class="logo" src="../assets/images/logo-eukanuba.svg">
	<section class="dog">
		<div class="column image-wrap">
			<img src="../assets/images/dog.jpg">
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
					<h1>20</h1>
					<h2>минут</h2>
					<h3>2 раза в день</h3>
				</div>
			</div>

			<div class="activities">
				<h3>Наиболее подходящие активности<br>во время прогулки</h3>
				<ul>
					<li>
						<span class="icon">
							<img src="../assets/images/ball.svg">
						</span>
						<span class="caption">Игра в мяч</span>
					</li>
					<li>
						<span class="icon">
							<img src="../assets/images/aport.svg">
						</span>
						<span class="caption">Игры "апорт"</span>
					</li>
					<li>
						<span class="icon">
							<img src="../assets/images/run.svg">
						</span>
						<span class="caption">Бег с собакой</span>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="food">

	</section>

	<section class="bloggers">

	</section>

	<section class="man">
		<div class="column text-wrap">
			<div class="info">
				<p><b>Пол: </b>{{ selected.gender }}</p>
				<p><b>Возраст: </b>{{ selected.age }}</p>
				<p><b>Место прогулки: </b>{{ selected.place }}</p>
			</div>

			<div class="exercises">
				<span class="icon">
					<img src="../assets/images/heaviness.svg">
				</span>
				<span class="text">
					За 20 минут проглуки с собакой 
					вы успеете выполнить комплекс эффективных приседаний, выпадов 
					и отжиманий.
					<span>2 подхода по 12 раз</span>
					И не забудьте про разминку!
				</span>
			</div>

			<div class="water">
				<span class="text">
					После окончания тренировки необходимо восполнить водный баланс негазированной минеральной водой.
				</span>
				<span class="icon">
					<img src="../assets/images/bottle.svg">
				</span>
			</div>
		</div>
		<div class="column image-wrap">
			<img src="../assets/images/man.jpg">
		</div>
	</section>

	<section class="places">
		<h2>Рекомендуем вам прогуляться с вашим питомцем в:</h2>
		<ul>
			<li>

			</li>
		</ul>
	</section>
</div>
</template>


<script>
import Events from '@/events'
import { mapState } from 'vuex'
import results from '@/data/results'
import places from '@/data/places'

export default {
	name: 'ResultPage',
	computed: {
		...mapState({
			selected: state => state.selected
		}),
	},
	created() {
		console.log(this.selected)
	},
}
</script>


<style lang="less" scoped>
@import '../styles/variables';
@import '../styles/animations';


#result {
	max-width: 720px;

	@media (min-width: 960px) {
		max-width: 1120px;
	}

	margin: 60px auto;
	margin-bottom: 0;
	background-color: #e6e9ec;
	opacity: 0;
	animation: fade-in .4s forwards;
}

.logo {
	position: absolute;
	top: 30px;
	right: 0;
	width: 295px;
	z-index: 1;
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
	font-size: 24px;
	line-height: 30px;
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
		display: block;
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

	.image-wrap {
		display: none;
		// padding-top: 107.5%;

		@media (min-width: 960px) {
			display: block;
			padding-top: 53.75%;
		}
	}

	.text-wrap {
		p:nth-of-type(2n) {
			margin-right: 0;
		}
	}

	.info {
		padding: 35px;
		padding-top: 45px;
		padding-right: 0;
		background-color: #EEF0F2;

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
		padding: 0 35px;
		padding-bottom: 25px;
		background-color: #EEF0F2;

		div {
			position: relative;
			display: inline-flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			&:before {
				content: '';
				position: absolute;
				top: 10px;
				left: 0;
				right: 0;
				margin: auto;
				width: 145px;
				height: 145px;
				border-radius: 50%;
				background-color: #d7dbe1;
				z-index: -1;
			}

			&>* {
				font-family: @font-gotham;
				color: @color-main;
				text-transform: none;
			}

			h1 {
				font-size: 140px;
				font-weight: 700;
				line-height: 110px;
			}

			h2 {
				font-size: 36px;
				line-height: 1.2;
			}

			h3 {
				font-size: 24px;
				font-weight: 400;
				color: #000;
			}
		}
	}

	.activities {
		padding: 20px 35px;
		padding-top: 25px;

		h3 {
			margin: 0 auto;
			margin-bottom: 10px;
			text-align: center;

			@media (min-width: 960px) {
				margin-left: 0;
				margin-bottom: 20px;
				text-align: left;
			}
		}

		ul {
			display: flex;
			align-items: flex-start;
			justify-content: center;

			li {
				display: inline-flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin: 0 30px;

				.icon {
					position: relative;
					width: 110px;
					height: 110px;

					img {
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						margin: auto;
						width: 100%;
						height: auto;
						max-height: 60px;
					}

					&:before {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						width: 90px;
						height: 90px;
						margin: auto;
						border-radius: 50%;
						background-color: #d7dbe1;
					}
				}

				.caption {
					text-align: center;
					font-size: 16px;
					line-height: 20px;
				}
			}
		}
	}
}


.food {
	padding: 35px 80px;
	background-color: @color-main;
	height: 330px;
	box-sizing: border-box;
}


.bloggers {
	height: 200px;
	background-color: #052046;
}


.man {
	display: flex;
	background-color: #dbdfe4;

	.info {
		padding: 35px;
		padding-top: 40px;
		padding-right: 0;
		background-color: #e6e9ec;

		p:last-child {
			margin-right: 0;
		}
	}

	.exercises {
		display: flex;
		padding: 0 35px;
		padding-bottom: 35px;
		background-color: #e6e9ec;

		.icon {
			flex: 0 0 auto;
			position: relative;
			display: block;
			width: 80px;
			height: 80px;
			margin-top: 10px;
			margin-right: 30px;
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
			max-width: 300px;
			font-size: 16px;
			line-height: 20px;

			span {
				display: block;
				margin: 10px 0;
				opacity: .6;
			}
		}
	}

	.water {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		padding: 50px 35px;
		padding-top: 40px;
		padding-right: 100px;

		.text {
			max-width: 300px;
			font-size: 18px;
			line-height: 28px;
		}

		.icon {
			position: relative;
			display: block;
			width: 105px;
			height: 105px;
			margin-top: 15px;
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
		padding-top: 42.946%;
	}
}

.places {
	padding: 10px 20px;
	padding-top: 60px;
	background-color: @color-main;
	color: #FFF;

	h2 {
		text-align: center;
		margin: 0;
		margin-bottom: 35px;
	}

	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		li {
			width: 750px;
			height: 260px;
			margin-bottom: 40px;
			border: 1px solid #FFF;
		}
	}
}


</style>
