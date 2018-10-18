import axios from "./axios.conf"

export default{
	setMenuList(menuList) {
		this.menuList = menuList;
	},
	getMenuList(reGetFlag) {
		let that = this;
		return new Promise(function(resolve, reject) {
			if(!that.menuList || reGetFlag){
				axios.post('menuList', {}, function(data) {
					that.setMenuList(data.list);
					resolve('success');
				}, function(data) {
					reject('error');
				})
			}else{
				resolve('success');
			}
		})
	},
	getSubMenu(key) {
		if(this.menuList){
			for (let i = 0; i < this.menuList.length ; i ++) {
				if (this.menuList[i].id == key) {
					console.log(this.menuList[i])
					return this.menuList[i];
				}
			}
		}else{
			return {};
		}
	}
}
