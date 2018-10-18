import menuList from "@/setting/menuList"
import {createRouter} from "@/utils/createRouter"

let subMenu = menuList.getSubMenu('Main')

let subRouter = {}

createRouter(subMenu, subRouter)

export const MainRouter = subRouter;