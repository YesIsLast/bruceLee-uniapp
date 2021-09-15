<template>
	<view class="clockRemark-main">
		<view class="clockRemark-head">
			<text class="iconfont iconclose2"></text>
			<view class="title">
				未正常打卡说明
			</view>
		</view>
		<view class="clockRemark-content">
			<!-- 文字备注 -->
			<view class="text-remark">
				<text class="lee-font-weight-600">文字备注</text>
				<view class="remark-textarea">
					<textarea :disabled="operation == 'detail'?true:false" auto-height placeholder="占位符字体是红色的" />
					</view>
			</view>
			<!-- 语音备注 -->
			<view class="voice-remark">
				<view class="voice-title">
					<text class="lee-font-weight-600">语音备注</text>
					<view class="voice-btn" v-show="operation == 'detail'?false:true">
						<text class="iconfont iconmaikefeng-tianchong"></text>
					</view>
				</view>
				<!-- 语音文件列表 -->
				<view class="voice-list">
					<block>
						<view class="list-item voice-width-40">
							<view class="item-head"><image src="../../../../../static/image/head-1.jpg" mode=""></image></view>
							<view class="item-content">
								<text class="iconfont iconyuyin lee-margin-right-10"></text>
								<text>12"</text>
							</view>
						</view>
					</block>
					<block>
						<view class="list-item voice-width-60">
							<view class="item-head"><image src="../../../../../static/image/head-1.jpg" mode=""></image></view>
							<view class="item-content">
								<text class="iconfont iconyuyin lee-margin-right-10"></text>
								<text>20"</text>
							</view>
						</view>
					</block>
				</view>
			</view>
		</view>
		<view class="clockRemark-footer">
			<button v-show="operation == 'detail'?false:true" type="default" class="button-warn" hover-class='button-warn-hover'>异常打卡</button>
		</view>
	</view>
</template>

<script>
	export default{
		name:"clockRemark",
		props:{
			operation:{
				type:String,
				default:"detail", // editor 编辑 detail详情
			}
		}
	}
</script>

<style scoped lang="scss">
	// 公用样式
	.voice-width-40{
		width: 40%;
	}
	.voice-width-60{
		width: 60%;
	}
	.voice-width-80{
		width: 80%;
	}
	
	// 自定义警告按钮样式
	.button-warn{
		color: #FFFFFF !important;
		background-color: #FF921A !important;
	}
	.button-warn-hover{
		opacity: .5;
		background-color: #FF921A;
	}
	
	.clockRemark-main {
		// 增加滚动
		height: 100%;
		overflow-y: scroll;
		// 页面头
		.clockRemark-head {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 25rpx 30rpx;
			font-size: 35rpx;
			border-bottom: solid 1px #EBEFF2;
			border-radius: 30rpx 30rpx 0 0;
			// 固定页头
			position: fixed;
			z-index: 1001;
			width: 100%;
			background-color: #FFFFFF;

			.iconfont {
				flex: 1;
				font-size: 40rpx;
			}

			.title {
				flex: 2;
			}
		}
		// 页面内容
		.clockRemark-content {
			margin-top: 100rpx;
			padding: 30rpx;
			font-size: 30rpx;
			.text-remark{
				border-bottom: solid 1px #E0E0E0;
				padding-bottom: 20rpx;
				.remark-textarea{
					min-height: 100rpx;
					textarea{
						font-size: 30rpx;
					}
				}
			}
			.voice-remark{
				
				.voice-title{
					margin: 20rpx 0;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.voice-btn{
						margin-right: 15rpx;
						width: 80rpx;
						height: 80rpx;
						border-radius: 50%;
						background-color: #4285F4;
						display: flex;
						justify-content: center;
						align-items: center;
						.iconfont{
							color: #FFFFFF;
							font-size: 50rpx;
						}
					}
				}
				
				.voice-list{
					.list-item{
						margin: 15rpx 0;
						display: flex;
						justify-content: space-between;
						align-items: center;
						height: 60rpx;
						.item-head{
							image{
								width: 60rpx;
								height: 60rpx;
								border-radius: 50%;
								flex: 1;
							}
						}
						.item-content{
							height: 100%;
							flex: 2;
							margin-left: 30rpx;
							background-color: #52CCC2; // 设置实心气泡框
							// border: solid 1px #52CCC2; // 设置透明气泡框
							border-radius: 10rpx;
							display: flex;
							position: relative; // 使伪类before的absolute相对于这层绝对定位
							z-index: 1002;
							padding-left: 30rpx;
							display: flex;
							align-items: center;
						}
						// 设置实心气泡框
						.item-content:before{
							content:"\00a0";
							width:0;
							height:0;
							display:block;
							border-style: solid;
							border-width: 10rpx 15rpx 10rpx 0;
							border-color: transparent  #52CCC2 transparent  transparent ;
							position: absolute;
							left: -15rpx;
							z-index: 1001;
							top: 20rpx;
						}
						// 设置透明气泡框
						// .item-content:after{
						// 	content:"";
						// 	width:0;
						// 	height:0;
						// 	display:block;
						// 	border-style: solid;
						// 	border-width: 10rpx 15rpx 10rpx 0;
						// 	border-color: transparent  #ffffff transparent  transparent ;
						// 	position: absolute;
						// 	left: -10rpx;
						// 	z-index: 1001;
						// 	top: 20rpx;
						// }
					}
				}
			}
		}

		.clockRemark-footer {
			padding: 0 30rpx;
			margin-bottom: 50rpx;
		}
	}
</style>
