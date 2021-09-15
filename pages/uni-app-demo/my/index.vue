<template>
	<view class="dragList-lee-main">
		<movable-area ref="movableArea" id="movableArea" style="height: auto;width: 100%;display: flex;flex-wrap: wrap;">
			<!-- 业务代码模块 -->
			<view :class="(hoverClass === 'dragItem'+index)?'dragItemHover':''" class="list-item" :id="'dragItem' + index" v-for="(item,index) in dragList"
			 :key="index" @touchstart.stop ="touchstart_drag(item,index,$event)" @touchmove="touchmove_drag" @touchend="touchend_drag(index)">
				<!-- 内容头 -->
				<view class="item-left">
					<text>第<text class="color-f00 font-22">{{index+1}}</text>站</text>
					<image v-if="item.photoList[0].imgPath.length != 0 || item.photoList[0].filePath.length != 0 " :src="item.photoList[0].imgPath?item.photoList[0].imgPath:item.photoList[0].filePath"
					 mode=""></image>
				</view>
				<!-- 内容主体部分 -->
				<view class="item-right">
					<view class="dragList-deleteBtn">
						<text class="iconfont iconclose2"></text>
					</view>
					<view class="item-right-title">
						<text class="item-title-val">{{item.dragName}}</text>
						<view class="item-title-checkbox">
							<checkbox-group @change="checkboxChange($event,index)">
								<label v-for="(itemCheck,indexCheck) in siteCheckboxList" :key="indexCheck">
									<checkbox class="checkbox-size-7" :value="itemCheck.value" :checked="item.dragMode.indexOf(itemCheck.value)!= -1" />{{itemCheck.text}}
								</label>
							</checkbox-group>
						</view>
					</view>
					<view class="item-right-content">
						<view class="item-addr">
							<text>位置：{{item.dragAddr}}</text>
						</view>
						<view class="item-addr-btn" @click="uploadImg(index)">
							<button type="primary" size="mini">标点</button>
						</view>
					</view>
				</view>
			</view>
			<!-- 拖拽模块样式代码 -->
			<movable-view :animation="false" direction="vertical" v-if="drag_status" :x="movableViewX" :y="movableViewY" :style="{ width: moveViewSize + 'px', height: '120rpx;'}">
				<view class="movable-list-item">
					<!-- 内容头 -->
					<view class="item-left">
						<text>第<text class="color-f00 font-22">{{touchForm.dragNum}}</text>站</text>
					</view>
					<!-- 内容主体部分 -->
					<view class="item-right">
						<view class="item-right-title">
							<text class="item-title-val">{{touchForm.dragName}}</text>
							<view class="item-title-checkbox">
								<checkbox-group>
									<checkbox-group>
										<label v-for="(itemCheck,indexCheck) in siteCheckboxList" :key="indexCheck">
											<checkbox class="checkbox-size-7" value="cb" :checked="touchForm.dragMode.indexOf(itemCheck.value)!= -1" />{{itemCheck.text}}
										</label>
									</checkbox-group>
								</checkbox-group>
							</view>
						</view>
						<view class="item-right-content">
							<view class="item-addr">
								<text>位置：{{touchForm.dragAddr}}</text>
							</view>
							<view class="item-addr-btn">
								<button type="primary" size="mini">标点</button>
							</view>
						</view>
					</view>
				</view>
			</movable-view>
		</movable-area>
		<!-- 添加站点 -->
		<!-- <view class="list-item-add" @click="addSite">
			<view class="">
				<text class="iconfont icon-hao"></text>
			</view>
		</view> -->
	</view>
</template>

