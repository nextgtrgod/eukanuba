<template>
<section id="places">

	<!-- city select -->

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
				<p>{{ place.description }}</p>
				<a :href="getMapLink(place.latLng)" target="_blank">
					{{ place.address }}
				</a>
			</span>
		</li>
	</ul>
</section>
</template>


<script>
import Events from '@/events'
import { mapState } from 'vuex'
import places from '@/data/places'

export default {
	name: 'PlacesPage',
	data() {
		return {
			places,
		}
	},
	methods: {
		getMapLink: latLng => `https://www.google.com/maps/?q=${latLng[0]},${latLng[1]}`,
		getPlaceImage: id => {
			try {
				return require(`@/assets/images/places/${id}.jpg`)
			} catch (e) {
				console.log(e)
				return 'http://via.placeholder.com/400x260'
			}
		},
	},
	computed: {
		...mapState({
			selected: state => state.selected
		}),
		city() {
			return this.places[this.selected.city]
		},
	},
}
</script>


<style lang="less" scoped>
@import '../styles/variables';
@import '../styles/animations';


#places {
	max-width: 720px;

	@media (min-width: 960px) {
		max-width: 1120px;
	}

	margin: 60px auto;
	margin-bottom: 0;
	background-color: @color-main;
	color: #FFF;
	opacity: 0;
	animation: fade-in .4s forwards;
}


</style>
