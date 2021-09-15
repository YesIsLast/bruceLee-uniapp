<template>
	<view class="workbench-main lee-padding-bottom-180 lee-text-align-center lee-bgc-gray">
		<view class="workbench-head lee-flex lee-align-items-center lee-justify-content-between lee-bgc-white">
			<text class="lee-font-size-40">贝吉塔行星工作台</text>
			<image src="../../../../static/image/head-1.jpg" mode="" class="lee-box-shadow-gray-10"></image>
		</view>
		<!-- 常用操作 -->
		<view class="workbench-useOperation lee-bgc-gray">
			<view class="useOperation-title">
				常用操作
			</view>
			<view class="useOperation-content lee-box-shadow-gray-20-bottom">
				<view class="useOperation-item" @click="$utils.goCachePage('/pages/huixing-work/pages/attendance/attendance')">
					<view class="useOperation-Icon">
						<text class="iconfont icondingwei iconColor-blue"></text>
					</view>
					<text class="useOperation-name">考勤打卡</text>
				</view>
				<view class="useOperation-item">
					<view class="useOperation-Icon">
						<text class="iconfont iconwendang iconColor-blue"></text>
					</view>
					<text class="useOperation-name">工作任务</text>
				</view>
				<view class="useOperation-item" @click="$utils.goCachePage('/pages/huixing-work/pages/assigning/assigning-list')">
					<view class="useOperation-Icon">
						<text class="iconfont iconweibiaoti507 iconColor-blue"></text>
					</view>
					<text class="useOperation-name">外派派车</text>
				</view>
			</view>
		</view>

		<!-- 工作类 -->
		<view class="workbench-functionModule lee-bgc-gray">
			<view class="functionModule-title">工作类</view>
			<view class="functionModule-content">
				<view class="content-item" @click="$utils.goCachePage('/pages/huixing-work/pages/workLog/workLog_detail')">
					<!-- 图标样式 -->
					<view class="item-icon">
						<text class="iconfont iconrenwu iconColor-blue"></text>
					</view>
					<text class="item-name">工作日志</text>
				</view>
				<view class="content-item">
					<!-- 图标样式 -->
					<view class="item-icon">
						<text class="iconfont icongongzhang iconColor-yellow"></text>
					</view>
					<text class="item-name">公章申请</text>
				</view>
				<view class="content-item">
					<!-- 图标样式 -->
					<view class="item-icon">
						<text class="iconfont iconwendang iconColor-Tiffanyblue"></text>
					</view>
					<text class="item-name">介绍信申请</text>
				</view>
				<view class="content-item">
					<!-- 图标样式 -->
					<view class="item-icon">
						<text class="iconfont iconbijiben-fill iconColor-blue"></text>
					</view>
					<text class="item-name">办公用品申请</text>
				</view>
			</view>
		</view>
		<!-- 人事类 -->
		<view class="workbench-functionModule lee-bgc-gray">
			<view class="functionModule-title">人事类</view>
			<view class="functionModule-content">
				<view class="content-item">
					<!-- 图标样式 -->
					<view class="item-icon">
						<text class="iconfont iconcaozuorizhi iconColor-blue"></text>
					</view>
					<text class="item-name">请假申请</text>
				</view>
				<view class="content-item">
					<!-- 图标样式 -->
					<view class="item-icon">
						<text class="iconfont icongongzhang iconColor-yellow"></text>
					</view>
					<text class="item-name">出差申请</text>
				</view>
				<view class="content-item">
					<!-- 图标样式 -->
					<view class="item-icon">
						<text class="iconfont iconwendang iconColor-Tiffanyblue"></text>
					</view>
					<text class="item-name">转正申请</text>
				</view>
				<view class="content-item">
					<!-- 图标样式 -->
					<view class="item-icon">
						<text class="iconfont iconbijiben-fill iconColor-blue"></text>
					</view>
					<text class="item-name">离职申请</text>
				</view>
			</view>
		</view>
		<!-- 财务类 -->
		<view class="workbench-functionModule lee-bgc-gray">
			<view class="functionModule-title">财务类</view>
			<view class="functionModule-content">
				<view class="content-item">
					<!-- 图标样式 -->
					<view class="item-icon">
						<text class="iconfont iconcaozuorizhi iconColor-blue"></text>
					</view>
					<text class="item-name">报销申请</text>
				</view>
				<view class="content-item" @click="$utils.goCachePage('/pages/huixing-work/pages/borrowing/borrowing-add')">
					<!-- 图标样式 -->
					<view class="item-icon">
						<text class="iconfont icongongzhang iconColor-yellow"></text>
					</view>
					<text class="item-name">借款申请</text>
				</view>
				<view class="content-item">
					<!-- 图标样式 -->
					<view class="item-icon">
						<text class="iconfont iconwendang iconColor-Tiffanyblue"></text>
					</view>
					<text class="item-name">燃油采购申请</text>
				</view>
				<view class="content-item">
					<!-- 图标样式 -->
					<view class="item-icon">
						<text class="iconfont iconbijiben-fill iconColor-blue"></text>
					</view>
					<text class="item-name">办公用品采购</text>
				</view>
				<view class="content-item" @click="$utils.goCachePage('/pages/huixing-work/pages/maintenance/maintenance-list')">
					<!-- 图标样式 -->
					<view class="item-icon">
						<text class="iconfont iconbijiben-fill iconColor-blue"></text>
					</view>
					<text class="item-name">车辆维修</text>
				</view>
				<view class="content-item" @click="$utils.goCachePage('/pages/huixing-work/pages/gas/gas')">
					<!-- 图标样式 -->
					<view class="item-icon">
						<text class="iconfont iconbijiben-fill iconColor-yellow"></text>
					</view>
					<text class="item-name">车辆加油</text>
				</view>
			</view>
		</view>
		<tabbarLee :current="2" backgroundColor="#F9FAFE"></tabbarLee>
	</view>
