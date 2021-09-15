<template>
	<view class="home-main lee-text-align-center lee-padding-top-50 lee-padding-bottom-180">
		<view class="home-head lee-padding-30 lee-flex lee-align-items-center lee-justify-content-between">
			<text class="lee-font-size-35">Good morning!</text>
			<image src="../../../../static/image/head-3.jpg" mode="" class="lee-box-shadow-gray-10"></image>
		</view>
		<!-- 工作总结 -->
		<view class="home-work-sum lee-flex lee-padding-lr-30">
			<view class="home-work-sum-item">
				<text class="title">工作任务</text>
				<text class="content"><text class="lee-font-size-35 lee-font-weight-600">3</text>项</text>
			</view>
			<view class="home-work-sum-item">
				<text class="title">外派派车</text>
				<text class="content"><text class="lee-font-size-35 lee-font-weight-600">3</text>项</text>
			</view>
			<view class="home-work-sum-item" @click="$utils.goCachePage('/pages/huixing-work/pages/workLog/workLog_detail')">
				<text class="title">工作日志</text>
				<text class="content"><text class="content-color-blue lee-font-size-30">未填写</text></text>
			</view>
			<view class="home-work-sum-item" @click="$utils.goCachePage('/pages/huixing-work/pages/workLog/workLog_detail')">
				<text class="title">工作日志</text>
				<text class="content"><text class="content-color-blue lee-font-size-30">未填写</text></text>
			</view>
		</view>
		<!-- 待办事项 -->
		<view class="home-todo">
			<view class="title">待办事项</view>
			<view class="content">
				<view class="todo-active">
					<view class="active-title">
						<text class="sm-title">公司会议</text>
						<text class="sm-content">2020-11-29 09:30</text>
					</view>
					<view class="active-footer">
						<text class="footerIcon iconfont icongroup-full"></text>
						<view class="footerImg">
							<image src="../../../../static/image/logo-huixing.png"></image>
							<image src="../../../../static/image/logo-huixing.png"></image>
						</view>
						<text class="footerBadge">10+</text>
					</view>
				</view>

				<view class="todo-unactive">
					<view class="active-title">
						<text class="sm-title">公司会议</text>
						<text class="sm-content">2020-11-29 09:30</text>
					</view>
					<view class="active-footer">
						<text class="footerIcon  iconfont icongroup-full"></text>
						<view class="footerImg">
							<image src="../../../../static/image/logo-huixing.png"></image>
							<image src="../../../../static/image/logo-huixing.png"></image>
						</view>
						<text class="footerBadge">10+</text>
					</view>
				</view>
			</view>

		</view>
		<!-- 协同效率 -->
		<view class="home-team">
			<view class="menuLineTitle">
				协同效率
			</view>
			<view class="home-card">
				<view class="card-content lee-text-align-left">
					孙悟饭有一个请假，需要带班，望周知。
				</view>
				<view class="card-content-send lee-flex lee-align-items-center lee-justify-content-end">
					<text>消息来自--<text class="lee-color-blue">卡卡罗特</text></text>
					<image src="../../../../static/image/logo-huixing.png" mode="" class="imgSize-sm"></image>
				</view>
			</view>
		</view>

		<!-- 通知公告 -->
		<view class="home-notice">
			<view class="menuLineTitle">
				通知公告
			</view>
			<!-- 通知列表 -->
			<view class="notic-item">
				<!-- 消息图标 -->
				<view class="notic-icon">
					<text class="iconfont iconoffice-supplies-fill"></text>
				</view>
				<!-- 消息内容 -->
				<view class="notic-content lee-text-align-left">
					<view class="lee-font-size-35 lee-font-weight-600 lee-padding-tb-30">工作邮件</view>
					<view class="lee-text-overflow-ellipsis notic-content-val">考勤助手：请查收你的上月考勤记录2020年11月29日</view>
				</view>
			</view>
			<view class="notic-item">
				<!-- 消息图标 -->
				<view class="notic-icon">
					<text class="iconfont iconoffice-supplies-fill"></text>
				</view>
				<!-- 消息内容 -->
				<view class="notic-content lee-text-align-left">
					<view class="lee-font-size-35 lee-font-weight-600 lee-padding-tb-30">工作邮件</view>
					<view class="lee-text-overflow-ellipsis notic-content-val">考勤助手：请查收你的上月考勤记录2020年11月29日</view>
				</view>
			</view>
			<view class="notic-item">
				<!-- 消息图标 -->
				<view class="notic-icon">
					<text class="iconfont iconoffice-supplies-fill"></text>
				</view>
				<!-- 消息内容 -->
				<view class="notic-content lee-text-align-left">
					<view class="lee-font-size-35 lee-font-weight-600 lee-padding-tb-30">工作邮件</view>
					<view class="lee-text-overflow-ellipsis notic-content-val">考勤助手：请查收你的上月考勤记录2020年11月29日</view>
				</view>
			</view>
		</view>

		<tabbarLee :current="1" backgroundColor="#F9FAFE"></tabbarLee>
	</view>
</template>

