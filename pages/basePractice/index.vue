<template>
	<view>
		<music-score ref="music"></music-score>
		<view class="u-flex u-p-26">
			<u-button :custom-style="customStyle" :ripple="true" @click="update"></u-button>
			<u-button :custom-style="customStyle" :ripple="true" @click="switchNotice"></u-button>
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
			randomNum(minNum, maxNum){
				switch (arguments.length) {
				    case 1:
				      return parseInt(Math.random() * minNum + 1, 10);
				      break;
				    case 2:
				      return parseInt(Math.random() * ( maxNum - minNum + 1 ) + minNum, 10);
				      //或者 Math.floor(Math.random()*( maxNum - minNum + 1 ) + minNum );
				      break;
				    default:
				      return 0;
				      break;
				  }
				
			},
			update(){
				let tempList = []
				for(var i=0;i<5;i++){
					tempList.push(this.randomNum(1,8))
				}
				console.log('orignal',tempList)
				this.$refs.music.update(tempList)
			},
			switchNotice(){
				this.$store.state.showNotice = !this.$store.state.showNotice;
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
	.content-container{
		background-color: grey;
	}

</style>
