import Vue from "vue"

import "./element-ui"

import axios from "./axios.conf"

Vue.prototype.$remote = axios
