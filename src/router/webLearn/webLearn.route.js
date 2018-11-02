import remote from "@/setting/axios.conf"
import {routerCreate, getSubMenu} from "@/utils"

let subRouter = {}

routerCreate(getSubMenu("webLearn"), subRouter)

export default subRouter
