import menuList from "@/setting/menuList"
import {createRouter} from "@/utils/createRouter"

let subMenu = menuList.getSubMenu('Statistics')

let subRouter = {}

createRouter(subMenu, subRouter)

export const StatisticsRouter = subRouter;
