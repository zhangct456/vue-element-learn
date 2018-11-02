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
	subRoute.name = level + subMenu.name;
	subRoute.component = () => import('@/pages/' + parentFileName + subMenu.fileName + '.vue');
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
