# 版本更新组件

# 配套使用组件
	uni-popup原生弹出框组件

# 功能实现
	1、检查更新状态
	2、下载更新
	3、取消下载更新
	4、下载完成重启应用
# 使用方法 
	<versionUpdateLee :apkurl="versionUp.apkurl" :contentList="versionUp.contentList" :version="versionUp.version" :status="versionUp.status"></versionUpdateLee>
### 组件传参

|  参数			| 名称			|  类型		|  必填		|
|  ------		| ------		| ------	|  ------	|
| apkurl		| 下载地址		| String	| 是		|
| contentList	| 更新内容列表	| Array		| 否		|
| version		| 版本号			| String	| 否		|
| status		| 是否触发更新	| Boolean	| 是		|
	
# 隐藏bug列表
	1、原生uni-popup与其他组件共同使用时可能存在z-index层级问题，需要修改uni-popup组件的z-index: 9;层级