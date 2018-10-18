import Vue from 'vue'
import axios from "./axios.conf"
import data from "./data"
import echarts from 'echarts'
 
Vue.prototype.$echarts = echarts
Vue.prototype.$remote = axios
Vue.prototype.$commenData = data