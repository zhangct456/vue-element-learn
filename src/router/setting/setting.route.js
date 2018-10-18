import menuList from "@/setting/menuList"
import {createRouter} from "@/utils/createRouter"

let subMenu = menuList.getSubMenu('Setting')

let subRouter = {}

createRouter(subMenu, subRouter)

export const SettingRouter = subRouter;