<script>
	import utils from '@/common/utils.js'
	import time from '@/common/time.js'
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
						dragAddr: "临河街与自由大路交汇路交汇临河街与自由大路交汇路交汇临河街与自由大路交汇路交汇",
						dragDom: {}, // 当前行dom信息
						dragMode: [0, 1], // 当前站点模式
						addressForm:{}, // 当前站点详细信息
						// 站点照片
						photoList: [{
							filePath: "",
							latitude: "",
							longitude: "",
							photographTime: "",
							photoType: '2',
							imgPath: ""
						}],
					}, {
						// dragNum: 1,
						dragName: "繁荣路人民大街",
						dragAddr: "繁荣路与人民大街交汇",
						dragDom: {}, // 当前行dom信息
						dragMode: [0], // 当前站点模式
						addressForm:{}, // 当前站点详细信息
						// 站点照片
						photoList: [{
							filePath: "",
							latitude: "",
							longitude: "",
							photographTime: "",
							photoType: '2',
							imgPath: ""
						}],
					}]
				}
			}
		},
		watch: {
			// 监听父组件列表数据变化
			list: {
				handler: function(newval, oldval) {
					console.log("父组件数据列表发生变化触发深度监听")
					this.dragList = newval.filter(item => {
						return item
					})
				},
				deep: true,
				immediate: true
			},
			// 监听子组件列表数据变化，为父组件提供change方法
			dragList:{
				handler: function(newval, oldval) {
					this.$emit("change",newval)
				},
				deep: true,
				immediate: true
			}
		},
		computed: {
			// movable-view拖拽组件宽度，取父元素宽度并减掉padding值
			moveViewSize() {
				if (this.movableAreaDom && this.movableAreaDom.width) {
					return this.movableAreaDom.width
				} else {
					return 0
				}
			}
		},
		data() {
			return {
				dragList: [], // 源数据
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
				// 拖拽组件form表单值，（列表行数据的单挑体现）
				touchForm: {
					dragNum: 0,
					dragName: "",
					dragAddr: "",
					dragMode: [],
					addressForm:{},
					photoList:[{
							filePath: "",
							latitude: "",
							longitude: "",
							photographTime: "",
							photoType: '2',
							imgPath: ""
						}]
				},
				// 站点模式列表
				siteCheckboxList: [{
					value: 0,
					text: "接班"
				}, {
					value: 1,
					text: "送班"
				}],

				// 定位信息，根据需求自行取值
				addressForm:{
					"country": "",
					"province": "",
					"city": "",
					"district": "",
					"street": "",
					"streetNum": "",
					"poiName": "",
					"cityCode": ""
				}
			}
		},
		mounted() {
			this.dragListBackup = JSON.parse(JSON.stringify(this.list)) // 备份源数据
			this.dragList = JSON.parse(JSON.stringify(this.list)) // 复制源数据
			// 初始化页面
			this.init()
		},
		methods: {
			// 页面数据初始化
			async init(){
				// 获取dom信息
				await this.resetListDom()
				// 获取当前位置信息
				await this.locationAddr()
			},
			// 添加站点
			addSite() {
				this.dragList.push(this.touchForm)
				// 延迟获取，规避异步执行产生的获取dom失败bug
				setTimeout(()=>{
					// 初始化页面
					this.init()
				},500)
			},
			// 获取当前位置
			locationAddr(index){
				// 获取当前位置
				utils.getNowAddress().then(res => {
					// 定位信息赋值
					this.addressForm = res.address
					// 拖拽框信息赋默认值
					this.touchForm.dragNum = 0
					this.touchForm.dragName = res.address.street
					this.touchForm.dragAddr = res.address.poiName
					this.touchForm.dragMode = [0,1]
					this.touchForm.addressForm = res.address
					// 指定站点位置信息赋值
					if(index){
						this.dragList[index].addressForm = res.address
						this.dragList[index].dragName = res.address.street
						this.dragList[index].dragAddr = res.address.poiName
					}
					uni.hideLoading()
				})
			},
			// 路线模式赋值
			checkboxChange(event, index) {
				// 站点选择路线模式赋值
				this.dragList[index].dragMode = []
				event.detail.value.forEach(item=>{
					this.dragList[index].dragMode.push(item)
				})
			},
			// 调取相机
			async uploadImg(index) {
				console.log("进行拍照")
				let fileRes = await utils.uploadRequest('lineFixed')
				// 定位完成进行拍照（异步操作）
				this.locationAddr(index)
				let newDate = time.gettime(new Date(), 1)
				// 触发视图更新赋值数据
				this.dragList[index].photoList.unshift({
					filePath: fileRes[0].result,
					latitude: this.addressForm.longitude,
					longitude: this.addressForm.latitude,
					photographTime: newDate,
					photoType: '2',
					imgPath: fileRes[1]
				})
				this.dragList[index].photoList.pop()
			},
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
					this.touchForm.dragMode = item.dragMode
					this.touchForm.addressForm = item.addressForm
					this.touchForm.photoList = item.photoList
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
				// 数据初始化
				this.hoverClassIndex = null;
				this.nowClassIndex = null
				this.init()
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
					console.log(_this.dragList)
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
			}
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

	.checkbox-size-7 {
		transform: scale(0.7)
	}

	.movable-list-item {
		// 拖拽块私有样式
		height: 170rpx;
		background-color: #6eafff;
		opacity: .4;
		font-size: 30rpx;
		box-shadow: 0 0 10rpx 4rpx #007aff;

		// 公用样式可继承
		display: flex;
		width: 100%;
		margin-bottom: 30rpx;
		border-radius: 20rpx;
		justify-content: center;
		align-items: center;
		position: static;

		.item-left {
			height: 100%;
			width: 20%;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			font-size: 30rpx;
			border-right: 1rpx solid #dddddd;

			image {
				height: 100rpx;
				width: 100rpx;
				border-radius: 50%;
				box-shadow: 0 0 10rpx 2rpx #999999;
			}
		}

		.item-right {
			width: 80%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			position: relative;
			
			.dragList-deleteBtn{
				position: absolute;
				right: -10rpx;
				z-index: 99999;
				top: -20rpx;
				// bottom: 0;
				.iconfont{
					color: #ff0000;
					font-size: 50rpx;
				}
			}

			.item-right-title {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 10rpx;
				height: 50%;

				.item-title-num {
					flex: 1;
				}

				.item-title-val {
					flex: 2;
					font-weight: 700;
				}

				.item-title-checkbox {
					font-size: 25rpx;
				}
			}

			.item-right-content {
				display: flex;
				padding: 10rpx;
				justify-content: space-between;
				align-items: flex-end;
				height: 50%;

				.item-addr {
					display: flex;
					align-items: center;
					width: 70%;
					height: 100%;

					text {
						width: 100%;
						font-size: 25rpx;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
			}
		}

	}

.dragList-lee-main{
	padding: 30rpx;
}
	.list-item {
		@extend .movable-list-item;

		background-color: #FFFFFF;
		font-size: 35rpx;
		height: 200rpx;
		box-shadow: 0 0 10rpx 4rpx #e6e6e6;
		opacity: 1;
	}
	// 按下样式
	.list-item-add:active{
		opacity: .4;
		// view{
		// 	background-color: #ffc067;
		// 	box-shadow: 5rpx 8rpx 10rpx 2rpx #bebebe inset;
		// }
	}
	.list-item-add {
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 1;
	
		view {
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #ff8929;
			border-radius: 50%;
			width: 120rpx;
			height: 120rpx;
			box-shadow: 5rpx 8rpx 10rpx 2rpx #bebebe;
	
			.iconfont {
				font-size: 70rpx;
				color: #FFFFFF;
			}
		}
	}
</style>
