## MarkDown文件

> 把markdown文件导入成为html。

#### 安装

安装`vue-markdown-loader`和代码高亮方法`highlight.js`

```
cnpm install vue-markdown-loader --save
cnpm install highlight.js --save
```

----

#### 配置

在`module.rules`中新增markdown文件的loader：

```
//webpack.base.conf.js

{
	test: /\.md$/,
	loader: 'vue-markdown-loader',
	options: {}
}

```

在`resolve.extensions`中新增后缀名`.md`，引用时可不写后缀名：

```
//webpack.base.conf.js

resolve: {
	extensions: ['.js', '.vue', '.json', '.md'],
	alias: {
		'vue$': 'vue/dist/vue.esm.js',
		'@': resolve('src'),
	}
}

```

----

#### 引用

与vue文件引用方式相同：

```
import example from 'example.md';
```

----

#### 修改样式

###### 基本样式

上网找或者自己设计一个markdown样式的css文件引入，用引用markdown文件的父级元素限制下样式作用域：

```
.markdown-body {
  font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  line-height: 1.6;
  word-wrap: break-word;
}
.markdown-body:before {
  display: table;
  content: "";
}
.markdown-body:after {
  display: table;
  clear: both;
  content: "";
}
.markdown-body > *:first-child {
  margin-top: 0 !important;
}
.markdown-body > *:last-child {
  margin-bottom: 0 !important;
}
.markdown-body a:not([href]) {
  color: inherit;
  text-decoration: none;
}

.....
```

###### 代码高亮

引用`highlight.js`，使用其中的`highlightBlock`方法改变代码块的html。

封装成方法`highlightCode`：

```
import hljs from 'highlight.js'

const highlightCode = () => {
    const preEl = document.querySelectorAll('pre')
    preEl.forEach((el) => {
        hljs.highlightBlock(el)
  })
}
```

每次路由变化后，新加载的页面需要运行该方法来改变代码块的html，
所以在父级路由中的钩子函数updated、mounted中调用该方法：

```
  mounted() {
  	highlightCode()
  },
  updated() {
  	highlightCode()
  }
```

> 进一步优化，可以在markdown文件中插入vue组件，需要创建自定义的markdown语法，在loader中配置处理方法，
可以参考大佬的博客[https://blog.csdn.net/m0_37972557/article/details/81089887](https://blog.csdn.net/m0_37972557/article/details/81089887),
使用的是elementui教程网站的例子。