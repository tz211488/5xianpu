<template>
	<view class="item u-relative" :style="{bottom: index*25 + 'rpx'}">
		
		
		<text v-if="showNotice" class="item-icon-notice u-absolute">{{noticeText}}</text>
		<text class="item-icon u-absolute">O</text>
		
		
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
			
			showNotice(){
				return this.$store.state.showNotice;
			},
			noticeText(){
				const noticeTextList = ['do','rui','mi','fa','so','la','xi','dwo']
				return noticeTextList[this.index-1]
			}
			
			
		}
	}
</script>

<style lang="scss" scoped>
	.item{
     
		
	
		
		align-self: flex-end;
		// margin-left:60rpx;
	}
	.item-icon{
		font-size: 50rpx;
	
		line-height: 50rpx;
		height: 50rpx;
	}
	.item-icon-notice{
		top: -50rpx;
	}

</style>
