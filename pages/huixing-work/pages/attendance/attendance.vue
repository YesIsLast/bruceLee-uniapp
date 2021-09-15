<template>
	<view class="attendance-main lee-page-bgc-gray">
		<!-- 页面需要使用全屏覆盖蒙版所以使用自定义导航，非特殊情况请谨慎使用 -->
		<u-navbar title="汇星工作台" title-size="37" title-color="#000000" :background="{background: '#ffffff'}"></u-navbar>
		<!-- 考勤人信息 -->
		<view class="attendance-head">
			<view class="head-row">
				<view class="head-row-image">
					<image src="../../../../static/image/head-1.jpg" mode="" class="lee-box-shadow-gray-10"></image>
				</view>
				<view class="head-row-name">
					<view class="name-1">
						<text class="lee-font-size-35 lee-font-weight-600 lee-padding-right-20">贝吉塔</text>
						<text class="lee-font-size-30">000-7979-3124</text>
					</view>
					<text class="lee-font-size-30">贝吉塔行星</text>
				</view>
			</view>
			<view class="head-calendar" @click="$utils.goCachePage('/pages/huixing-work/pages/attendance/statistical')">
				<text class="iconfont iconrili1"></text>
			</view>
		</view>
		<!-- 考勤打卡内容区 -->
		<view class="attendance-content">
			<!-- 打卡记录 -->
			<view class="content-clock">
				<!-- 上班打卡 -->
				<view class="clock-go">
					<view class="lee-flex lee-align-items-start">
						<text class="lee-font-size-40">上班 08:00</text>
					</view>
					<view class="lee-padding-top-20 lee-flex lee-align-items-start">
						<text class="iconfont iconwancheng-copy lee-color-yellow"></text>
						<text class="lee-font-size-25">07:50 异常打卡</text>
					</view>
				</view>
				<!-- 下班打卡 -->
				<view class="clock-after">
					<view class="lee-flex lee-align-items-start">
						<text class="lee-font-size-40">下班 17:00</text>
					</view>
					<view class="lee-padding-top-20 lee-flex lee-align-items-start">
						<!-- <text class="iconfont iconwancheng-copy"></text> -->
						<text class="lee-font-size-25 lee-color-gray">未打卡</text>
					</view>
				</view>
			</view>
			<!-- 打卡按钮 -->
			<!-- 情况分为：正常打卡、异常打卡 -->
			<view class="content-clockBtn" v-if="shiftClock.length == 1">
				<view class="clockBtn-item" :class="clockObj.type==0?'lee-background-blue':'lee-background-yellow'" @click="startAttendance(clockObj)">
					<text class="lee-font-size-35 lee-font-weight-700 lee-padding-bottom-10">{{clockObj.btnText}}</text>
					<text class="lee-font-size-25">{{clockObj.datetime}}</text>
				</view>
				<view class="lee-color-gray" v-show="clockObj.type == 1">
					<text class="iconfont iconclose1 lee-margin-right-10"></text>
					<text>{{clockObj.clockLangLatScopeText}} ：<text>{{clockObj.addrName}}</text><text class="lee-color-blue">重新定位</text></text>
				</view>
			</view>
			<!-- 当日打卡记录树 -->
			<todayClockRecord v-else :list="shiftClock"></todayClockRecord>
		</view>

		<!-- 异常打卡说明 -->
		<drawerPopupLee mode='bottom' width="100vw" height="52vh" borderRadius="30rpx 30rpx 0 0" :show="drawerPopupLeeVal"
		 @close="closeDrawer">
			<template #content>
				<!-- 打卡备注 -->
				<clockRemark operation="editor"></clockRemark>
			</template>
		</drawerPopupLee>
	</view>
</template>

