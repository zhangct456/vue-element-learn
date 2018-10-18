function createRouter(subMenu, subRoute, parentId, level) {
	if(!parentId) {
		parentId = 'LoginInner/';
	}
	if(!level) {
		level = '';
	}
//	if(!parentId) {
//		subRoute.path = "/" + subMenu.url;
//	} else {
		subRoute.path = subMenu.url;
//	}
	subRoute.name = level + subMenu.name;
//	subRoute.component = resolve => require(['@/pages/' + parentId + '/' + subMenu.id + '.vue'], resolve);
	subRoute.component = () => import('@/pages/' + parentId + subMenu.id + '.vue');
	if(subMenu.children && subMenu.children.length != 0) {
		subRoute.children = [];
		for(let i = 0; i < subMenu.children.length; i++) {
			let newSubRoute = {};
			createRouter(subMenu.children[i], newSubRoute, parentId + subMenu.id + '/', level + '_');
			subRoute.children.push(newSubRoute);
		}
	}
	if(subRoute.children && subRoute.children.length > 0) {
//		subRoute.children.push({
//			path: '',
//			redirect: subRoute.children[0].path
//		})
		subRoute.redirect = {name: subRoute.children[0].name}
	}
//	if(subRoute.children && subRoute.children.length > 0) {
//		subRoute.redirect = subRoute.children[0].path;
//	}
}

export {createRouter}
