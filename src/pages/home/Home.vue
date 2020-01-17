<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<home-reccomend></home-reccomend>
		<home-weekend></home-weekend>
	</div>
</template>

<script>
	import HomeHeader from './components/Header.vue'
	import HomeSwiper from './components/Swiper.vue'
	import HomeIcons from './components/Icons.vue'
	import HomeReccomend from './components/Reccomend.vue'
	import HomeWeekend from './components/Weekend.vue'
	export default {
		name:'Home',
		components:{
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeReccomend,
			HomeWeekend
		}
	}
</script>

<style>
</style>