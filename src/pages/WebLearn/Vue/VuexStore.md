## Vuex状态管理器

#### 安装

```
cnpm install vuex --save
```

----

#### 配置

创建文件夹`src/store`用来放vuex相关的js文件；

创建文件`menu.js`来管理菜单：

```
import axios from "@/setting/axios.conf"
//获取菜单内容的方法
import {getSubMenu} from "@/utils"

export default {
	state: {
		menuList: [],		//菜单内容
		firstGet: true		//判断是否是第一次获取菜单
	},
	getters: {
		getMenuList(state) {
			//获取菜单
			return state.menuList;
		},
		getSubMenu(state) {
			//传入子菜单名key，获取子菜单
			return function(key) {
				if(state.menuList && state.menuList.length != 0) {
					for(let i = 0; i < state.menuList.length; i++) {
						if(state.menuList[i].name == key) {
							return state.menuList[i];
						}
					}
				} else {
					return {};
				}
			}
		}
	},
	mutations: {
		updateMenuList(state, menuList) {
			state.menuList = menuList;
		},
		updateFirstGet(state, firstGet) {
			state.firstGet = firstGet;
		}
	},
	actions: {
		getMenuList(context, reGetFlag) {
			return new Promise(function(resolve, reject) {
				if(!context.state.menuList || context.state.firstGet || reGetFlag) {
					//两种获取方式	
					//1发交易获取菜单
//					axios.post('menu.do', {}).then(function(data) {
//						context.commit('updateFirstGet', false);
//						context.commit('updateMenuList', data.List);
//						resolve(context.state.menuList);
//					})
					//2直接和router共用菜单
					let menulist = getSubMenu();
					context.commit('updateFirstGet', false);
					context.commit('updateMenuList', menulist);
					resolve(context.state.menuList);
				} else {
					resolve(context.state.menuList);
				}
			})
		}
	}
}
```

在`store/index.js`中引入所有store对象，放进`modules`：

```
import Vue from 'vue'
import Vuex from 'vuex'

import Menu from "./menu"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Menu
  }
})
```

在`main.js`中加载为全局组件：

```
...
import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
```

之后用`this.$store`调用：

* `state`：唯一数据源，调用时使用`this.$store.state.xxx`
* `getters`：类似计算属性，getter的返回值会根据它的依赖被缓存起来，只有当它的依赖值发生了改变才会被重新计算，调用时使用`this.$store.getters.getSubMenu`，如需传参返回值写成函数；
* `mutations`：更改state的唯一方法，只能是同步函数，调用时用`this.$store.commit('xxx',xxx)`
* `actions`：不直接更改状态，接受一个与 store 实例具有相同方法和属性的 context 对象，通过调用`context.commit`更改`state`，支持异步操作

> mutations 中的方法是不分组件的 , 假如你在 dialog_stroe.js 文件中的定义了switch_dialog 方法 ,
在其他文件中的一个 switch_dialog 方法 , 
那么$store.commit('switch_dialog') 会执行所有的 switch_dialog 方法。

----

#### 调用getters

在需要调用的组件里写对应的计算属性：

```
...
	computed: {
		menu() {
			return this.$store.getters.getMenuList;
		},
		subMenu() {
			let menu = this.$store.getters.getSubMenu(this.subMenuName);
			return menu.children;
		}
	},
...
```

`this.$store.getters.getMenuList`返回一个数组；

`this.$store.getters.getSubMenu`返回一个方法，所以能传入参数获取结果。

----

#### 调用actions

调用`getMenuList`异步获取菜单，返回一个Promise对象：

```
this.$store.dispatch('getMenuList').then(function(data){
	...
})
```