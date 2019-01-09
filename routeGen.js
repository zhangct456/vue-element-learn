var fs = require("fs")
var path = require("path")

const dirname = "./src/pages"

const resultFileName = "./src/utils/menuList.js"

var filePath = path.resolve(dirname)

fs.readFile(resultFileName, function(err, data){
	if(err) {
		console.log(err);
	}else{
		var data = data.toString();
		//处理文件内容
		data = data.split('const');
		var tt = data[1].split('=');
		data[1] = tt[0] + ' = ' + JSON.stringify(displayDir(filePath)) + '\n'
		data = data.join('const');
		//处理文件内容--end
		fs.writeFile(resultFileName, data, function(err){
			if(err) {
				return console.log(err);
			}
			console.log("The file was saved!")
		})
	}
})

function displayDir(filePath) {
	var reData = [];
	var files = fs.readdirSync(filePath);
	files.forEach(function(fileName) {

		if("Mod.vue" == fileName) {
			return reData;
		}
		var tFileName = fileName;
		tFileName = tFileName.indexOf('.') != -1 ? tFileName.substring(0, tFileName.indexOf('.')) : tFileName;
		var tFileName2 = tFileName.toLowerCase();
		tFileName2 = tFileName2[0] + tFileName.substring(1, tFileName.length);
		var tt = {
			"url": tFileName2,
			"name": tFileName2,
			"fileName": tFileName,
			"text": tFileName
		}

		var filedir = path.join(filePath, fileName);
		var data = fs.statSync(filedir);
		if(data.isFile()) {
			console.log("读取文件" + filedir);
		}
		if(data.isDirectory()) {
			console.log("读取文件夹" + filedir);
			tt.children = displayDir(filedir);
		}

		reData.push(tt);
	})
	return reData;
}
