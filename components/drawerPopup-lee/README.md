# drawerPopup-lee 组件文档

#使用技术点
	1、
	2、
	3、

# 代码示例
```js
<!-- 使用方式 -->
<drawerPopupLee mode='left' width="40vw" height="100vh" borderRadius="0 30rpx 30rpx 0" :value="drawerPopupLeeVal" @close="closeDrawer">
	<!-- 自定义内容插槽 -->
	<template #content>
		<view>
			12345222
		</view>
	</template>
</drawerPopupLee>
```
# 组件参数
|1|2|3|4|
|---|---|---|---|
|2|2|2|2|


# 组件实现效果
	1、上下左右方向弹出
	2、蒙版淡入淡出效果
	3、抽屉弹出动画
# 兼容平台
	目前只进行了app平台的测试，其他平台是否兼容待测试
#常见问题
	1、蒙版全屏覆盖，想要实现次效果需禁用原生导航栏，或通过跳转到禁用原生导航的新页面来实现可参考案例[](https://ext.dcloud.net.cn/plugin?id=953)
		如禁用原生导航需要在page.json中对当前页的路由配置设置为
```js
"style": {
	"navigationBarTitleText": "HBUILDER",
	"app-plus": {
		"titleNView": false, // 是否使用自定义导航栏
		"animationType": "fade-in",
		"animationDuration": 300
	}
}
// 或
"style": {
	"navigationStyle":"custom"
}
```