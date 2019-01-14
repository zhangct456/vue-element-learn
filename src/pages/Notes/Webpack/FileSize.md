## 文件大小优化

> [https://segmentfault.com/a/1190000015489489](https://segmentfault.com/a/1190000015489489)

----

使用webpack的`DllPlugin`和`DllReferencePlugin`

##### DllPlugin

新建配置文件`webpack.dll.conf.js`：

```
var path = require("path");
var webpack = require("webpack");

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
	context: __dirname,
  // 你想要打包的模块的数组
  entry: {
    vendor: ['vue', 'vuex', 'axios', 'vue-router', 'element-ui', 'xlsx'],
    vendor2: ['echarts', 'jsplumb']
  },
  output: {
    path: path.join(__dirname, 'src/dll/'), // 打包后文件输出的位置
    filename: '[name].dll.js',
    library: '[name]_library'
    // vendor.dll.js中暴露出的全局变量名。
    // 主要是给DllPlugin中的name使用，
    // 故这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致。
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'src/dll', '[name]-manifest.json'),
      name: '[name]_library',
    }),
  ]
};

```

在`package.json`文件中配置命令：

```
  "scripts": {
  	//...其它配置
    "dll": "rimraf src/dll && webpack --mode production  --profile --inline --config webpack.dll.config.js"
  }
```

执行`npm run dll`在`src/dll`文件夹中生成了四个文件：

* vendor.dll.js
* vendor2.dll.js
* vendor-manifest.json
* vendor2-manifest.json

其中js文件为打包后的文件，json文件是引导webpack引入到当前项目的文件。

在html中引入生成的js文件：

```
//webpack,prod.conf.js


//引入插件
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");

//...

plugins:[
	new AddAssetHtmlPlugin([
		{ filepath: require.resolve('./src/dll/vendor.dll.js'), includeSourcemap: false },
		{ filepath: require.resolve('./src/dll/vendor2.dll.js'), includeSourcemap: false }
	])
	//...其它配置
]

//...
```

----

##### DllReferencePlugin

配置生成的`*-manifest.json`：

```
//webpack,prod.conf.js

//...

plugins:[
	new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require("./src/dll/vendor-manifest.json")
    }),
    new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require("./src/dll/vendor2-manifest.json")
    }),
	//...其它配置
]

//...
```

当文件数量较多时可以创建一个数组遍历：

```
// 获取dll文件的manifest
function getDllManifest () {
    var plugins = []
    Object.keys({
        vendor: ['vue', 'vuex', 'axios', 'vue-router', 'element-ui', 'xlsx'],
    	vendor2: ['echarts', 'jsplumb']
    }).forEach((name) => {
        plugins.push(
            new webpack.DllReferencePlugin({
                context: __dirname, // 这里的context必须与DllPlugin中的context保持一致
                manifest: path.resolve(__dirname, 'src/dll/[name]-manifest.json').replace(/\[name\]/gi, name)
            })
        )
    })
    return plugins
}
```
