<template>
	<view class="login-main">
		<view class="login-bgc-img">
			<image src="@/static/image/login-logoText.png" mode=""></image>
		</view>
		<view class="">
			<!-- 登录选项卡 -->
			<view class="login-tab">
				<view class="tab-title" :class="{'lee-fontSize-lg':tabCurrent}" @click="tabCurrent = !tabCurrent">
					<text>登录</text>
				</view>
				<view class="tab-title" :class="{'lee-fontSize-lg':!tabCurrent}" @click="tabCurrent = !tabCurrent">
					<text>注册</text>
				</view>
			</view>
			<!-- 滑动操作，动画 -->
			<scroll-view class="login-tab-scroll" :scroll-x="false" @touchstart="touchStart" @touchend="touchEnd">
				<!-- 登录   -->
				<view class="login-tab-content" :style="tabCurrent?{'transform':'translateX(0%)'}:''">
					<!-- 登录表单 -->
					<view class="lee-form">
						<view class="lee-form-item">
							<text class="iconfont iconshouji lee-padding-right-20"></text>
							<input type="text" value="" placeholder="请输入手机号" />
						</view>
						<view class="lee-form-item">
							<text class="iconfont iconpassword lee-padding-right-20"></text>
							<input type="text" password value="" placeholder="请输入密码" />
						</view>
						<view class="form-forget">
							忘记密码?
						</view>
					</view>
					<!-- 登录按钮 -->
					<view :class="btnDisabled?'login-btn-disabled':'login-btn'" @click="$utils.goPage('/pages/huixing-work/pages/index/index')">
						<view class="">
							<text class="iconfont" :class="btnDisabled?'iconkirin':'iconRight1'"></text>
						</view>
					</view>
				</view>
				<!-- 注册 -->
				<view class="register-tab-content" :style="!tabCurrent?{'transform':'translateX(0%)'}:''">
					<!-- 注册表单 -->
					<view class="lee-form">
						<view class="lee-form-item">
							<text class="iconfont iconshouji lee-padding-right-20"></text>
							<input type="text" value="" placeholder="请输入手机号" />
						</view>
						<view class="lee-form-item">
							<text class="iconfont iconpassword lee-padding-right-20"></text>
							<input type="text" password value="" placeholder="请输入密码" />
						</view>
						<view class="lee-form-item">
							<text class="iconfont iconpassword lee-padding-right-20"></text>
							<input type="text" password value="" placeholder="请确认面密码" />
						</view>
						<view class="lee-form-item">
							<text class="iconfont iconsecurityCode-b lee-padding-right-20"></text>
							<input type="text" value="" placeholder="请输入验证码" />
							<text class="login-code" @click="getPhoneCode">{{phoneCode}}</text>
						</view>
					</view>
					<!-- 注册按钮 -->
					<view :class="btnDisabled?'login-btn-disabled':'login-btn'">
						<view class="">
							<text class="iconfont" :class="btnDisabled?'iconkirin':'iconRight1'"></text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "login_page",
		data() {
			return {
				tabCurrent: true, // true、登录  false、注册
				touchStartX: 0, // 触屏起始点x  
				touchStartY: 0, // 触屏起始点y
				phoneCode: '获取验证码',
				btnDisabled: false, // 登录按钮禁用状态
			}
		},
		methods: {
			login() {
				let params = {
					"username": '18688888888',
					"password": '123456',
					"brand": 'Xiaomi',
					"clientId": plus.push.getClientInfo().clientid // 设备唯一标识符CID
				}
				console.log(params)
				this.$POST('/sys/mLogin', params).then(res => {
					console.log(res)
				})
			},
			getPhoneCode() {
				uni.showToast({
					title: '验证码已发送'
				});
				// 验证码计时
				let timeNum = 60;
				this.phoneCode = timeNum + "s"
				let intervalName = setInterval(() => {
					if (timeNum == 0) {
						this.phoneCode = "重新获取"
						clearInterval(intervalName)
					} else {
						timeNum--
						this.phoneCode = timeNum + "s"
					}
				}, 1000)
			},
			/**  
			 * 触摸开始  
			 **/
			touchStart(e) {
				this.touchStartX = e.touches[0].clientX;
				this.touchStartY = e.touches[0].clientY;
			},

			/**  
			 * 触摸结束  
			 **/
			touchEnd(e) {
				let deltaX = e.changedTouches[0].clientX - this.touchStartX;
				let deltaY = e.changedTouches[0].clientY - this.touchStartY;
				if (Math.abs(deltaX) > 100 && Math.abs(deltaX) > Math.abs(deltaY)) {
					if (deltaX >= 0) {
						console.log("向右滑动")
						this.tabCurrent = true
					} else {
						console.log("向左滑动")
						this.tabCurrent = false
					}
				// } else if (Math.abs(deltaY) > 50 && Math.abs(deltaX) < Math.abs(deltaY)) {
				// 	if (deltaY < 0) {
				// 		console.log("上滑")
				// 	} else {
				// 		console.log("下滑")
				// 	}
				} else {
					// console.log("可能是误触！")
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	$lee-color-gray:#C6C3C7;
	$lee-color-blue:#4484F5;
	$lee-bottom-line-width:4rpx;

	// 公用样式
	.lee-fontSize-lg {
		color: #070b10 !important;
		font-size: 50rpx !important;
		border-bottom: solid $lee-bottom-line-width $lee-color-blue !important;
	}

	.lee-border-bottom-blue {
		border-bottom: solid $lee-bottom-line-width $lee-color-blue !important;
	}

	.lee-form {
		color: $lee-color-gray;
		padding: 0 50rpx;
	}

	.lee-form-item {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 10rpx 0;
		margin: 50rpx 0;
		border-bottom: solid $lee-bottom-line-width $lee-color-gray;
		transition: all .5s ease;

		input {
			width: 80%;
			padding-right: 30rpx;
		}

		.iconfont {
			transition: all .5s ease;
		}

		.login-code {
			color: $lee-color-blue;
		}
	}

	.lee-form-item:hover {
		@extend .lee-border-bottom-blue;

		.iconfont {
			color: $lee-color-blue;
		}
	}

	.form-forget {
		color: $lee-color-blue;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		font-weight: 700;
	}

	.login-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 150rpx;

		view {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 120rpx;
			width: 120rpx;
			border-radius: 50%;
			background-color: $lee-color-blue;
			color: #FFFFFF;
			font-size: 50rpx;
		}
	}


	.login-btn-disabled {
		@extend .login-btn;

		view {
			opacity: .6;
		}
	}
	.login-btn-disabled:hover {
		view {
			cursor: wait;
		}
	}

	// 私有样式
	.login-main {

		.login-bgc-img {
			height: 30vh;
			width: 100vw;
			background-color: $lee-color-blue;
			background: url(@/static/image/login_backgroun_1.png) no-repeat;
			background-size: 100% 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			z-index: 1;

			image {
				height: 50%;
				width: 60vw;
				z-index: 9;
			}
		}

		.login-tab {
			display: flex;
			justify-content: space-around;
			align-items: flex-end;
			padding: 15rpx 100rpx;
			height: 100rpx;

			.tab-title {
				display: flex;
				align-items: flex-end;
				font-size: 35rpx;
				transition: all .3s ease;
				border-bottom: none;
				color: #557aad;
			}
		}

		// 登录注册滑动切换动画样式
		.login-tab-scroll {
			white-space: nowrap;
			width: 100vw;
			position: static;

			.login-tab-content {
				width: 100vw;
				transition: all .3s ease;
				transform: translateX(-100%);
				display: inline-block;
				position: absolute;
				top: 0;
			}

			.register-tab-content {
				width: 100vw;
				transition: all .3s ease;
				transform: translateX(100%);
				display: inline-block;
			}
		}


	}
</style>
