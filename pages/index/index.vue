<template>
	<view class="content">
		<u-row gutter="16">
			<u-col span="4" class="u-p-26"><view class="shadow-container item-container u-flex u-row-center" @click="goToPages"><text>sdfasdfa</text></text></view></u-col>
		</u-row>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {},
	methods: {
		goToPages(e){
			console.log(e);
			uni.navigateTo({
			    url: '/pages/basePractice/index'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.item-container {
	height: 200rpx;
}
</style>
