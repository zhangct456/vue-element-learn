import menuList from "@/setting/menuList"
import {createRouter} from "@/utils/createRouter"

let subMenu = menuList.getSubMenu('Marketing')

let subRouter = {}

createRouter(subMenu, subRouter)

export const MarketingRouter = subRouter;
