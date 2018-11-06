/*
 * createRouter
 * 参数:		subMenu:	子路由的信息
 * 			subRoute:	接收空json，处理后该json成为结果
 * 			parentFileName: 回调用，一般不传
 * 			level:	回调用，一般不传
 * 
 * {
	"name": "webLearn",			//对应路由name
	"fileName": "WebLearn",		//对应路由文件名
	"url": "webLearn",			//对应路由path
	"text": "前端学习",			//无用
	"children": []				//对应子路由
	}
 */
function createRouter(subMenu, subRoute, parentFileName, level) {
	if(!parentFileName) {
		parentFileName = '';
	}
	if(!level) {
		level = '';
		subRoute.path = "/" + subMenu.url;
	}else{
		subRoute.path = subMenu.url;
	}
	subRoute.name = level + subMenu.name;//n级子路由name前加n个下划线，区分路由等级
	if(subMenu.children && subMenu.children.length > 0){
		subRoute.component = () => import('@/pages/' + parentFileName + subMenu.fileName + "/Mod");
		subRoute.urlll = '@/pages/' + parentFileName + subMenu.fileName + "/Mod.vue"
	}else{
		subRoute.component = () => import('@/pages/' + parentFileName + subMenu.fileName);
		subRoute.urlll = '@/pages/' + parentFileName + subMenu.fileName
	}
//	subRoute.component = () => import('@/pages/' + parentFileName + subMenu.fileName + '.vue');
	if(subMenu.children && subMenu.children.length != 0) {
		subRoute.children = [];
		for(let i = 0; i < subMenu.children.length; i++) {
			let newSubRoute = {};
			createRouter(subMenu.children[i], newSubRoute, parentFileName + subMenu.fileName + '/', level + '_');
			subRoute.children.push(newSubRoute);
		}
	}
	if(subRoute.children && subRoute.children.length > 0) {
		subRoute.redirect = {name: subRoute.children[0].name}
	}
}

export default createRouter
