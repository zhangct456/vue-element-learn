import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//axios.defaults.baseURL = 'https://www.csiimall.com';
//axios.defaults.baseURL = 'http://127.0.0.1:3000';
const baseUrl = '/local/';
//const baseUrl = '/mobile/';

//remote before
axios.interceptors.request.use((config) => {
	//设置url
	if(baseUrl != '/local/' && config.url){
		config.url = baseUrl + config.url;
	}
	//post传参序列化
	if(config.method === 'post') {
		config.data = qs.stringify(config.data);
	}
	return config;
}, (error) => {
	return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) => {
	if(!res.status == "200") {
		return Promise.reject(res);
	}
	return res;
}, (error) => {
	//404等问题可以在这里处理
	return Promise.reject(error);
});

const post = function(url, params, successFun, failFun) {
	if(baseUrl === '/local/'){
		get(url, params, successFun, failFun);
		return;
	}
	axios.post(url, params)
		.then(response => {
			successFun(response.data);
		}, err => {
			if(failFun) {
				failFun(err);
			} else {

			}
		})
		.catch((error) => {
			reject(error)
		})
}
const get = function(url, params, successFun, failFun){
	if(baseUrl === '/local/'){
		url = '/static/data/' + url + '.json';
	}
	axios.get(url)
		.then(response => {
			successFun(response.data);
		}, err => {
			if(failFun) {
				failFun(err);
			} else {

			}
		})
		.catch((error) => {
			reject(error)
		})
}

export default {
	post,
	get
}