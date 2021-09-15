# 可拖拽列表，重组数组排序

# 功能实现
- 主要对列表进行手动拖拽排序
- 由于本人技术比较烂注释与代码过多，部分代码未抽离干净请见谅
- 使用技术uni-app可拖动区域组件[https://uniapp.dcloud.io/component/movable-view?id=movable-area](https://uniapp.dcloud.io/component/movable-view?id=movable-area)
- 参考文档[https://ext.dcloud.net.cn/plugin?id=1848](https://ext.dcloud.net.cn/plugin?id=1848)
- 感谢组件作者(HealerLZH)提供的开发思路与开源代码！！！
# 使用方法
```html
import dragListLee from '@/components/dragList-lee/dragList-lee.vue'

components: {
	dragListLee
}

<dragList-lee :dragList="xxxList"></dragList-lee>
```

# 组件参数
|参数名称	|参数含义	|是否必填	|参数类型	|
|---		|---		|---		|---		|
|dragList	|数据列表	|是			|Array<Object>		|

# 列表数据-注意事项
- 需要注意如果想要自行定制列表样式，你可以自己替换有关业务代码和托块样式
- 数据格式方面字段要确保一致
### 例
```json
[{
	// dragNum: 1,
	dragName: "列表头",
	dragAddr: "列表内容",
	dragDom: {}, // 当前行dom信息
}, {
	// dragNum: 1,
	dragName: "列表头",
	dragAddr: "列表内容",
	dragDom: {}, // 当前行dom信息
}]
```