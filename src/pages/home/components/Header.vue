<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe892;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe609;</span>
			输入城市/景点/游玩景点
		</div>
		<div class="header-right">城市
			<span class="iconfont">&#xe6aa;</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'HomeHeader'
	}
</script>

<style lang='stylus' scoped>
	.header
		display:flex;
		line-height:.86rem;
		background:#00bcd4;
		color:#fff;
		.header-left
			width:.64rem;
			float:left;
			.back-icon
				font-size:.4rem
		.header-input
			flex:1;
			margin-top:.12rem;
			margin-left:.12rem
			height: .62rem
			line-height:.62rem
			background:#fff
			border-radius:.05rem
			color:#ccc
		.header-right
			width:1.24rem;
			float:right;
			text-align: center;
</style>