<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
	    <!-- slides -->
	    <swiper-slide v-for="item in swiperList" :key="item.id">
	    	<img :src="item.imgUrl" class="swiper-img"/>
	    </swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
  </div>
</template>

<script>
	export default {
		name:'HomeSwiper',
		data(){
			return {
				swiperOption:{
					pagination:'.swiper-pagination',
					loop:true
				},
				swiperList:[
					{
						id:'001',
						imgUrl:require('../../../assets/imgs/2.jpg')
					},
					{
						id:'002',
						imgUrl:require('../../../assets/imgs/2.jpg')
					},
					{
						id:'003',
						imgUrl:require('../../../assets/imgs/3.jpg')
					}
				]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet-active
	    background: #fff !important
	.wrapper
		overflow:hidden
		width:100%
		height:0
		padding-bottom:30.48%
		background:#ccc
	.swiper-img
		width:100%
</style>