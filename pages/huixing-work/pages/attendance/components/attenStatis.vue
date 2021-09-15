<template>
	<view class="attenStatis-main">

		<!-- 日历组件 -->
		<view class="attenStatis-calendar">
			<!-- 自定义日历头 -->
			<view class="calendar-title">
				<!-- 月份切换栏 -->
				<view class="calendar-head">
					<view class="calendar-pre" @click="preMonth">
						<text class="iconfont iconleft"></text>
					</view>
					<text class="calendar-title-3" @click="$utils.goCachePage('/pages/huixing-work/pages/attendance/statistical_month')">{{ nowMonth}}月汇总</text>
					<view class="calendar-next" @click="nextMonth">
						<text class="iconfont iconright"></text>
					</view>
				</view>
				<!-- 工时与打卡异常次数统计 -->
				<view class="calendar-statis">
					<view class="statis-item">
						<text class="item-num calendar-title-3">8.4</text>
						<text class="item-title">平均工时(小时)</text>
					</view>
					<view class="statis-item">
						<text class="item-num calendar-title-3">0</text>
						<text class="item-title">异常打卡</text>
					</view>
				</view>
			</view>
			<view class="attenStatis-list">
				<view class="list-calendar" :class="calendarOpen?'calendar-height-open':'calendar-height-close'">
					<uniCalendar ref="attenCalendar" :borderRadius="{'border-radius':'20rpx'}" :date="nowDate" :showMonth="false"
					 :selected="clockSelected" :selecteMonth="false"></uniCalendar>

				</view>
				<!-- 日历分割线 -->
				<view @click="calendarLine" class="list-calendar-line">
					<view class="iconfont-view">
						<text class="iconfont" :class="calendarOpen?'icontop':'iconbottom'"></text>
					</view>
				</view>
				<view class="list-calendar-clockRecord">
					<!-- 打卡状态记录 -->
					<todayClockRecord :list="shiftClock"></todayClockRecord>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import uniCalendar from '@/components/uniCalendar/uni-calendar.vue'
	import todayClockRecord from './todayClockRecord.vue'
	export default {
		name: "attenStatis", // 考勤统计
		components: {
			uniCalendar,
			todayClockRecord
		},
		data() {
			return {
				// 当前年月日
				nowDate: "2020-12-06",
				nowMonth: 12,
				// 打卡记录列表
				clockSelected: [{
					date: '2020-12-02',
					clockStatus: false
				}, {
					date: '2020-12-05',
					clockStatus: true
				}],
				calendarOpen: true, // 日历是否展开
				// 上下班打卡记录
				shiftClock: [{
						type: 0, // 上班打卡
						typeText: "上班", // 上班打卡
						clockStatus: 0, // 0已打卡、1异常打卡、2未打卡
						status: true, // true 正常、false、异常
						statusStr: "正常", // true 正常、false、异常
						datetime: "07:50:56",
						address: "利国街与鞍山路", // 打卡地点
					},
					{
						type: 1, // 下班打卡
						typeText: "下班", // 上班打卡
						clockStatus: 0, // 0已打卡、1异常打卡、2未打卡
						status: false, // true 正常、false、异常
						statusStr: "异常", // true 正常、false、异常
						datetime: "18:10:32",
						address: "利国街与鞍山路", // 打卡地点
					}
				]
			}
		},
		methods: {
			// 
			calendarLine() {
				this.calendarOpen = !this.calendarOpen;
			},
			// 上一月
			preMonth() {
				let val = this.nowMonth
				val === 1 ? val = 12 : val--
				this.nowMonth = val
				this.$refs.attenCalendar.pre()
			},
			// 下一月
			nextMonth() {
				let val = this.nowMonth
				val === 12 ? val = 1 : val++
				this.nowMonth = val
				this.$refs.attenCalendar.next()
			}
		}
	}
</script>

<style scoped lang="scss">
	// 公用样式
	.calendar-height-close {
		height: 275rpx !important;
	}

	.calendar-height-open {
		height: 600rpx !important;
	}

	.calendar-title-3 {
		font-size: 35rpx;
		font-weight: 700;
	}

	.attenStatis-main {

		.attenStatis-calendar {

			// 日历头部
			.calendar-title {
				display: flex;
				flex-direction: column;
				margin-bottom: 30rpx;
				border-radius: 20rpx;
				background-color: #FFFFFF;
				padding: 30rpx;

				.calendar-head {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding-bottom: 20rpx;

					.calendar-pre {
						color: #D3D3D3;
					}

					.calendar-next {
						color: #D3D3D3;
					}
				}

				.calendar-statis {
					display: flex;
					justify-content: space-around;
					align-items: center;

					.statis-item {
						display: flex;
						flex-direction: column;
						align-items: center;

						.item-num {
							padding: 5rpx 0;
						}

						.item-title {
							padding: 5rpx 0;
							font-size: 25rpx;
							color: #828282;
						}
					}
				}
			}
		}

		.attenStatis-list {
			background-color: #FFFFFF;
			border-radius: 20rpx;

			// 动态控制日历得展开与关闭
			.list-calendar {
				overflow: hidden;
				transition-duration: .3s;
				transition-property: height;
				transition-timing-function: cubic-bezier(.06,.23,1,.69);
			}

			// 日历分割线样式
			.list-calendar-line {
				margin: 20rpx 20rpx 0 20rpx;
				height: 20rpx;
				border-top: solid 2rpx #F0F0F0;

				.iconfont-view {
					text-align: center;
					padding: 0 10rpx;
					position: relative;
					top: -20rpx;

					text {
						color: #d3d3d3;
						background-color: #FFFFFF;
						padding: 0 20rpx;
						font-size: 35rpx;
					}
				}
			}

			.list-calendar-clockRecord {
				padding: 0 20rpx;
			}
		}
	}
</style>
