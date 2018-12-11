## 文件上传

##### js提交带文件的表单

创建FormData对象：

```
let formData = new FormData();

formData.append("file", this.file);
formData.append("info", "测试上传文件功能");
```

提交：

```
this.$remote.post('upload', formData, config).then((res) => {
	console.log(res);
})
```

----

##### node接收文件

使用formidable模块实现（基本用法）：

```
npm install formidable --save
```

> formidable参考文档 [https://www.npmjs.com/package/formidable](https://www.npmjs.com/package/formidable)

用`Formidable.IncomingForm`创建传入表单：

```
router.post('/upload', (req, res) => {
	var form = new formidable.IncomingForm();
    // 设置文件保存路径，相对路径
    form.uploadDir = "./uploads";
});
```

处理提交的表单：

```
form.parse(req, function(err, fields, files) {
	//do something
});
```

回调函数参数：

* `err` ：出错时的报错信息；
* `fields` ：提交表单中除文件外的其它信息，json格式；
* `files` ：提交表单中的文件

保存后的文件名为“[交易名]_[随机字符串]”，无文件后缀，可以在保存后用`fs.rename()`方法修改。

代码：

```
const express = require('express');

const router = express.Router();

const app = express();

const formidable = require('formidable');

const fs = require('fs');

router.get('/', (req, res) => {
	//测试连通性
	res.send("node server");
})

router.post('/upload', (req, res) => {
	var form = new formidable.IncomingForm();
    // 设置文件保存路径，相对路径
    form.uploadDir = "./uploads";
    
	form.parse(req, function(err, fields, files) {
		if(err){
			res.send({
				"status" : "200",
	        	"message" : "上传失败"
			});
			return;
		}
        var fileName = files.file.name;		//上传文件名
        var fileNameArr = fileName.split('.');
        if(fileNameArr.length != 1){
        	//files.file.path：文件保存后的路径，无后缀名
        	//补上文件后缀
        	var newfile = files.file.path + '.' + fileNameArr[fileNameArr.length - 1];
        	fs.rename(files.file.path, newfile, function(err){
	        	if(err){
	        		res.send({
	        			"status" : "200",
	        			"message" : "上传失败"
	        		});
	        	}else{
	        		res.send({
						"status" : "200",
						"message" : "上传成功"
					});
	        	}
	        })
        }else{
        	res.send({
				"status" : "200",
				"message" : "上传成功"
			});
        }
    });
});
app.use(router);

app.listen(8099);

console.log("http start at port 8099");
```