</template>

<script>
	import tabbarLee from '../../../../components/tabbar-lee/tabbar-lee.vue'
	export default {
		name: 'workbench', // 工作台
		components: {
			tabbarLee
		},
		methods:{
			
		},
		onShow() {

		}
	}
</script>

<style scoped lang="scss">
	// 公用样式
	.border-bottom-line {
		border-bottom: solid 1px #eaeaea;
	}

	.iconColor-blue {
		color: #4285F4;
	}

	.iconColor-yellow {
		color: #FF921A;
	}

	.iconColor-Tiffanyblue {
		color: #52CCC2;
	}

	// 私有样式
	.workbench-main {

		// 工作台-头部
		.workbench-head {
			padding: 80rpx 30rpx 30rpx 30rpx;
			font-weight: 650;
			letter-spacing: 3rpx;
			// 固定头部
			position: fixed;
			top: 0;
			min-height: 150rpx;
			width: 100%;
			
			image {
				width: 100upx;
				height: 100upx;
				border-radius: 50%;
			}
		}

		// 工作台-常用操作
		.workbench-useOperation {
			margin-top: 220rpx;
			.useOperation-title {
				display: flex;
				justify-content: flex-start;
				font-size: 30rpx;
				font-weight: 600;
				padding: 0 30rpx 30rpx 30rpx;
				@extend .border-bottom-line;
				background-color: #fff;
			}

			.useOperation-content {
				width: 100%;
				height: 240rpx;
				border-radius: 0 0 50rpx 50rpx;
				background-color: #fff;
				padding-top: 20rpx;
				display: flex;
				flex-direction: row;
				.useOperation-item{
					width: 33.333%;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					
					.useOperation-Icon{
						width: 140rpx;
						height: 140rpx;
						border-radius: 100%;
						background-color: #ECF3FD;
						display: flex;
						justify-content: center;
						align-items: center;
						
						text{
							font-size: 80rpx;
						}
					}
					.useOperation-name{
						padding-top: 20rpx;
						letter-spacing: 3rpx;
						font-size: 25rpx;
					}
				}
			}
		}

		// 工作台-功能按钮模块
		.workbench-functionModule {
			margin: 30rpx;

			.functionModule-title {
				font-size: 30rpx;
				font-weight: 600;
				padding-bottom: 30rpx;
				padding-top: 15rpx;
				@extend .border-bottom-line;
				text-align: left;
			}

			.functionModule-content {
				display: flex;
				flex-wrap: wrap;
				padding-top: 40rpx;
				// padding: 40rpx 0rpx;

				.content-item {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					width: 25%;
					padding-bottom: 30rpx;
					.badge-num{
						width: 30rpx;
						height: 30rpx;
						background-color: red;
						color: #fff;
						font-size: 20rpx;
						border-radius: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
						position: absolute;
						top: 230px;
						    left: 155px;
					}

					.item-icon {
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						width: 100rpx;
						height: 100rpx;
						border-radius: 100%;
						background-color: #fff;
						box-shadow: 0 0 30rpx 5rpx #efefef;

						text {
							font-size: 60rpx;
						}
					}

					.item-name {
						padding-top: 20rpx;
						letter-spacing: 3rpx;
						font-size: 25rpx;
					}
				}
			}
		}
	}
</style>
