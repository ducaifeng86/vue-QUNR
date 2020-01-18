<template>
	<div>
		<div class="reccomend-title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item in weekendList" :Key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl" />
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
	
</template>

<script>
	export default{
		name:'HomeWeekend',
		props:{
			weekendList:Array
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
		padding-bottom:37.09%
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