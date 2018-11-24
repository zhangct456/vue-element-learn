const MENU_LIST = [{
	"name": "webLearn",
	"fileName": "WebLearn",
	"url": "webLearn",
	"text": "前端学习",
	"children": [{
		"name": "vue",
		"fileName": "Vue",
		"url": "vue",
		"text": "vue(本案例)",
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
		},
		{
			"name": "vueAxios",
			"fileName": "VueAxios",
			"url": "vueAxios",
			"text": "配置Axios"
		},
		{
			"name": "vuexStore",
			"fileName": "VuexStore",
			"url": "vuexStore",
			"text": "Vuex状态管理器"
		},
		{
			"name": "elementUI",
			"fileName": "ElementUI",
			"url": "elementUI",
			"text": "ElementUI"
		},
		{
			"name": "markDown",
			"fileName": "MarkDown",
			"url": "markDown",
			"text": "MarkDown文件"
		}]
	},{
		"name": "test",
		"fileName": "Test",
		"url": "test",
		"text": "代码测试",
		"children": [{
			"name": "test",
			"fileName": "Test",
			"url": "test",
			"text": "测试"
		}]
	}]
}]

const getSubMenu = function(key) {
	if(key) {
		for(let i = 0; i < MENU_LIST.length; i++) {
			if(MENU_LIST[i].name == key) {
				return MENU_LIST[i];
			}
		}
	} else {
		return MENU_LIST
	}
}

export default getSubMenu