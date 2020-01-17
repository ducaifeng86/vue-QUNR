<template>
	<div>
		<div class="reccomend-title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item in recommendList" :Key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl" />
				</div>
				<div class="item-info">
					<p class="item-title">{{item.recommendTitle}}</p>
					<p class="item-desc">{{item.recommendDesc}}</p>
				</div>
			</li>
		</ul>
	</div>
	
</template>

<script>
	export default{
		name:'HomeWeekend',
		data(){
			return {
					recommendList:[{
						id:'0001',
						imgUrl:'',
						recommendTitle:'表题呀哈哈表题呀哈哈表题呀哈哈',
						recommendDesc:'描述呀描述呀描述呀描述呀'
					},{
						id:'0002',
						imgUrl:'',
						recommendTitle:'表题呀哈哈表题呀哈哈表题呀哈哈',
						recommendDesc:'描述呀描述呀描述呀描述呀'
					},{
						id:'0003',
						imgUrl:'',
						recommendTitle:'表题呀哈哈表题呀哈哈表题呀哈哈',
						recommendDesc:'描述呀描述呀描述呀描述呀'
				}]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.reccomend-title
		margin-top:.2rem
		line-height:.8rem
		text-indent:.2rem
		background:#eee
	.item-img-wrapper
		overflow:hidden
		height:0
		padding-bottom:33.9%
		.item-img
			width:100%
		.item-info
			padding:.1rem
			.item-title
				line-height:.54rem
				font-size:.32rem
			.item-desc
				line-height:.4rem
				color:#ccc
</style>