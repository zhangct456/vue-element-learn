import Vue from 'vue'
import Router from 'vue-router'
import { MainRouter } from './main/main.route'
import { GoodsRouter } from './goods/goods.route'
import { FinanceRouter } from './finance/finance.route'
import { DistributionRouter } from './distribution/distribution.route'
import { GoodsConfigRouter } from './goodsConfig/goodsConfig.route'
import { MarketingRouter } from './marketing/marketing.route'
import { PermissionRouter } from './permission/permission.route'
import { SettingRouter } from './setting/setting.route'
import { StatisticsRouter } from './statistics/statistics.route'
import { UserRouter } from './user/user.route'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '',
			redirect: 'login',
		},{
			path: '/login',
			name: 'login',
			component: () => import("@/pages/Login.vue")
		},{
			path: '/app',
			name: 'app',
			component: () => import("@/pages/LoginInner.vue"),
			children: [
				MainRouter,
				GoodsRouter
			]
		}
//		MainRouter,
//		FinanceRouter,
//		DistributionRouter,
//		GoodsConfigRouter,
//		MarketingRouter,
//		PermissionRouter,
//		SettingRouter,
//		StatisticsRouter,
//		UserRouter,
//		GoodsRouter
	]
})