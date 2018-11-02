import axios from "@/setting/axios.conf"

export default {
	state: {
		menuList: [],
		firstGet: true
	},
	getters: {
		getMenuList(state) {
			return state.menuList;
		},
		getSubMenu(state) {
			return function(key) {
				if(state.menuList && state.menuList.length != 0) {
					for(let i = 0; i < state.menuList.length; i++) {
						if(state.menuList[i].name == key) {
							return state.menuList[i];
						}
					}
				} else {
					return {};
				}
			}
		}
	},
	mutations: {
		updateMenuList(state, menuList) {
			state.menuList = menuList;
		},
		updateFirstGet(state, firstGet) {
			state.firstGet = firstGet;
		}
	},
	actions: {
		getMenuList(context, reGetFlag) {
			return new Promise(function(resolve, reject) {
				if(!context.state.menuList || context.state.firstGet || reGetFlag) {
					axios.post('menu.do', {}).then(function(data) {
						context.commit('updateFirstGet', false);
						context.commit('updateMenuList', data.List);
						resolve(context.state.menuList);
					})
				} else {
					resolve(context.state.menuList);
				}
			})
		}
	}
}