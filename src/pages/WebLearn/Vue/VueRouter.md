## 路由配置

### 安装引入

根目录下cmd执行：
```
cnpm install vue-router
```

用`Vue.use`加载全局组件：

```
//router/index.js

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var route = new Router({
	...
})
```

引用router/index.js文件：

```
//main.js

...
import router from './router'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

```

----

### 路由配置

<center>
<img src="@/assets/images/WebLearn/router-menu.jpg" width="40%" />
</center>

关于`vue-router`配置参数参考[官方文档](https://router.vuejs.org/zh/index.html):

vue-router中的routes参数为一个数组，可以给子路由建相应js文件：

```
//webLearn.route.js

let subRouter = {
...
}

export default subRouter
```

在index.js中引用所有子路由文件组合在一起：

```
//router/index.js

...
import WebRouter from './webLearn/webLearn.route'

var route = new Router({
  routes: [
		{path: '/', redirect: '/webLearn'},
		WebRouter,
		...
	]
})
```

----

### 监听跳转

`beforeEach`：路由跳转前执行；

`afterEach`：路由跳转后执行；

可以在这里处理路由监听的信息。

```
var route = new Router(...)

route.beforeEach((to, from, next)=>{
  //do something
  next();
});
route.afterEach((to, from, next) => {
    console.log(to.path);
});
```

**确保要调用 next 方法，否则钩子就不会被 resolved。**该方法*[参数含义](https://segmentfault.com/a/1190000009651628)*:

*	to: Route: 即将要进入的目标 路由对象

*	from: Route: 当前导航正要离开的路由
	
*	next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
	
	*	next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。
	
	*	next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。
	
	*	next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。

----

### 优化

rouer信息可以写成json格式：

```
//utils/menuList.js，getSubMenu方法返回对应的submenu

const MENU_LIST = [{
	"name": "webLearn",
	"fileName": "WebLearn",
	"url": "webLearn",
	"text": "前端学习",
	"children": [{
		"name": "vue",
		"fileName": "Vue",
		"url": "vue",
		"text": "vue",
		"children": [{
				"name": "vueCreate",
				"fileName": "VueCreate",
				"url": "vueCreate",
				"text": "新建项目"
			},
			{
				"name": "vueConfig",
				"fileName": "VueConfig",
				"url": "vueConfig",
				"text": "配置"
			}
		]
	}]
}]

const getSubMenu = function(key) {
	for(let i = 0; i < MENU_LIST.length; i++) {
		if(MENU_LIST[i].name == key) {
			return MENU_LIST[i];
		}
	}
}

export default getSubMenu
```

再写一个方法把json处理成router可用的形式:

```
/*
 * utils/createRouter.js
 * 参数:		subMenu:	子路由的信息
 * 			subRoute:	接收空json，处理后该json成为结果
 * 			parentFileName: 回调用，一般不传
 * 			level:	回调用，一般不传
 * 
 * {
	"name": "webLearn",			//对应路由name
	"fileName": "WebLearn",		//对应路由文件名
	"url": "webLearn",			//对应路由path
	"text": "前端学习",			//无用
	"children": []				//对应子路由
	}
 */
function createRouter(subMenu, subRoute, parentFileName, level) {
	if(!parentFileName) {
		parentFileName = '';
	}
	if(!level) {
		level = '';
		subRoute.path = "/" + subMenu.url;
	}else{
		subRoute.path = subMenu.url;
	}
	subRoute.name = level + subMenu.name;//n级子路由name前加n个下划线，区分路由等级
	if(subMenu.children && subMenu.children.length > 0){
		subRoute.component = () => import('@/pages/' + parentFileName + subMenu.fileName + "/Mod");
	}else{
		subRoute.component = () => import('@/pages/' + parentFileName + subMenu.fileName);
	}
//	subRoute.component = () => import('@/pages/' + parentFileName + subMenu.fileName + '.vue');
	if(subMenu.children && subMenu.children.length != 0) {
		subRoute.children = [];
		for(let i = 0; i < subMenu.children.length; i++) {
			let newSubRoute = {};
			createRouter(subMenu.children[i], newSubRoute, parentFileName + subMenu.fileName + '/', level + '_');
			subRoute.children.push(newSubRoute);
		}
	}
	if(subRoute.children && subRoute.children.length > 0) {//默认进入第一个子路由
		subRoute.redirect = {name: subRoute.children[0].name}
	}
}

export default createRouter
```

使用时传入`submenu`和`subRouter`，处理后`subRouter`为结果，可继续用`subRouter.children.push`方法增加子路由：

```
import remote from "@/setting/axios.conf"
import {routerCreate, getSubMenu} from "@/utils"

let subRouter = {}

routerCreate(getSubMenu("webLearn"), subRouter)

subRouter.children.push({
	...
})

export default subRouter
```