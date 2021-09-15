<template>
	<view class="statistical_month-main lee-page-bgc-gray lee-padding-30">
		<view class="statistical_month-title">
			<view class="month-title">
				<view class="">
					<text class="iconfont iconuser-attendance"></text>
				</view>
				<text>汇星工作台</text>
			</view>
			<text class="color-gray">2020-20-20 20:20</text>
		</view>
		<view class="statistical_month-content">
			<text>贝吉塔，您好！</text>
			<text>10月的考勤统计已生成：</text>
			<!-- 统计表格 -->
			<view class="month-content-table">
				<!-- 表格标题头 -->
				<view class="table-title">
					<view class="table-title-item">
						<text>迟到</text>
					</view>
					<view class="table-title-item">
						<text>早退</text>
					</view>
					<view class="table-title-item">
						<text>缺卡</text>
					</view>
					<view class="table-title-item">
						<text>旷工</text>
					</view>
				</view>
				<!-- 表格数据 -->
				<view class="table-data">
					<view class="table-data-item">
						<text>1次</text>
					</view>
					<view class="table-data-item">
						<text>2次</text>
					</view>
					<view class="table-data-item">
						<text>0次</text>
					</view>
					<view class="table-data-item">
						<text>14次</text>
					</view>
				</view>
			</view>
			<text class="color-gray">请注意查收！以上数据来自汇星考勤，最终考勤结果请以公司制度为准</text>
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	$uni-color-gray:#cfcfcf;

	.color-gray {
		color: $uni-color-gray;
	}

	.statistical_month-main {
		
		.statistical_month-title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-bottom: 30rpx;
			border-bottom: solid 1rpx $uni-color-gray;

			.month-title {
				display: flex;
				align-items: center;
				font-size: 30rpx;

				view {
					background-color: #4285F4;
					height: 50rpx;
					width: 50rpx;
					border-radius: 10rpx;
					color: #FFFFFF;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-right: 20rpx;
				}
			}
		}

		.statistical_month-content {
			margin-top: 30rpx;
			background-color: #FFFFFF;
			padding: 30rpx;
			border-radius: 20rpx;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;

			text {
				padding: 5rpx 0;
			}

			// 表格样式
			.month-content-table {
				display: flex;
				width: 40vw;
				margin: 20rpx 0;

				.table-title {
					display: flex;
					flex-direction: column;
					flex: 1;

					.table-title-item {
						flex: 1;
						border: solid 1rpx $uni-color-gray;
						display: flex;
						justify-content: center;
						align-items: center;
						border-bottom: none;
						font-weight: 700;
						padding: 20rpx;
					}

					.table-title-item:last-child {
						border-bottom: solid 1rpx $uni-color-gray;
					}
				}

				.table-data {
					display: flex;
					flex-direction: column;
					flex: 1;

					.table-data-item {
						flex: 1;
						border: solid 1rpx $uni-color-gray;
						border-left: none;
						border-bottom: none;
						color: $uni-color-gray;
						display: flex;
						justify-content: center;
						align-items: center;
						padding: 20rpx;
					}

					.table-data-item:last-child {
						border-bottom: solid 1rpx $uni-color-gray;
					}
				}

			}
		}
	}
</style>
