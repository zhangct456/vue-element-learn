<!--笔记-->
<template>
	<el-container>
		<el-aside class="aside-box" width="200px">
			<Aside sub-menu-name="notes"></Aside>
		</el-aside>
		<el-main>
			<router-view/>
		</el-main>
	</el-container>
</template>

<script>
	import Aside from "@/components/Aside.vue"
	export default {
		name: "Notes",
		components: {
			Aside
		},
		data() {
			return {

			}
		},
		props: [],
		computed: {},
		watch: {},
		methods: {},
		beforeCreated() {},
		created() {},
		mounted() {}
	}
</script>

<style>
.aside-box{
	background-color: #545c64;
}
</style>