<template>
	<view class="mine-main lee-padding-bottom-180 lee-bgc-gray lee-text-align-center">
		<!-- 页面头部 -->
		<view class="mine-head">
			<view class="head-1">
				<view class="lee-text-align-left">
					<view class="lee-padding-bottom-10">
						<text class="lee-font-size-40 lee-padding-right-10">贝吉塔</text>
						<text class="lee-font-size-25">000-7979-3124</text>
					</view>
					<text class="lee-font-size-30 lee-font-weight-500">贝吉塔行星997发展空间</text>
				</view>
				<image src="../../../../static/image/head-1.jpg" mode="" class="lee-box-shadow-gray-10"></image>
			</view>
			<view class="head-2">
				<text class="iconfont iconhetong"></text>
				<text>合同到期时间：2020年11月30日</text>
			</view>
		</view>

		<!-- 菜单列表 -->
		<view class="mine-menuList">
			<view class="menuList-item" @click="$utils.goCachePage('/pages/huixing-work/pages/mine/mine_information')">
				<view class="menuList-name">
					<text class="iconfont iconwendang1 iconColor-Tiffanyblue"></text>
					<text class="lee-font-size-35">我的信息</text>
				</view>
				<view class="menuList-content">
					<text class="lee-font-size-35"></text>
					<text class="iconfont iconright"></text>
				</view>
			</view>
			<view class="menuList-item">
				<view class="menuList-name">
					<text class="iconfont iconxianxing-daochu iconColor-blue"></text>
					<text class="lee-font-size-35">修改密码</text>
				</view>
				<view class="menuList-content">
					<text class="lee-font-size-35"></text>
					<text class="iconfont iconright"></text>
				</view>
			</view>
			<view class="menuList-item" @click="$utils.goCachePage('/pages/huixing-work/pages/certificate/certificate')">
				<view class="menuList-name">
					<text class="iconfont iconweibiaoti- iconColor-yellow"></text>
					<text class="lee-font-size-35">证件信息</text>
				</view>
				<view class="menuList-content">
					<text class="lee-font-size-35">正常</text>
					<text class="iconfont iconright"></text>
				</view>
			</view>
			<view class="menuList-item">
				<view class="menuList-name">
					<text class="iconfont iconwendang1 iconColor-red"></text>
					<text class="lee-font-size-35">版本号</text>
				</view>
				<view class="menuList-content">
					<text class="lee-font-size-35">V1.0.0</text>
					<text class="iconfont iconright"></text>
				</view>
			</view>
			<view class="menuList-item" @click="$utils.goPage('/pages/uni-app-demo/index/index')">
				<view class="menuList-name">
					<text class="iconfont iconweibiaoti- iconColor-black"></text>
					<text class="lee-font-size-35">退出登录</text>
				</view>
				<view class="menuList-content">
					<text class="lee-font-size-35"></text>
					<text class="iconfont iconright"></text>
				</view>
			</view>
		</view>



		<tabbarLee :current="3" backgroundColor="#F9FAFE"></tabbarLee>
	</view>
</template>

<script>
	import tabbarLee from '../../../../components/tabbar-lee/tabbar-lee.vue'
	export default {
		name: 'mine', // 汇星我的中心
		components: {
			tabbarLee
		},
		onShow() {

		}
	}
</script>

<style scoped lang="scss">
	// 公用样式

	.iconColor-blue {
		color: #4285F4;
	}

	.iconColor-yellow {
		color: #FF921A;
	}

	.iconColor-Tiffanyblue {
		color: #52CCC2;
	}

	.iconColor-red {
		color: #F9492F;
	}

	.iconColor-black {
		color: #262432;
	}

	// 私有样式
	.mine-main {
		height: calc(100vh - 180rpx);

		// 页面头部
		.mine-head {
			padding: 80rpx 30rpx 30rpx 30rpx;
			font-weight: 650;
			letter-spacing: 3rpx;

			.head-1 {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			.head-2 {
				width: 92vw;
				margin-top: 40rpx;
				padding: 15rpx 30rpx;
				background-color: #EBEFF2;
				border-radius: 10rpx;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				color: #AAABAC;

				.iconfont {
					font-size: 50rpx;
					margin-right: 10rpx;
				}
			}

			image {
				width: 100upx;
				height: 100upx;
				border-radius: 50%;
			}
		}

		// 菜单列表
		.mine-menuList {
			padding: 0 30rpx;

			.menuList-item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 25rpx 0 ;

				.menuList-name {
					display: flex;
					align-items: center;
					color: #092757;

					.iconfont {
						margin-right: 30rpx;
						font-size: 50rpx;
					}
				}

				.menuList-content {
					color: #BFBFBF;

					.iconfont {
						margin-left: 30rpx;
					}
				}
			}
		}
	}
</style>
