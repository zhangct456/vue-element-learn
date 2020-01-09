# vue

> [A Vue.js project](https://zhangct456.github.io/vue-element-dist/)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## router设置

	src/utils/menuList.js中存放router的json数据
	手动修改该json数据
	根据src/pages下的文件结构自动生成 npm run route

## 项目目录结构

	build : 项目构建的相关代码
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
		-- utils : 一些工具类的js方法
	    -- App.vue:项目的入口文件(顶层父组件)
	    -- main.js:项目的核心文件(vue的实例初始化)
	static : 静态资源文件夹
		-- data : 模拟请求返回数据json文件
	README.md : markdown的说明文档
	package.json : npm的配置文件
