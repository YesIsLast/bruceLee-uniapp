<template>
	<view class="mine_information-main lee-page-bgc-gray lee-padding-30">
		<view class="information-password-content" v-if="showPassword">
			<view class="info-item">
				<text>原密码</text>
				<input class="uni-input" password type="text" placeholder="这是一个密码输入框" />
			</view>
			<view class="info-item">
				<text>新密码</text>
				<input class="uni-input" password type="text" placeholder="这是一个密码输入框" />
			</view>
			<view class="info-item">
				<text>确认密码</text>
				<input class="uni-input" password type="text" placeholder="这是一个密码输入框" />
			</view>
		</view>
		<view class="information-content" v-else>
			<view class="info-item">
				<text>头像</text>
				<view class="">
					<image class="lee-box-shadow-gray-10" src="../../../../static/image/head-1.jpg" mode=""></image>
					<text class="iconfont iconright lee-color-gray"></text>
				</view>
			</view>
			<view class="info-item">
				<text>昵称</text>
				<text class="lee-color-blue-a">贝吉塔</text>
			</view>
			<view class="info-item">
				<text>电话号码</text>
				<text class="lee-color-blue-a">199-9999-8888</text>
			</view>
			<view class="info-item">
				<text>合同到期时间</text>
				<text class="lee-color-blue-a">2020-20-20</text>
			</view>
		</view>
		<view class="information-footer">
			<button type="primary" @click="showPassword = !showPassword">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		name: "mine_information", // 我的信息
		data() {
			return {
				showPassword: false
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.mine_information-main {
		z-index: 1;

		.information-password-content {
			background-color: #FFFFFF;
			border-radius: 20rpx;
			padding: 0 30rpx 30rpx 30rpx;

			.info-item {
				border-bottom: solid 1rpx #E0E0E0;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				font-size: 35rpx;
				padding: 30rpx 0;

				input {
					margin-left: 50rpx;
				}
			}

			.info-item:last-child {
				border-bottom: none;
			}
		}

		.information-content {
			background-color: #FFFFFF;
			border-radius: 20rpx;
			padding: 0 30rpx 30rpx 30rpx;

			.info-item {
				border-bottom: solid 1rpx #E0E0E0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 35rpx;
				padding: 30rpx 0;

				image {
					width: 100upx;
					height: 100upx;
					border-radius: 50%;
					margin-right: 20rpx;
				}

				view {
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}

			.info-item:last-child {
				border-bottom: none;
			}
		}

		.information-footer {
			margin-top: 100rpx;
		}
	}
</style>
