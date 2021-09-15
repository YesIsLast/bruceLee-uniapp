<template>
	<view class="maintenance-list-main lee-page-bgc-gray">
		<!-- 页面小标题头 -->
		<workSmallTitle username="孙悟饭的维修" datetime="2020-12-31"></workSmallTitle>
		<!-- 暂无日志！ -->
		<emptyLee title="暂无维修信息,请添加!" v-if="list.length == 0"></emptyLee>
		<view class="maintenance-list-item" v-for="(item,index) in list" :key="index" v-else>
			<view class="item-title">
				<text class="">吉A12345</text>
				<view class="item-status">
					<text :class="item.type == 0?'lee-color-yellow':'lee-color-blue-a'">{{item.type == 0?'未完成':"已完成"}}</text>
					<text class="item-icon-round" v-show="item.type == 0"></text>
				</view>
			</view>
			<view class="item-content" @click="$utils.goPage('/pages/huixing-work/pages/maintenance/maintenance-detail')">
				<view class="content-row1">
					<text class="">维修要求</text>
					<text class="lee-color-blue-a lee-font-weight-500 lee-font-size-30">12-12 20:20之前</text>
				</view>
				<view class="content-row2">
					<text>维修要求，必须将万倍界王拳练好，将天界搭理干净</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import workSmallTitle from '@/components/work-small-title/work-small-title.vue'
	import emptyLee from '@/components/empty-lee/empty-lee.vue'
	export default {
		name: "maintenance-list",
		components: {
			workSmallTitle,
			emptyLee
		},
		onNavigationBarButtonTap(e) {
			console.log("点击维修列表添加按钮，跳转至维修添加页面", e)
			this.$utils.goPage('/pages/huixing-work/pages/maintenance/maintenance-add')
		},
		data() {
			return {
				list: [{
						// 单条数据字段值
						type: 0, // 任务完成状态  0、未完成 1、已完成
					},
					{
						// 单条数据字段值
						type: 1, // 任务完成状态  0、未完成 1、已完成
					}
				]
			}
		}
	}
</script>

<style scoped lang="scss">
	// 公用样式
	.mainList-title {
		font-size: 35rpx;
		font-weight: 700;
		letter-spacing: 3rpx;
	}

	.maintenance-list-main {
		z-index: 1;

		.maintenance-list-item {
			display: flex;
			flex-direction: column;
			margin: 30rpx 30rpx 0 30rpx;
			background-color: #FFFFFF;
			border-radius: 30rpx;

			.item-title {
				display: flex;
				justify-content: space-between;
				align-items: center;
				@extend .mainList-title;
				padding: 30rpx;
				border-bottom: 1rpx solid $lee-border-gray;

				.item-status {
					font-size: 30rpx;
					font-weight: 500;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
				}

				.item-icon-round {
					width: 20rpx;
					height: 20rpx;
					border-radius: 50%;
					background-color: #FF921A;
					margin-left: 15rpx;
				}
			}

			.item-content {
				padding: 30rpx;
				display: flex;
				flex-direction: column;

				.content-row1 {
					@extend .mainList-title;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 20rpx;
				}

				.content-row2 {}
			}
		}
	}
</style>
