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
				"name": "vueConfig",
				"fileName": "VueConfig",
				"url": "vueConfig",
				"text": "配置"
			}
		]
	}]
}]

const getSubMenu = function(key) {
	for(let i = 0; i < MENU_LIST.length; i++) {
		if(MENU_LIST[i].name == key) {
			return MENU_LIST[i];
		}
	}
}

export default getSubMenu