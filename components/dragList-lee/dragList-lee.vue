<template>
	<view class="dragList-lee-main">
		<movable-area ref="movableArea" id="movableArea" style="height: auto;width: 100%;display: flex;flex-wrap: wrap;">
			<!-- 业务代码模块 -->
			<view :class="(hoverClass === 'dragItem'+index)?'dragItemHover':''" class="list-item" :id="'dragItem' + index" v-for="(item,index) in dragList"
			 :key="index" @touchstart="touchstart_drag(item,index,$event)" @touchmove="touchmove_drag" @touchend="touchend_drag(index)">
				<view class="item-title">
					<text class="item-title-num">第{{index+1}}站</text>
					<text class="item-title-val">{{item.dragName}}</text>
				</view>
				<view class="item-content">
					<view class="item-addr">
						<text>位置：<text>{{item.dragAddr}}</text></text>
					</view>
					<view class="item-addr-btn">
						<button type="primary" size="mini">定位拍照</button>
					</view>
				</view>
			</view>
			<!-- 拖拽模块样式代码 -->
			<movable-view :animation="false" direction="vertical" v-if="drag_status" :x="movableViewX" :y="movableViewY" :style="{ width: moveViewSize + 'px', height: '120rpx;'}">
				<view class="movable-list-item">
					<view class="item-title">
						<text class="item-title-num">第{{touchForm.dragNum}}站</text>
						<text class="item-title-val">{{touchForm.dragName}}</text>
					</view>
					<view class="item-content">
						<view class="item-addr">
							<text>位置：<text>{{touchForm.dragAddr}}</text></text>
						</view>
						<view class="item-addr-btn">
							<button type="primary" size="mini">定位拍照</button>
						</view>
					</view>
				</view>
			</movable-view>
		</movable-area>
	</view>
</template>

