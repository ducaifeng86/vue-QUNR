<template>
	<div class="header">
		<router-link to="/">
			<div class="iconfont header-back">&#xe892;</div>
		</router-link>
		城市选择
	</div>
</template>

<script>
	export default {
		name:'HeaderCity'
	}
</script>

<style lang="stylus" scoped>
	@import '../../../assets/styles/varibles.styl'
	.header
		position:relative
		line-height:.86rem
		text-align:center
		color:#fff
		background:$bgColor
		font-size:.32rem
		.header-back
			position:absolute
			width:.64rem
			text-align:center
			font-size:.4rem
			color:#fff
</style>