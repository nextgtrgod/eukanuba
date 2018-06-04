<template>
<section id="result">
	Result
</section>
</template>


<script>
import Events from '@/events'
import { mapState } from 'vuex'
import results from '@/data/results'

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
	opacity: 0;
	animation: fade-in .4s forwards;
}


</style>
