<template>
	<view class="accessories-detail-main lee-page-bgc-gray">
		<!-- 页面小标题头 -->
		<workSmallTitle :userHead="null" :datetime="null" username="吉A99999"></workSmallTitle>

		<!-- 配件列表 -->
		<view class="accessories-detail-list">
			<view class="list-item">
				<text class="item-title">车牌号</text>
				<text class="item-content lee-color-green">库房可取</text>
			</view>
			<view class="list-item">
				<text class="item-title">轮毂</text>
				<text class="item-content lee-color-yellow">购买中</text>
			</view>
		</view>
	</view>
</template>

<script>
	import workSmallTitle from '@/components/work-small-title/work-small-title.vue'
	export default {
		name: "accessories-detail",
		components: {
			workSmallTitle
		}
	}
</script>

<style scoped lang="scss">
	.accessories-detail-main {
		z-index: 1;
		overflow-y: scroll;

		.accessories-detail-list {
			margin: 30rpx;
			padding: 0 30rpx;
			border-radius: 20rpx;
			background-color: #FFFFFF;

			.list-item {
				border-bottom: 1rpx solid $lee-border-gray;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 30rpx 0;
				font-size: 35rpx;

				.item-title {}

				.item-content {}
			}
			.list-item:last-child{
				border-bottom: none;
			}
		}
	}
</style>
