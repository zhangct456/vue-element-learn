var fs = require("fs")
var path = require("path")

const dirname = "./src/pages"

const resultFileName = "./src/utils/menuList.js"

var filePath = path.resolve(dirname)

fs.readFile(resultFileName, function(err, data){
	if(err) {
		console.log("指定文件不存在。");
	}else{
		var data = data.toString();
		//处理文件内容
		data = data.split('const');
		var tt = data[1].split('=');
		data[1] = tt[0] + '= ' + JSON.stringify(displayDir(filePath)) + '\n'
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
			if(/\.md/.test(filedir)){
				tt.text = readFileMd(filedir) || tt.text;
			}else if(/\.vue/.test(filedir)){
				tt.text = readFileVue(filedir) || tt.text;
			}
		}
		if(data.isDirectory()) {
			console.log("读取文件夹" + filedir);
			var modUrl = path.join(filedir, "Mod.vue");
			tt.text = readFileVue(modUrl);
			tt.children = displayDir(filedir);
		}

		reData.push(tt);
	})
	return reData;
}

//读取md文件title
function readFileMd(filePath){
	try{
		var content = fs.readFileSync(filePath).toString();
		var firstLineEnd = content.indexOf('\n');
		var title = content.substring(0, firstLineEnd-1);
		if(/^##\s/.test(title)){
			title = title.replace("## ", '').trim();			
			return title;
		}else{
			return null
		}
	}catch(e){
		return null;
	}
}

//读取vue文件title
function readFileVue(filePath){
	try{
		var content = fs.readFileSync(filePath).toString();
		var firstLineEnd = content.indexOf('\n');
		var firstLine = content.substring(0, firstLineEnd-1);
		if(/<\!--(.*)-->/.test(firstLine)){
			return RegExp.$1;
		}else{
			return null
		}
	}catch(e){
		return null;
	}
}
