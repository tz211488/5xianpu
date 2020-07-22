<template>
	<view class="item u-relative">
		
		<text class="item-icon u-absolute" :style="{bottom:index*25 +'rpx'}">O</text>
		
	</view>
</template>

<script>
	export default {
		props:{
			index:Number
			
		},
		data() {
			return {
				a:1
				
			};
		},
		computed:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.item{

		height: 400rpx;
		width: 100rpx;
		background-color: green;
	}
	.item-icon{
		font-size: 47rpx;
		background-color: red;
		line-height: 50rpx;
		height: 50rpx;
	}

</style>
