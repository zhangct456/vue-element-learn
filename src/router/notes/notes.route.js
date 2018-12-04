import remote from "@/setting/axios.conf"
import {routerCreate, getSubMenu} from "@/utils"

let subRouter = {}

routerCreate(getSubMenu("notes"), subRouter)

export default subRouter
