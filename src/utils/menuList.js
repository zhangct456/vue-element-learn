const MENU_LIST = [{
	"name": "webLearn",
	"fileName": "WebLearn",
	"url": "webLearn",
	"text": "前端学习",
	"children": [{
		"name": "vue",
		"fileName": "Vue",
		"url": "vue",
		"text": "vue",
		"children": [{
				"name": "vueCreate",
				"fileName": "VueCreate",
				"url": "vueCreate",
				"text": "新建项目"
			},
			{
				"name": "vueRouter",
				"fileName": "VueRouter",
				"url": "vueRouter",
				"text": "路由"
			}
		]
	}]
}]

const getSubMenu = function(key) {
	if(key){
		for(let i = 0; i < MENU_LIST.length; i++) {
			if(MENU_LIST[i].name == key) {
				return MENU_LIST[i];
			}
		}
	}else{
		return MENU_LIST
	}
}

export default getSubMenu