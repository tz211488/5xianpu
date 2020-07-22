<template>
	<view>
		<music-score ref="music"></music-score>
		<view class="u-flex u-p-26">
			<u-button :custom-style="customStyle" :ripple="true" @click="update">更新</u-button>
			<u-button :custom-style="customStyle" :ripple="true" @click="show">提示</u-button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customStyle:{
					height: '200rpx',
					width:'200rpx'
				}
				
			};
		},
		methods:{
			update(){
				this.$refs.music.update([1,2,3,5])
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.btn-item{
		height: 300rpx;
		width: 200rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

</style>
