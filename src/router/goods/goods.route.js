import menuList from "@/setting/menuList"
import {createRouter} from "@/utils/createRouter"

let subMenu = menuList.getSubMenu('Goods')

let subRouter = {}

createRouter(subMenu, subRouter);

export const GoodsRouter = subRouter;
