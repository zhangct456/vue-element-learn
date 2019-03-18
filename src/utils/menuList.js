const MENU_LIST = [{
	"url": "webLearn",
	"name": "webLearn",
	"fileName": "WebLearn",
	"text": "前端学习",
	"children": [{
		"url": "vue",
		"name": "vue",
		"fileName": "Vue",
		"text": "Vue",
		"children": [{
			"url": "vueCreate",
			"name": "vueCreate",
			"fileName": "VueCreate",
			"text": "vue项目创建"
		}, {
			"url": "elementUI",
			"name": "elementUI",
			"fileName": "ElementUI",
			"text": "ElementUI"
		}, {
			"url": "markDown",
			"name": "markDown",
			"fileName": "MarkDown",
			"text": "MarkDown文件"
		}, {
			"url": "vueAxios",
			"name": "vueAxios",
			"fileName": "VueAxios",
			"text": "Axios"
		}, {
			"url": "vueRouter",
			"name": "vueRouter",
			"fileName": "VueRouter",
			"text": "路由配置"
		}, {
			"url": "vuexStore",
			"name": "vuexStore",
			"fileName": "VuexStore",
			"text": "Vuex状态管理器"
		}]
	}, {
		"url": "test",
		"name": "test",
		"fileName": "Test",
		"text": "测试",
		"children": [{
			"url": "fileUploadTest",
			"name": "fileUploadTest",
			"fileName": "FileUploadTest",
			"text": "测试文件上传"
		}, {
			"url": "imgButtonTest",
			"name": "imgButtonTest",
			"fileName": "ImgButtonTest",
			"text": "图片按钮"
		}, {
			"url": "test",
			"name": "test",
			"fileName": "Test",
			"text": "Test"
		}]
	}]
}, {
	"url": "notes",
	"name": "notes",
	"fileName": "Notes",
	"text": "笔记",
	"children": [{
		"url": "node",
		"name": "node",
		"fileName": "Node",
		"text": "笔记",
		"children": [{
			"url": "fileUpload",
			"name": "fileUpload",
			"fileName": "FileUpload",
			"text": "文件上传"
		}, {
			"url": "gulp",
			"name": "gulp",
			"fileName": "Gulp",
			"text": "gulp"
		}, {
			"url": "install",
			"name": "install",
			"fileName": "Install",
			"text": "install"
		}, {
			"url": "npm",
			"name": "npm",
			"fileName": "Npm",
			"text": "npm"
		}]
	}, {
		"url": "webpack",
		"name": "webpack",
		"fileName": "Webpack",
		"text": "Webpack",
		"children": [{
			"url": "fileSize",
			"name": "fileSize",
			"fileName": "FileSize",
			"text": "文件大小优化"
		}]
	}]
}]
const getSubMenu = function(key) {
	if (key) {
		for (let i = 0; i < MENU_LIST.length; i++) {
			if (MENU_LIST[i].name == key) {
				return MENU_LIST[i];
			}
		}
	} else {
		return MENU_LIST
	}
}

export default getSubMenu