<script>
	import tabbarLee from '../../../../components/tabbar-lee/tabbar-lee.vue'
	export default {
		components: {
			tabbarLee
		},
		onShow() {

		}
	}
</script>

<style scoped lang="scss">
	.menuLineTitle {
		display: flex;
		justify-content: start;
		font-size: 40upx;
		font-weight: 600;
		padding-bottom: 40rpx;
	}

	.imgSize-sm {
		width: 50upx;
		height: 50upx;
		border-radius: 50%;
	}

	.home-main {
		
		.home-head {
			font-weight: 650;

			image {
				width: 100upx;
				height: 100upx;
				border-radius: 50%;
			}
		}

		// 工作总结
		.home-work-sum {
			.home-work-sum-item {
				width: 25%;
				letter-spacing: 5upx;
				display: flex;
				flex-direction: column;
				padding: 20upx;
				border-top: solid 1px #ebebec;
				border-bottom: solid 1px #ebebec;
				border-right: solid 1px #ebebec;

				.title {
					display: flex;
					justify-content: start;
					margin-bottom: 30upx;
					color: #ebebec;
				}

				.content {
					letter-spacing: 10upx;
					font-size: 25upx;
					display: flex;
					justify-content: start;

					.content-color-blue {
						color: #092757;
					}
				}
			}

			.home-work-sum-item:last-child {
				border-right: none;
			}
		}

		// 代办事项
		.home-todo {
			padding: 40upx 30upx;

			.title {
				@extend .menuLineTitle;
			}

			.content {
				padding: 30upx 0;
				display: flex;
				flex-direction: row;

				// 选中
				.todo-active {
					display: flex;
					flex-direction: column;
					width: 49%;
					background-color: #4285F4;
					height: 220upx;
					border-radius: 20upx;
					margin-right: 20upx;

					.active-title {
						display: flex;
						flex-direction: column;
						color: #fff;
						padding: 25upx 25upx 0 25upx;
						flex: 2;

						.sm-title {
							display: flex;
							justify-content: start;
							font-size: 35upx;
							margin-bottom: 20upx;
						}

						.sm-content {
							display: flex;
							justify-content: start;
						}
					}

					.active-footer {
						flex: 1;
						background-color: #689EF6;
						border-radius: 20upx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 0 30upx;

						.footerIcon {
							border-right: solid 1px #fff;
							padding-right: 30upx;
							color: #fff;
						}

						.footerImg {
							width: 130upx;
							display: flex;
							justify-content: start;

							image {
								@extend .imgSize-sm;
								margin-right: 5rpx;
							}
						}

						.footerBadge {
							color: #4285F4;
							@extend .imgSize-sm;
							font-size: 25rpx;
							background-color: #9CC0F9;
							display: flex;
							align-items: center;
							justify-content: center;
						}
					}
				}

				// 未选中
				.todo-unactive {
					display: flex;
					flex-direction: column;
					width: 49%;
					background-color: #EFF5FD;
					height: 220upx;
					border-radius: 20upx;
					margin-right: 20upx;
					position: relative;
					top: 20px;

					.active-title {
						display: flex;
						flex-direction: column;
						color: #4285F4;
						padding: 25upx 25upx 0 25upx;
						flex: 2;

						.sm-title {
							display: flex;
							justify-content: start;
							font-size: 35upx;
							margin-bottom: 20upx;
						}

						.sm-content {
							display: flex;
							justify-content: start;
						}
					}

					.active-footer {
						flex: 1;
						background-color: #AAC8FA;
						border-radius: 20upx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 0 30upx;

						.footerIcon {
							border-right: solid 1px #fff;
							padding-right: 30upx;
							color: #fff;
						}

						.footerImg {
							width: 130upx;
							display: flex;
							justify-content: start;

							image {
								@extend .imgSize-sm;
								margin-right: 5rpx;
							}
						}

						.footerBadge {
							color: #4285F4;
							width: 50upx;
							height: 50upx;
							border-radius: 50%;
							font-size: 25rpx;
							background-color: #9CC0F9;
							display: flex;
							align-items: center;
							justify-content: center;
						}
					}
				}
			}
		}

		// 协同效率
		.home-team {
			padding: 40upx 30upx;
			
			.home-card{
				width: 100%;
				height: 200rpx;
				background-color: #FFF3D1;
				border-radius: 30rpx;
				padding: 30rpx;
				display: flex;
				flex-direction: column;
				align-items: space-between;
				
				.card-content{
					flex: 2;
				}
				
				.card-content-send{
					flex: 1;
					
					image{
						margin-left: 30rpx;
					}
				}
			}
		}
		// 通知公告
		.home-notice{
			padding: 40upx 30upx;
			background-color: #F9FAFE;
			.notic-item{
				background-color: #fff;
				width: 100%;
				height: 200rpx;
				border-radius: 40rpx;
				display: flex;
				margin-bottom: 30rpx;
				.notic-icon{
					width: 15%;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #4285F4;
					.iconfont{
						font-size: 80rpx;
					}
				}
				.notic-content{
					width: 80%;
					.notic-content-val{
						width: 100%;
					}
				}
			}
		}
	}
</style>
