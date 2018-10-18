<template>
	<div>
		<div class="wrap">
			<Aside :sub-menu="asideMenu"></Aside>
			<div class="content">
				<h2 class="title">系统首页 <a class="btnRefresh">刷新</a></h2>
				<router-view/>
			</div>
		</div>
	</div>
</template>

<script>
	import Aside from "@/components/Aside"

	export default {
		name: "Distribution",
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
			this.asideMenu = this.$commenData.getSubMenu('Distribution').children;
		}
	};
</script>
<style>

</style>