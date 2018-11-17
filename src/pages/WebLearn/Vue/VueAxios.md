## Axios

### 安装

```
cnpm i axios -S
```

----

### 引入

```
//setting/index.js

import axios from "./axios.conf"
Vue.prototype.$remote = axios
```

----

### 配置

写在`setting/axios.conf.js`中：

```
//setting/axios.conf.js

import axios from 'axios'
import qs from 'qs'

...

export default axios
```

配置默认请求参数：

```
axios.defaults.timeout = 5000;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
```

配置请求前的处理方法：

定义一个参数`baseUrl`，参数设置为`/local/`时使用本地数据模拟，把部分post方法转换成get方法，本地数据放在`/static/data`文件夹。

```
const baseUrl = '/local/';

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
```

配置请求后的处理方法：

```
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
```

>参考文档[https://www.kancloud.cn/yunye/axios/234845](https://www.kancloud.cn/yunye/axios/234845)