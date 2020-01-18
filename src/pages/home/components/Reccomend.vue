<template>
	<div>
		<div class="reccomend-title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item in recommendList" :Key="item.id">
				<img class="item-img" :src="item.imgUrl" />
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
	
</template>

<script>
	export default{
		name:'HomeReccomend',
		props:{
			recommendList:Array
		}
	}
</script>

<style lang="stylus" scoped>
	.reccomend-title
		margin-top:.2rem
		line-height:.8rem
		text-indent:.2rem
		background:#eee
	.item
		overflow:hidden
		display:flex
		height:1.9rem
		.item-img
			width:1.7rem
			height:1.7rem
			padding:.1rem
		.item-info
			flex:1
			padding:.1rem
			.item-title
				line-height:.54rem
				font-size:.32rem
			.item-desc
				line-height:.4rem
				color:#ccc
</style>