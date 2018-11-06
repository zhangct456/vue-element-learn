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

### 构建项目

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

默认浏览器会自动打开网站 http://localhost:8080/#/ ，或者手动打开













