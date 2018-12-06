import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
const baseUrl = '/test/'
//const baseUrl = '/local/';
//const baseUrl = '/mobile/';

//remote before
axios.interceptors.request.use((config) => {
	//设置url
	if(baseUrl != '/local/'){
		config.url = baseUrl + config.url;
	}else{
		config.url = config.url.replace(".do", "");
		config.url = "/static/data/" + config.url + ".json";
		config.method = "get"
	}
	//post传参序列化
	if(config.method === 'post') {
//		config.data = qs.stringify(config.data);
	}
	return config;
}, (error) => {
	return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) => {
	if(!res.status == "200") {
		return Promise.reject(res.data);
	}
	return res.data;
}, (error) => {
	//404等问题可以在这里处理
	return Promise.reject(error);
});

export default axios
