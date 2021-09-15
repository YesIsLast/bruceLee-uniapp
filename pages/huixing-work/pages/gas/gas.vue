<template>
	<view class="gas-main lee-page-bgc-gray">
		<view class="gas-content">
			<view class="gas-list-item lee-flex lee-justify-content-between lee-align-items-center">
				<text class="item-title">车牌号</text>
				<text class="lee-color-blue-a">宇宙领航者001</text>
			</view>
			<view class="gas-list-item lee-flex lee-justify-content-between lee-align-items-center">
				<text class="item-title">车队</text>
				<text class="lee-color-blue-a">飞天龟</text>
			</view>
			<view class="gas-list-item lee-flex lee-justify-content-between lee-align-items-center">
				<text class="item-title">驾驶员</text>
				<text class="lee-color-blue-a">武天老师</text>
			</view>
			<view class="gas-list-item lee-flex lee-flex-column">
				<text class="item-title">公里数照片</text>
				<view class="">
					<photoLee mode="once" :photoList="kmPhotoList" @change="getKMPhotoList"></photoLee>
				</view>
			</view>
			<view class="gas-list-item lee-flex lee-justify-content-between lee-align-items-center">
				<text class="item-title">加油量(精确到百分比)</text>
				<text class="lee-color-blue-a">12 <text class="lee-color-blue lee-padding-left-10"> 升</text></text>
			</view>

			<view class="gas-list-item lee-flex lee-flex-column">
				<text class="item-title">出油量照片</text>
				<view class="">
					<photo-lee mode="once" :photoList="kmPhotoList" @change="getKMPhotoList"></photo-lee>
				</view>
			</view>
			<view class="gas-list-item lee-flex lee-flex-column">
				<text class="item-title">燃油标号</text>
				<view class="item-tag">
					<block v-for="(item,index) in tagList" :key="index">
						<uni-tag class="tag-class" :inverted="item.status" :text="item.name" type="primary" @click="tagList[index].status = !tagList[index].status" />
					</block>
				</view>
				<view class="item-radios">
					<u-radio-group size="40" shape="square">
						<u-radio icon-size="35rpx" label-size="30rpx" v-for="(item, index) in radioList" :key="index" :name="item.name"
						 @change="radioChange">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			<view class="gas-list-item lee-flex lee-flex-column">
				<text class="item-title">百公里耗油记录</text>
				<view class="item-list">
					<text class="item-list-left">2020-20-20 <text class="lee-color-red">——</text> 2020-30-30</text>
					<text class="item-list-right">999升/百公里</text>
				</view>
				<view class="item-list">
					<text class="item-list-left">2020-20-20 <text class="lee-color-red">——</text> 2020-30-30</text>
					<text class="item-list-right">999升/百公里</text>
				</view>
				<view class="item-list">
					<text class="item-list-left">2020-20-20 <text class="lee-color-red">——</text> 2020-30-30</text>
					<text class="item-list-right">999升/百公里</text>
				</view>
			</view>

			<view class="gas-list-item lee-flex lee-justify-content-between lee-align-items-center">
				<text class="item-title">加油地点</text>
				<text class="lee-color-blue">自动获取</text>
			</view>
			<view class="gas-list-item lee-flex lee-justify-content-between lee-align-items-center">
				<text class="item-title">加油时间</text>
				<text class="lee-color-blue">自动获取</text>
			</view>
		</view>
		<view class="gas-footer">
			<button type="primary">确定</button>
		</view>
	</view>
</template>

<script>
	import uniTag from '@/components/uni-tag/uni-tag.vue'
	import photoLee from '@/components/photo-lee/photo-lee.vue'
	export default {
		name: 'gas',
		components: {
			photoLee,
			uniTag
		},
		data() {
			return {
				kmPhotoList: [], // 公里数照片
				// tag标签列表
				tagList: [{
						name: "#0",
						status: true, // 标签选中状态
					},
					{
						name: "#-10",
						status: false, // 标签选中状态
					},
					{
						name: "#-20",
						status: true, // 标签选中状态
					},
					{
						name: "#-35",
						status: true, // 标签选中状态
					}
				],
				// radio单选按钮列表
				radioList: [{
					name: "未满"
				}, {
					name: "满"
				}, {
					name: "跳枪"
				}]
			}
		},
		methods: {
			getKMPhotoList(value) {
				this.kmPhotoList = value
			},
			// 单选组选中值
			radioChange(e) {
				console.log(e)
			}
		}
	}
</script>

<style scoped lang="scss">
	.gas-main {
		z-index: 1;
		overflow-y: scroll;

		.gas-content {
			margin: 30rpx;
			padding: 0 30rpx;
			background-color: #FFFFFF;
			border-radius: 20rpx;

			.gas-list-item {
				padding: 30rpx 0;
				border-bottom: 1rpx solid $lee-border-gray;
				font-size: 35rpx;
				.item-title{
					font-weight: 700;
				}

				// 标签样式
				.item-tag {
					display: flex;
					flex-wrap: wrap;
					flex: none;
					margin-top: 20rpx;

					.tag-class {
						margin: 10rpx;
					}
				}

				// 单选框样式
				.item-radios {
					margin: 10rpx 0 0 10rpx;
				}

				// 列表样式
				.item-list {
					// margin: 30rpx 0;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 15rpx 0;

					.item-list-left {
						color: #999999;
						font-size: 30rpx;
					}

					.item-list-right {
						color: #0c397c;
					}
				}
			}

			.gas-list-item:last-child {
				border-bottom: none;
			}
		}

		.gas-footer {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 50rpx 0;

			button {
				width: 50%;
			}
		}

	}
</style>
