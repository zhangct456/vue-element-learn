<template>
	<div>
		<div class="wrap">
			<Aside :sub-menu="asideMenu"></Aside>
			<div class="content">
				<h2 class="title">订单 <a class="btnRefresh">刷新</a></h2>
				<router-view/>
			</div>
		</div>
	</div>
</template>

<script>
	import Aside from "@/components/Aside"

	export default {
		name: "GoodsConfig",
		components: {
			Aside
		},
		props: {},
		data() {
			return {
				asideMenu: []
			};
		},
		watch: {},
		computed: {},
		methods: {

		},
		created() {},
		mounted() {
			this.asideMenu = this.$commenData.getSubMenu('GoodsConfig').children;
		}
	};
</script>
<style>

</style>