<script>
	export default {
		name: "dragList-lee", // 可拖拽排序列表
		props: {
			// 拖拽列表
			list: {
				type: Array,
				default: function() {
					return [{
						// dragNum: 1,
						dragName: "临河街",
						dragAddr: "临河街与自由大路交汇",
						dragDom: {}, // 当前行dom信息
					}, {
						// dragNum: 1,
						dragName: "繁荣路人民大街",
						dragAddr: "繁荣路与人民大街交汇",
						dragDom: {}, // 当前行dom信息
					}]
				}
			}
		},
		watch:{
			list:{
				handler: function(newval,oldval){
					console.log("数据列表发生变化触发深度监听")
					this.dragList = newval.filter(item =>{
						return item
					})
				},
				deep: true,
				immediate: true
			}
			
			
		},
		computed: {
			// movable-view拖拽组件宽度，取父元素宽度并减掉padding值
			moveViewSize() {
				if (this.movableAreaDom && this.movableAreaDom.width) {
					return this.movableAreaDom.width - 30
				} else {
					return 0
				}
			}
		},
		data() {
			return {
				dragList:[], // 源数据
				dragListBackup: [], // 源数据备份
				drag_status: false, // 是否显示滑块组件
				touchPress: false, // 是否允许拖拽
				sortArrayStatus: false, // 是否允许数组排序
				movableViewX: 0, // movableView组件X坐标
				movableViewY: 0, // movableView组件Y坐标
				movableAreaDom: null, //保存滑动区域盒子dom信息
				//鼠标所在坐标信息
				mouseXY: {
					x: 0,
					y: 0
				},
				hoverClass: '', // 要替换的行数据样式
				hoverClassIndex: null, // 要替换的行下标
				nowClassIndex: null, // 准备替换的行下标
				touchForm: {
					dragNum: 0,
					dragName: "",
					dragAddr: "",
				},
			}
		},
		mounted() {
			this.dragListBackup = JSON.parse(JSON.stringify(this.list)) // 备份源数据
			this.dragList = JSON.parse(JSON.stringify(this.list)) // 复制源数据
			// 获取dom信息
			this.resetListDom()
		},
		methods: {
			// 拖拽相关方法
			touchstart_drag(item, index, event) {
				console.log('开始拖拽touchstart_drag', index, event)
				// 开始计时 按住超过一秒才允许拉拽,否则会停止定时器并初始化拖拽状态
				this.globalDragSwitch = setTimeout(() => {
					this.touchPress = true // 允许拖拽
					// 执行拖拽
					uni.vibrateLong(); // 触发震动
					this.drag_status = true // 显示拖拽组件
					// 设置拖拽组件坐标
					this.movableViewX = this.dragList[index].dragDom.x;
					this.movableViewY = this.dragList[index].dragDom.y;
					// 保存鼠标在图片内的坐标
					var x = event.changedTouches[0].clientX - this.movableAreaDom.left;
					var y = event.changedTouches[0].clientY - this.movableAreaDom.top;
					this.mouseXY.x = x - this.dragList[index].dragDom.x
					this.mouseXY.y = y - this.dragList[index].dragDom.y

					// 设置拖拽组件内容,赋值
					this.touchForm.dragNum = index + 1
					this.touchForm.dragName = item.dragName
					this.touchForm.dragAddr = item.dragAddr
					// 赋值当前拖动行下标
					this.nowClassIndex = index
				}, 1000)

			},
			touchmove_drag(event) {
				// 当前是否选中并可以执行拖拽
				// console.log('当前是否选中滑块，是否允许开始拖拽', this.touchPress)
				if (this.touchPress) {
					// 停止定时器
					clearTimeout(this.globalDragSwitch)
					// 设置拖拽组件坐标
					let x = event.changedTouches[0].clientX - this.movableAreaDom.left;
					let y = event.changedTouches[0].clientY - this.movableAreaDom.top;
					this.movableViewX = x - this.mouseXY.x;
					this.movableViewY = y - this.mouseXY.y;

					// 判断是否悬浮到指定行
					this.sortArrayStatus = this.getTouchHover(x, y)
				}
			},
			touchend_drag(index) {
				// 停止定时器
				clearTimeout(this.globalDragSwitch)
				// 隐藏滑块、删除行数据悬浮样式
				this.drag_status = false
				this.hoverClass = ""

				// 数组排序前的校验
				// 是否允许拖拽校验
				if (!this.touchPress) {
					return
				} else {
					// 禁止拖拽
					this.touchPress = false
				}
				// 是否允许数组重新排序
				if (!this.sortArrayStatus) {
					return
				}
				console.log("操作结束touchend_drag,执行数组排序", this.touchPress)
				// 数组排序
				this.sortArray()

			},
			// 获取hover范围
			getTouchHover(x, y) {
				// 是否悬浮到指定块
				let hoverStatus = false;
				this.dragList.forEach((item, index) => {
					// 判断指定块的范围 x > item.dragDom.x && x < item.dragDom.x + 80 && 
					if (y > item.dragDom.y && y < item.dragDom.y + 120) {
						this.hoverClass = 'dragItem' + index
						hoverStatus = true
						this.hoverClassIndex = index; // 记录要替换的行数据下标
						// console.log('准备替换数组第'+this.hoverClassIndex+"项")
					}
				});
				// 都不存在代表脱离
				if (!hoverStatus) {
					this.hoverClass = ""
					this.hoverClassIndex = null;
				}
				return hoverStatus
			},
			// 数组重新排序
			sortArray() {
				// 深拷贝
				let list = JSON.parse(JSON.stringify(this.dragList))
				// 删除数组中当前拖动行
				list.splice(this.nowClassIndex, 1)
				// 向要替换的行之前插入当前拖动行数据
				list.splice(this.hoverClassIndex, 0, this.dragList[this.nowClassIndex])

				// 触发视图更新
				this.dragList = list.filter(function(item) {
					return item
				})
				console.log("查看数组重新排序之后数据", this.dragList)

				// 数据初始化
				this.hoverClassIndex = null;
				this.nowClassIndex = null
				this.resetListDom()
			},

			// 获取DOM信息
			getDomInfo(id, callBack) {
				const query = uni.createSelectorQuery().in(this);
				query.select('#' + id)
					.boundingClientRect()
					.exec(function(res) {
						callBack(res[0]);
					});
			},
			// DOM数据初始化
			resetListDom() {
				let _this = this;
				this.getDomInfo('movableArea', info => {
					_this.movableAreaDom = info;
					// 设置区域内所有图片的左上角坐标
					_this.dragList.forEach((item, index) => {
						item.dragDom = {}
						_this.getDomInfo('dragItem' + index, res => {
							// 减掉父元素的空余坐标,防止因为多余部分显示内容位置不正确
							item.dragDom.x = res.left - info.left
							item.dragDom.y = res.top - info.top
						});
					});
				});
			},
		}
	}
</script>

<style scoped lang="scss">
	// 列表行数据被hover的数据样式
	.dragItemHover {
		color: #b3b3b3 !important;
		background-color: #FFFFFF;
		box-shadow: 0 0 10rpx 4rpx #4bb7ff;
	}

	// 手指选中的滑动块样式
	.movable-list-item {
		background-color: #6eafff;
		opacity: .4;
		font-size: 30rpx;
		height: 100rpx;
		box-shadow: 0 0 10rpx 4rpx #007aff;
		margin-bottom: 30rpx;
		border-radius: 20rpx;
		padding: 15px;
		width: 100%;

		.item-title {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-bottom: 15rpx;

			.item-title-num {
				flex: 1;
			}

			.item-title-val {
				flex: 2;
				font-weight: 700;
			}
		}

		.item-content {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.item-addr {
				width: 70%;
				display: flex;
				flex-wrap: wrap;
				font-size: 25rpx;
			}

			.item-addr-btn {
				// width: 30%;
				// display: flex;
				// align-items: center;
				// justify-content: center;
			}

		}
	}

	.dragList-lee-main {
		.list-item {
			@extend .movable-list-item;
			// 重载继承样式
			background-color: #FFFFFF;
			font-size: 35rpx;
			height: 120rpx;
			box-shadow: 0 0 10rpx 4rpx #e6e6e6;
			opacity: 1;

		}
	}
</style>
