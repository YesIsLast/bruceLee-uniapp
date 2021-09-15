<template>
	<view class="workLog_detail-main lee-page-bgc-gray">
		<!-- 日志填写记录搜索 -->
		<view class="workLog-search-date" v-show="uniCalendarStatus">
			<uniCalendar ref="attenCalendar" :date="nowDate" :showMonth="false"
			 :selected="clockSelected" :selecteMonth="false"></uniCalendar>
		</view>
		<!-- 页面小标题头 -->
		<workSmallTitle username="贝吉塔的工作日志" datetime="2020-12-31"></workSmallTitle>
		<!-- 暂无日志！ -->
		<emptyLee title="暂未填写日志!" v-if="!workLogObj.type" @click="$utils.goPage('/pages/huixing-work/pages/workLog/workLog_write')"></emptyLee>
		<!-- 日志表单 -->
		<view class="workLog-content" v-show="workLogObj.type">
			<view class="content-item">
				<text class="item-title">今日完成工作</text>
				<textarea disabled v-model="workLogObj.todayComplete" placeholder="请输入今日完成工作"></textarea>
			</view>
			<view class="content-item">
				<text class="item-title">未完成工作</text>
				<textarea disabled v-model="workLogObj.todayUnfinished" placeholder="请输入未完成工作"></textarea>
			</view>
			<view class="content-item">
				<text class="item-title">日志说明（图片/视频）</text>
				<view class="item-fileList">
					<image src="@/static/image/head-1.jpg" mode=""></image>
					<image src="@/static/image/head-2.jpg" mode=""></image>
					<!-- <block v-for="(item,index) in workLogObj.fileList" :key="index">
						<image :src="item" mode=""></image>
					</block> -->
				</view>
			</view>
		</view>

		<view class="workLog-footer" v-if="!workLogObj.type">
			<button type="primary" @click="$utils.goPage('/pages/huixing-work/pages/workLog/workLog_write')">添加日志</button>
		</view>

	</view>
</template>

<script>
	import workSmallTitle from '@/components/work-small-title/work-small-title.vue'
	import uniCalendar from '@/components/uniCalendar/uni-calendar.vue'
	import emptyLee from '@/components/empty-lee/empty-lee.vue'
	export default {
		name: "workLog_detail", // 日志详情
		components: {
			workSmallTitle,
			uniCalendar,
			emptyLee
		},
		onNavigationBarButtonTap(e) {
			console.log("点击了原生导航栏右侧按钮", e)
			this.uniCalendarStatus = !this.uniCalendarStatus
		},
		data() {
			return {
				workLogObj: {
					type: false, // true、有日志  false、无日志
					todayComplete: "今日完成任务，工作日志模块页面开发完成，证件信息页面开发完成", // 今日完成工作
					todayUnfinished: "无", // 未完成工作
					fileList: ['@/static/image/head-1.jpg', '@/static/image/head-2.jpg'] // 日志说明，图片与视频文件列表
				},
				// 当前年月日
				nowDate: "2020-12-06",
				// 日志填写状态列表
				clockSelected: [{
					date: '2020-12-02',
					clockStatus: false
				}, {
					date: '2020-12-05',
					clockStatus: true
				}],
				uniCalendarStatus:false
			}
		}
	}
</script>

<style scoped lang="scss">
	
	
	.workLog_detail-main {
		position: static;
		
		// 日志内容样式
		.workLog-content {
			margin: 30rpx;
			background-color: #FFFFFF;
			border-radius: 30rpx;

			.content-item {
				padding: 30rpx;
				font-size: 35rpx;
				display: flex;
				flex-direction: column;
				border-bottom: 1rpx solid $lee-border-gray;
				height: 20vh;

				.item-title {
					font-weight: 700;
					padding-bottom: 30rpx;
				}

				.item-fileList {
					display: flex;
					flex-wrap: wrap;
					align-items: center;

					image {
						height: 150rpx;
						width: 150rpx;
						margin-right: 20rpx;
						border-radius: 20rpx;
					}
				}
			}
		}

		// 日志记录搜索
		.workLog-search-date {
			margin: 30rpx;
			box-shadow: 0 0 10rpx 10rpx #e8e9ec;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 9;
			border-radius: 20rpx;
			// display: flex;
			// justify-content: center;
			// align-items: center;
			width: 92%;
		}

		.workLog-nothing {
			padding: 30rpx;
			color: $lee-fontColor-gray;
			background-color: #FFFFFF;
			margin: 30rpx 30rpx 100rpx 30rpx;
			border-radius: 30rpx;
		}

		.workLog-footer {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			button {
				margin-top: 150rpx;
				width: 50%;
			}
		}
	}
</style>
