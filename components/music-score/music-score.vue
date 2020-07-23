<template>
	<view>
		


		<view class="u-relative">
			<view class="u-absolute content-wrapper u-flex">
				<image class="icon" src="@/static/high-icon.png" mode="aspectFit"></image>
				<view class="content-container u-flex-1">
					<view class="items-wrapper">
						<vocal-item v-for="(item,index) in itemList" :key="index" :index="item"></vocal-item>
					</view>
					 <!-- <scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
					                    <view id="demo1" class="scroll-view-item_H uni-bg-red">A</view>
					                    <view id="demo2" class="scroll-view-item_H uni-bg-green">B</view>
					                    <view id="demo3" class="scroll-view-item_H uni-bg-blue">C</view>
					                </scroll-view> -->
									
									<!-- <vocal-item v-for="item in itemList" :key="item" :index="item"></vocal-item> -->
				
				  <!-- <vocal-item v-for="item in itemList" :key="item" :index="item"></vocal-item> -->
				</view>
			</view>

			<view class="u-border">
				<view class="item no-bottom-border"></view>
				<view class="item"></view>
				<view class="item"></view>
				<view class="item"></view>
				<view class="item"></view>
				<view class="item"></view>
				<view class="item no-bottom-border"></view>
				<view class="item no-bottom-border"></view>
			</view>
			
		</view>

	</view>
</template>

<script>
export default {
	data() {
		return {
			itemList:[]
		};
	},
	methods:{
		update(item){
			console.log(item);
			this.itemList = item;
		}
	}
};
</script>

<style lang="scss" scoped>
.item {
	height: 50rpx;
	border-bottom: 1rpx solid black;
	box-sizing: border-box;
	&.no-bottom-border {
		border-bottom: 1rpx dashed #f4f4f5;
	}
}

.content-wrapper{

	height: 100%;	
	width: 100%;
	
}
.content-container{
	
	height: 100%;

	
	

}
.items-wrapper{
	width: 100%;
	height: 100%;
	padding: 0 40rpx;
	
	display: flex;
	justify-content: space-around;
	
}
.icon {
	width: 150rpx;
	height: 150rpx;
	
}
</style>
