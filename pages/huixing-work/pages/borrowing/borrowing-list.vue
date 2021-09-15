<template>
	<view class="borrowing-list-main lee-page-bgc-gray">
		<!-- 页面小标题头 -->
		<workSmallTitle username="贝吉塔的借款"></workSmallTitle>

		<view class="borrowing-list">
			<view class="list-item">
				<view class="item-head">
					<text class="item-title">借款说明</text>
					<view class="lee-color-gray">9935-12-30</view>
				</view>
				<view class="item-content">
					<view class="content-left">
						<text>龟仙人老师没有钱了，特意来这借点小钱，特此说明</text>
					</view>
					<view class="content-btn">
						<button type="primary">报销</button>
					</view>
				</view>
			</view>
			<view class="list-item">
				<view class="item-head">
					<text class="item-title">借款说明</text>
					<view class="lee-color-gray">9935-12-30</view>
				</view>
				<view class="item-content">
					<view class="content-left">
						<text>龟仙人老师没有钱了，特意来这借点小钱，特此说明</text>
					</view>
					<view class="content-btn">
						<button type="primary">报销</button>
					</view>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	import workSmallTitle from '@/components/work-small-title/work-small-title.vue'
	export default {
		name: "borrowing-list",
		components: {
			workSmallTitle
		}
	}
</script>

<style scoped lang="scss">
	.borrowing-list-main {
		z-index: 1;
		overflow-y: scroll;

		.borrowing-list {
			padding: 30rpx;

			.list-item {
				background-color: #FFFFFF;
				border-radius: 30rpx;
				display: flex;
				flex-direction: column;
				margin-bottom: 30rpx;

				.item-head {
					padding: 30rpx;
					border-bottom: 1rpx solid $lee-border-gray;
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 35rpx;
					
					.item-title{
						font-weight: 700;
					}
				}

				.item-content {
					display: flex;
					font-size: 30rpx;

					.content-left {
						padding: 30rpx;
						flex: 3;
					}

					.content-btn {
						flex: 1;
						display: flex;
						align-items: center;
						justify-content: center;
						padding: 30rpx;
						border-left: 1rpx solid $lee-border-gray;
						button{
							height: 70rpx;
							width: 100%;
							padding: 10rpx;
							display: flex;
							align-items: center;
							justify-content: center;
						}
					}
				}
			}
		}
	}
</style>
