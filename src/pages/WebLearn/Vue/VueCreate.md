## vue项目创建

### 全局安装 vue-cli VUE的脚手架工具

```
npm install -g vue-cli
vue -V 测试
```

使用淘宝镜像，之后用cnpm代替npm

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

----

### 创建项目

##### 进入文件夹

```
cd ...
```

##### 初始化项目

```
vue init webpack VueLearn(文件夹名称)
```

依次选择

1. 项目名称		vuelearn
2. 项目名称		vuelearn
3. 作者		zhangct456@163.com
4. 是否安装编译器	Y
5. 是否需要安装vue-router(路由)	Y
6. 是否需要使用ESLint来检查你的代码	Y or N
7. 需要使用哪种风格来检查你的代码		Standard
8. 是否需要安装测试功能	n
9. 是否需要安装测试功能	n


##### 测试结果

```
cd vuelearn
cnpm install
cnpm run dev
```

默认浏览器会自动打开网站 http://localhost:8080/#/ ，或者手动打开，显示如下界面说明成功

<center>
<img src="@/assets/images/WebLearn/vue-page.jpg" width="40%" />
</center>

----

### 热更新

创建的项目默认热更新，电脑性能比较差，所以关闭热更新。

修改参数：
```
//webpack.dev.conf.js

...
devServer: {
	...
	hot: false,
	inline: false
	...
}
...
```

注释代码：
```
//webpack.dev.conf.js

//webpack.HotModuleReplacementPlugin()
//webpack.NamedModulesPlugin()
//webpack.NoEmitOnErrorsPlugin()
```

修改启动命令：
```
//package.json

"scripts": {
	...
   "dev": "webpack-dev-server --progress --config build/webpack.dev.conf.js",
	...
},
```

----

### 文件目录结构

修改src文件夹中的目录，结果：

```
	build : webpack项目构建的相关配置代码
	config : 配置目录，包括端口、环境等的配置
	src : 开发的主要目录
	    -- asset : 放置项目中用到的静态资源
			-- css
			-- images
			-- js
	    -- components :主要放置一些常用的组件文件
		-- pages : 放置页面
		-- router : 路由配置文件
		-- setting : 公共的组件配置
		-- store : vuex相关js文件
		-- utils : 一些工具类的js方法
	    -- App.vue:项目的入口文件(顶层父组件)
	    -- main.js:项目的核心文件(vue的实例初始化)
	static : 静态资源文件夹
		-- data : 模拟请求返回数据json文件夹
	README.md : 说明文档
	package.json : npm的配置文件
```











