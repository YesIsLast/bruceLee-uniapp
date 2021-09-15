<template>
	<view class="clock-record">
		<!-- 打卡规则 -->
		<view class="clock-rules">
			<text>规则：固定上下班 默认班次08:00 - 17:00</text>
			<text>共2次卡，工时9.3小时</text>
		</view>
		<!-- 记录树 -->
		<view class="record-tree">
			<block v-for="(item,index) in list" v-bind:key="index">
				<view class="record-item">
					<view class="record-title">
						<text class="tree-round lee-margin-right-20"></text>
						<text class="lee-font-size-30 lee-font-weight-600 lee-padding-right-20">{{item.typeText}}<text>{{item.datetime}}</text></text>
						<view :class="item.status?'clock-btn-primary':'clock-btn-warn'" @click="detailsee(item)">
							{{item.statusStr}}
						</view>
					</view>
					<view class="record-content">
						<text class="iconfont icondingwei1"></text>
						<text>{{item.address}}</text>
					</view>
				</view>
			</block>
		</view>
		
		<!-- 异常打卡说明查看 -->
		<drawerPopupLee mode='bottom' width="100vw" height="52vh" borderRadius="30rpx 30rpx 0 0" :show="drawerPopupLeeVal"
		 @close="closeDrawer">
			<template #content>
				<!-- 打卡备注 -->
				<clockRemark></clockRemark>
			</template>
		</drawerPopupLee>
	</view>
</template>

<script>
	import drawerPopupLee from '@/components/drawerPopup-lee/drawerPopup-lee.vue'
	import clockRemark from './clockRemark.vue'
	export default {
		components:{
			drawerPopupLee,
			clockRemark
		},
		props: {
			list: {
				type: Array,
				default: function() {
					return []
				}
			}
		},
		data(){
			return{
				drawerPopupLeeVal:false
			}
		},
		methods:{
			// 查看打卡备注
			detailsee(item){
				console.log("查看打卡备注数据",item)
				this.drawerPopupLeeVal = true
			},
			// 关闭打卡备注弹出框
			closeDrawer(){
				this.drawerPopupLeeVal = false
			}
		}
	}
</script>

<style scoped lang="scss">
	// 公用样式
	.tree-round {
		width: 20rpx;
		height: 20rpx;
		border-radius: 50%;
		background-color: #999999;
	}
	// 正常状态按钮
	.clock-btn-primary{
		border: solid 2rpx #092757;
		border-radius: 50rpx;
		padding:0rpx 20rpx;
		color: #092757;
	}
	.clock-btn-warn{
		border: solid 2rpx #FF921A;
		border-radius: 50rpx;
		padding:0rpx 20rpx;
		color: #FF921A;
	}

	.clock-record {
		padding-top: 20rpx;

		.clock-rules {
			color: #999999;
			display: flex;
			flex-direction: column;

			text {
				padding: 5rpx 0;
			}
		}

		.record-tree {
			display: flex;
			flex-direction: column;
			padding-top: 20rpx;

			.record-item {
				display: flex;
				flex-direction: column;

				.record-title {
					display: flex;
					justify-content: flex-start;
					align-items: center;
				}

				.record-content {
					padding: 30rpx 30rpx 30rpx 40rpx;
					border-left: solid 5rpx #E0E0E0;
					margin-left: 8rpx;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					
					.iconfont{
						margin-right: 20rpx;
						font-size: 30rpx;
					}
				}

			}
			
			.record-item:last-child {
				.record-content {
					border-left: none;
				}
			}
		}
	}
</style>
