## ElementUI

#### 安装

> 参考[官方文档](http://element-cn.eleme.io/#/zh-CN/component/installation)

```
cnpm i element-ui -S
```

----

#### 引入

###### 全部引入

在main.js中添加：

```
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
```

###### 部分引入

需要安装`babel-plugin-component`：

```
cnpm install babel-plugin-component -D
```

配置` .babelrc`文件：

**需要注意`styleLibraryName`的值可能因版本原因不同，有些教程中是`theme-default`，可以查看组件中的文件夹名**

```
{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "plugins": [
  ["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-chalk"
    }
  ]],
   "transform-vue-jsx", "transform-runtime"]
}
```

在`setting/element-ui.js`中引入所需组件：

```
import Vue from 'vue'
import { Button,
	Row, Col,
	Menu, Submenu, MenuItem, MenuItemGroup,
	Container, Header, Aside, Main, Footer
} from 'element-ui'

Vue.use(Button)

Vue.use(Row)
Vue.use(Col)

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)

```

在main.js中引用：

```
import "./setting/element-ui"
```