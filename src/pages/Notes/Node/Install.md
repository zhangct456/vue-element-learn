## install

##### npm install

`npm install`使用形式：

```
// 安装模块到项目目录下
npm install moduleName
// -g 的意思是将模块安装到全局，具体安装到磁盘哪个位置，要看 npm config prefix 的位置。
npm install -g moduleName
// -save 的意思是将模块安装到项目目录下，并在package文件的dependencies节点写入依赖。
npm install -save moduleName
// -save-dev 的意思是将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖。
npm install -save-dev moduleName
```

* devDependencies 节点下的模块是开发时需要用的，比如 gulp ，压缩css、js的模块。这些模块在项目部署后是不需要的，可以使用 -save-dev 的形式安装。
* dependencies 节点下的模块是项目运行依赖的，比如express，所以使用 -save 的形式安装。