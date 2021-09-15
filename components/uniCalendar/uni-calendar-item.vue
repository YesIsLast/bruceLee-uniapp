<template>
	<view class="uni-calendar-item__weeks-box" :class="{
		'uni-calendar-item--disable':weeks.disable,
		'uni-calendar-item--multiple': weeks.multiple
		}" @click="choiceDate(weeks)">
		<view class="uni-calendar-item__weeks-box-item" :class="{'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate,'uni-calendar-item--isDay-text': weeks.isDay,'uni-calendar-item--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,}">
			<!-- 带扩展未不同状态显示不同实心颜色点 -->
			<text v-if="selected&&weeks.extraInfo" :class="weeks.extraInfo.clockStatus?'uni-calendar-item__weeks-box-circle-primary':'uni-calendar-item__weeks-box-circle-warn'"></text>
			<text class="uni-calendar-item__weeks-box-text" :class="{
				'uni-calendar-item--multiple': weeks.multiple,
				'uni-calendar-item--disable':weeks.disable,
				}">{{weeks.date}}</text>
				<!-- 本日日期样式 -->
			<view v-if="!lunar&&!weeks.extraInfo && weeks.isDay" class="uni-calendar-item__weeks-lunar-text" :class="{
				'uni-calendar-item--multiple': weeks.multiple,
				}"></view>
			<text v-if="lunar&&!weeks.extraInfo" class="uni-calendar-item__weeks-lunar-text" :class="{
				'uni-calendar-item--multiple': weeks.multiple,
				'uni-calendar-item--disable':weeks.disable,
				}">{{weeks.isDay?'今天': (weeks.lunar.IDayCn === '初一'?weeks.lunar.IMonthCn:weeks.lunar.IDayCn)}}</text>
			<text v-if="weeks.extraInfo&&weeks.extraInfo.info" class="uni-calendar-item__weeks-lunar-text" :class="{
				'uni-calendar-item--extra':weeks.extraInfo.info,
				'uni-calendar-item--multiple': weeks.multiple,
				'uni-calendar-item--disable':weeks.disable,
				}">{{weeks.extraInfo.info}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			weeks: {
				type: Object,
				default () {
					return {}
				}
			},
			calendar: {
				type: Object,
				default: () => {
					return {}
				}
			},
			selected: {
				type: Array,
				default: () => {
					return []
				}
			},
			lunar: {
				type: Boolean,
				default: false
			}
		},
		mounted() {
			// console.log("查看组件传参day值",this.weeks,)
		},
		methods: {
			choiceDate(weeks) {
				this.$emit('change', this.weeks,this.selected)
			}
		}
	}
</script>

<style scoped>
	.uni-calendar-item__weeks-box {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.uni-calendar-item__weeks-box-text {
		font-size: 28rpx;
	}

	.uni-calendar-item__weeks-lunar-text {
		font-size: 24rpx;
		color: #333;
	}

	.uni-calendar-item__weeks-box-item {
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		color: #333;
	}

	.uni-calendar-item__weeks-box-circle-warn {
		position: absolute;
		bottom: 8rpx;
		width: 16upx;
		height: 16upx;
		border-radius: 16upx;
		background-color: #FF921A;
	}
	.uni-calendar-item__weeks-box-circle-primary {
		position: absolute;
		bottom: 8rpx;
		width: 16upx;
		height: 16upx;
		border-radius: 16upx;
		background-color: #4285F4;
	}

	.uni-calendar-item--disable {
		background-color: rgba(249, 249, 249, 0.3);
		color: #c0c0c0;
	}
	/* 设置本日显示样式 */
	.uni-calendar-item--isDay-text {
		/* 边框版 */
		/* color: #007AFF;
		border: solid 1rpx #007AFF; */
		/* 实心版 */
		color: #FFFFFF;
		background-color: #C7DBFC;
	}

	.uni-calendar-item--isDay {
		background-color: #007aff;
		opacity: 0.8;
		color: #fff;
	}

	.uni-calendar-item--extra {
		color: #dd524d;
		opacity: 0.8;
	}

	.uni-calendar-item--checked {
		background-color: #007aff;
		color: #fff;
		opacity: 0.8;
	}

	.uni-calendar-item--multiple {
		background-color: #007aff;
		color: #fff;
		opacity: 0.8;
	}
</style>