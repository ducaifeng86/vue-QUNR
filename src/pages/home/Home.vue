<template>
	<div>
		<home-header :city="city"></home-header>
		<home-swiper :swiperList="swiperList"></home-swiper>
		<home-icons :iconList="iconList"></home-icons>
		<home-reccomend :recommendList="recommendList"></home-reccomend>
		<home-weekend :weekendList="weekendList"></home-weekend>
	</div>

</template>

<script>
	import HomeHeader from './components/Header.vue'
	import HomeSwiper from './components/Swiper.vue'
	import HomeIcons from './components/Icons.vue'
	import HomeReccomend from './components/Reccomend.vue'
	import HomeWeekend from './components/Weekend.vue'
	import axios from 'axios'
	export default {
		name:'Home',
		components:{
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeReccomend,
			HomeWeekend
		},
		data(){
			return {
				city:'',
				swiperList:[],
				iconList:[],
				recommendList:[],
				weekendList:[]
			}
		},
		mounted(){
			this.getHomeInfo()
		},
		methods:{
			getHomeInfo(){
				axios.get('/api/index.json').then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc(res){
				res = res.data
				if(res.ret && res.data){
					const data = res.data
					this.city = data.city
					this.swiperList = data.swiperList
					this.iconList = data.iconList
					this.recommendList = data.recommendList
					this.weekendList = data.weekendList
				}
			}
		}
	}
</script>

<style>
</style>