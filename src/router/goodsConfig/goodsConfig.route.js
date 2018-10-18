import menuList from "@/setting/menuList"
import {createRouter} from "@/utils/createRouter"

let subMenu = menuList.getSubMenu('GoodsConfig')

let subRouter = {}

createRouter(subMenu, subRouter)

export const GoodsConfigRouter = subRouter;
