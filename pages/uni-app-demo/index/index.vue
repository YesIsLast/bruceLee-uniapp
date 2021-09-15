<template>
	<view>
		<image class="home-bgc" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.qianye88.com%2F4kaiji6ba99ede-aff6-37a9-af0f-81e3334607f7.jpeg&refer=http%3A%2F%2Fpic.qianye88.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634267828&t=8168de8c319cfa77af62d4941b6e545f" mode=""></image>
		<view class="menuList-list">
			<view class="menuList-item" @click="$utils.goCachePage('/pages/uni-app-demo/smoke/map/index')">
				<image src="../../../static/image/head-1.jpg" mode=""></image>
				<text>烟草地图</text>
			</view>
			<view class="menuList-item">
				<image src="../../../static/image/head-1.jpg" mode=""></image>
				<text>第一菜单</text>
			</view>
			<view class="menuList-item">
				<image src="../../../static/image/head-1.jpg" mode=""></image>
				<text>第一菜单</text>
			</view>
			<view class="menuList-item">
				<image src="../../../static/image/head-1.jpg" mode=""></image>
				<text>第一菜单</text>
			</view>
			<view class="menuList-item">
				<image src="../../../static/image/head-1.jpg" mode=""></image>
				<text>第一菜单</text>
			</view>
			<view class="menuList-item">
				<image src="../../../static/image/head-1.jpg" mode=""></image>
				<text>第一菜单</text>
			</view>
		</view>

		<view class="dev-process">
			<view class="process-title">开发进度：</view>
			<view class="process-list">
				<view class="list-item" v-for="item in 6">
					<text>地图导航</text>
					<text>进度：0%</text>
				</view>
			</view>
		</view>


		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<u-tabbar v-model="current" :list="list" :mid-button="true" @change="projectJump"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				list: [{
						iconPath: "home",
						selectedIconPath: "home-fill",
						text: '首页',
						isDot: true,
						customIcon: false,
					},
					{
						iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
						selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
						text: '案例项目',
						midButton: true,
						customIcon: false,
					},
					{
						iconPath: "account",
						selectedIconPath: "account-fill",
						text: '统计',
						isDot: false,
						customIcon: false,
					},
				]
			}
		},
		methods: {
			projectJump(current) {
				switch (current) {
					case 0:
						break;
					case 1:
						this.$u.route('pages/huixing-work/pages/login/login')
						break;
					case 2:
						this.$u.route('pages/uni-app-demo/my/index')
						break;
					case 3:
						break;
					case 4:
						break;
					default:
						console.log("没有此菜单项")
						break;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.home-bgc {
		width: 100vw;
		height: 50vh;
		position: fixed;
		top: 0;
		z-index: -1;
	}

	.menuList-list {
		display: flex;
		flex-wrap: wrap;
		background-color: #f9f9f9;
		width: 100vw;
		min-height: 20vh;
		border-radius: 20rpx;
		margin-top: 30vh;
		z-index: 9;

		.menuList-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 15rpx;
			font-size: 35rpx;

			image {
				height: 150rpx;
				width: 150rpx;
				border-radius: 10rpx;
				margin-bottom: 20rpx;
			}
		}

	}
	.dev-process{
		display: flex;
		flex-direction: column;
		margin-top: 30rpx;
		background-color: #FFFFFF;
		z-index: 9;
		padding: 20rpx;
		min-height: 40vh;
		
		.process-title{
			color: #007AFF;
			font-size: 40rpx;
			border-bottom: 1rpx solid #007AFF;
			width: 30%;
		}
		.process-list{
			display: flex;
			flex-direction: column;
			
			.list-item{
				display: flex;
				flex-direction: row;
				padding: 20rpx;
				align-items: center;
				justify-content: space-between;
				font-size: 35rpx;
				border-bottom: 1rpx solid #dddddd;
			}
		}
	}

	.u-node {
		width: 44rpx;
		height: 44rpx;
		border-radius: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #d0d0d0;
	}

	.u-order-title {
		color: #333333;
		font-weight: bold;
		font-size: 32rpx;
	}

	.u-order-desc {
		color: rgb(150, 150, 150);
		font-size: 28rpx;
		margin-bottom: 6rpx;
	}

	.u-order-time {
		color: rgb(200, 200, 200);
		font-size: 26rpx;
	}
</style>
