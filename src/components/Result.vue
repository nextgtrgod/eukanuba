<template>
<section id="result">
	Result
</section>
</template>


<script>
export default {
	name: 'ResultPage',
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
