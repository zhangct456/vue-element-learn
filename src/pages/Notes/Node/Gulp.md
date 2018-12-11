## gulp

> API文档 [https://www.gulpjs.com.cn/docs/api/](https://www.gulpjs.com.cn/docs/api/)

----

##### 安装

需要全局安装，只安装本地gulp，命令行无法执行`gulp -v`，也无法执行gulp其它的相关命令。

```
npm install -g gulp
```

----

##### 打包zip遇到的问题

压缩代码之后打包成zip，使用回调函数来控制执行顺序：

1.报错；

2.不报错，但是没有生成zip包

设置一个延时之后执行结果正常。

```
gulp.task("zip", ["del", "minifyJs", "minifyCss", "copy", "minifyHtml", "minifyIndex"], function(cb) {
	setTimeout(function(){
		gulp.src('dist/*.*')
			.pipe(zip('dist.zip'))
			.pipe(gulp.dest("dist"));
		cb();
	}, 2000)
});
```