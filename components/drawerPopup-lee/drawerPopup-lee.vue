<template>
	<view class="drawerPopupLee-main">
		<view class="main-mask" v-show="showMask" @click.stop="$emit('close')"></view>
		<!-- vue的写法在uni-app中无效，特意留下 -->
		<!-- <transition name="maskFade">
			<view class="main-mask" v-if="show" @click.stop="$emit('close')"></view>
		</transition> -->
		<view class="main-content" :style="modeCustomStyle">
			<!-- 插槽内容自定义 -->
			<slot name="content" v-show="show"></slot>
		</view>
	</view>
</template>

<!-- 抽屉型弹出框组件 -->
<script>
	export default {
		name: 'drawerPopupLee',
		props: {
			// 是否显示
			show: {
				type: Boolean,
				default: false
			},
			// 抽屉方向 top right bottom left
			mode: {
				type: String,
				default: 'bottom',
			},
			// 抽屉高度 需要写入尺寸单位
			height: {
				type: String,
				default: '50vh'
			},
			// 抽屉宽度 需要写入尺寸单位
			width: {
				type: String,
				default: '100vw'
			},
			// 抽屉背景颜色
			backgroundColor: {
				type: String,
				default: '#ffffff'
			},
			// 圆角样式
			borderRadius: {
				type: String,
				default: "0 0 0 0"
			}
		},
		computed: {
			// 滑动动作 行内样式
			modeStyleShow: function() {
				let styleArr = ['translateY(-7%)', 'translateX(7%)', 'translateY(7%)', 'translateX(-7%)']
				return styleArr[this.directionArr.indexOf(this.mode)]
			},
			modeStyleHide: function() {
				let styleArr = ['translateY(-100%)', 'translateX(100%)', 'translateY(100%)', 'translateX(-100%)']
				return styleArr[this.directionArr.indexOf(this.mode)]
			},
			// 页面自定义样式
			modeCustomStyle: function() {
				return {
					width: this.width,
					height: this.height,
					backgroundColor: this.backgroundColor,
					transform: this.show ? this.modeStyleShow : this.modeStyleHide,
					borderRadius: this.borderRadius,
					// 定位抽屉
					bottom: ['bottom', 'left', 'right'].includes(this.mode) ? 0 : '',
					left: ['bottom', 'left', 'top'].includes(this.mode) ? 0 : '',
					right: ['bottom', 'right', 'top'].includes(this.mode) ? 0 : '',
					top: ['left', 'right', 'top'].includes(this.mode) ? 0 : '',
					// 处理动画执行时，产生的空白区域
					paddingLeft: this.mode == 'left' ? '30rpx' : '0',
					paddingRight: this.mode == 'right' ? '30rpx' : '0',
					paddingBottom: this.mode == 'bottom' ? '40rpx' : '0',
					paddingTop: this.mode == 'top' ? '40rpx' : '0',
				}
			}

		},
		watch:{
			show:function(newVal,oldVal){
				if(newVal){
					this.showMask = newVal
				}else{
					setTimeout(()=>{
						this.showMask = newVal
					},300)
				}
			}
		},
		data() {
			return {
				directionArr: ['top', 'right', 'bottom', 'left'] ,// 滑动方向数组下标
				showMask:false
			}
		}
	}
</script>

<style scoped lang="scss">
	.drawerPopupLee-main {

		// 蒙层样式
		.main-mask {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			height: 100vh;
			width: 100vw;
			background-color: #000000;
			opacity: .6;
			z-index: 999;
		}

		.main-content {
			position: fixed;
			z-index: 1000;
			transition: all .4s cubic-bezier(.92, -0.48, .24, 1.49);
		}
	}

	// 蒙层动画淡入淡出
	.maskFade-enter-active {
		// vue动画 元素进入状态钩子
		animation: fade-in 1s;
	}

	.maskFade-leave-active {
		// vue动画 元素离开状态钩子
		animation: fade-out 1s;
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
		}

		20% {
			opacity: .1;
		}

		50% {
			opacity: .3;
		}

		100% {
			opacity: .6;
		}
	}

	@keyframes fade-out {
		0% {
			opacity: .6;
		}

		20% {
			opacity: .4;
		}

		50% {
			opacity: .2;
		}

		100% {
			opacity: 0;
		}
	}
</style>
