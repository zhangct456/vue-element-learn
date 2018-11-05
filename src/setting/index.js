import Vue from "vue"

import "./element-ui"

import axios from "./axios.conf"
import alert from "./alert"

Vue.prototype.$remote = axios
Vue.prototype.$alert = alert