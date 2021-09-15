<template>
	<view class="workLog_write-main">
		<!-- 页面小标题头 -->
		<workSmallTitle username="贝吉塔的工作日志" datetime="2020-12-31"></workSmallTitle>
		<!-- 已填写日志！ -->
		<view class="workLog-nothing" v-show="workLogObj.type">
			<text>今日日志已填写，无需再次填写！</text>
		</view>
		<!-- 日志表单 -->
		<view class="workLog-content" v-show="!workLogObj.type">
			<view class="content-item">
				<text class="item-title">今日完成工作</text>
				<textarea v-model="workLogObj.todayComplete" placeholder="请输入今日完成工作"></textarea>
			</view>
			<view class="content-item">
				<text class="item-title">未完成工作</text>
				<textarea v-model="workLogObj.todayUnfinished" placeholder="请输入未完成工作"></textarea>
			</view>
			<view class="content-item">
				<text class="item-title">日志说明（图片/视频）</text>
				<view class="item-fileList">
					<image src="@/static/image/head-1.jpg" mode=""></image>
				</view>
			</view>
		</view>


		<view class="workLog-footer">
			<button type="primary" @click="$utils.goPage('/pages/huixing-work/pages/workLog/workLog_write')">提交日志</button>
		</view>
	</view>
</template>

<script>
	import workSmallTitle from '@/components/work-small-title/work-small-title.vue'
	export default {
		name: "workLog_write", // 写日志
		components: {
			workSmallTitle
		},
		data() {
			return {
				workLogObj: {
					type: false, // true、有日志  false、无日志
					todayComplete: "", // 今日完成工作
					todayUnfinished: "", // 未完成工作
					fileList: [] // 日志说明，图片与视频文件列表
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.workLog_write-main {

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