<!-- 考勤打卡页面 -->
<script>
	import drawerPopupLee from '@/components/drawerPopup-lee/drawerPopup-lee.vue'
	import clockRemark from './components/clockRemark.vue'
	import todayClockRecord from './components/todayClockRecord.vue'
	export default {
		name: 'attendance',
		components: {
			drawerPopupLee, // 抽屉弹出层
			clockRemark, // 异常打卡页面
			todayClockRecord, // 当日打卡记录
		},
		data() {
			return {
				drawerPopupLeeVal: false,
				// 正常打卡、异常打卡
				clockObj: {
					type: 0, // 0、正常打卡 1、异常打卡
					btnText: "异常打卡",
					datetime: '12:23:56', // 打卡时间
					addrName: "非汇星工作地点", // 当前位置地点名称
					clockLangLatScope: "45.387282,,125.287573", // 打卡坐标范围
					clockLangLatScopeText: "未进入考勤范围", // 是否进入考勤范围 标题
				},
				// 上下班打卡
				shiftClock:[
					{
						type:0, // 上班打卡
						typeText:"上班", // 上班打卡
						clockStatus:0, // 0已打卡、1异常打卡、2未打卡
						status:true, // true 正常、false、异常
						statusStr:"正常", // true 正常、false、异常
						datetime:"07:50:56",
						address:"利国街与鞍山路", // 打卡地点
					// },
					// {
					// 	type:1, // 下班打卡
					// 	typeText:"下班", // 上班打卡
					// 	clockStatus:0, // 0已打卡、1异常打卡、2未打卡
					// 	status:false, // true 正常、false、异常
					// 	statusStr:"异常", // true 正常、false、异常
					// 	datetime:"18:10:32",
					// 	address:"利国街与鞍山路", // 打卡地点
					}
				]
			}
		},
		methods: {
			// 打开抽屉层
			startAttendance() {
				this.drawerPopupLeeVal = true
			},
			// 关闭抽屉层
			closeDrawer() {
				this.drawerPopupLeeVal = false
			}
		}
	}
</script>

<style scoped lang="scss">
	// 公用样式
	.lee-color-yellow {
		color: #FF921A;
	}

	.lee-color-gray {
		color: #9B9C9C;
	}

	.lee-background-yellow {
		background: linear-gradient(right bottom, #F99A32 20%, #ffdd8b 80%);
	}

	.lee-background-blue {
		background: linear-gradient(right bottom, #4285F4 20%, #91cef4 80%);
	}

	// 私有样式
	.attendance-main {
		overflow: hidden;
		padding: 30rpx;

		// 页面头
		.attendance-head {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 160rpx;
			background-color: #FFFFFF;
			border-radius: 20rpx;

			image {
				width: 90upx;
				height: 90upx;
				border-radius: 50%;
			}

			.head-row {
				display: flex;

				.head-row-image {
					margin: 0 20rpx;
				}

				.head-row-name {
					display: flex;
					flex-direction: column;
					justify-content: flex-start;

					.name-1 {
						margin-bottom: 10rpx;
					}
				}
			}

			.head-calendar {
				.iconfont {
					font-size: 60rpx;
					color: #4285F4;
					margin-right: 20rpx;
				}
			}
		}

		// 打卡
		.attendance-content {
			height: 60vh;
			background-color: #FFFFFF;
			margin-top: 30rpx;
			padding: 30rpx;
			border-radius: 20rpx;

			// 打卡状态
			.content-clock {
				display: flex;
				justify-content: space-between;

				.clock-go {
					background-color: #F3F8FF;
					width: 48%;
					height: 150rpx;
					border-radius: 10rpx;
					display: flex;
					flex-direction: column;
					padding: 20rpx;

					.iconfont {
						margin-right: 20rpx;
					}
				}

				.clock-after {
					background-color: #F3F8FF;
					width: 48%;
					height: 150rpx;
					border-radius: 10rpx;
					display: flex;
					flex-direction: column;
					padding: 20rpx;

					.iconfont {
						margin-right: 20rpx;
					}
				}
			}

			// 打卡按钮
			.content-clockBtn {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				margin-top: 10vh;

				.clockBtn-item {
					width: 300rpx;
					height: 300rpx;
					border-radius: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					color: #FFFFFF;
					margin-bottom: 40rpx;
				}
			}
		}
	}

	// 异常打卡抽屉
	.errorClock {}
</style>
