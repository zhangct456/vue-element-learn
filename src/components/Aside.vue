<template>
	<div>
		<el-menu :default-active="acitveItem" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<template v-for="(item, index) in subMenu">
				<el-submenu :index="index+''" v-if="item.children&&item.children.length>0">
					<template slot="title">
						<i class="el-icon-menu"></i>
						<span>{{item.text}}</span>
					</template>
					<el-menu-item :index="index+'-'+index2" v-for="(item2, index2) in item.children">
						<i class="el-icon-document"></i>
						<span>{{item2.text}}</span>
					</el-menu-item>
				</el-submenu>
				<el-menu-item :index="index+''" v-else>
					<i class="el-icon-document"></i>
					<span slot="title">{{item.text}}</span>
				</el-menu-item>
			</template>
		</el-menu>
	</div>
</template>

<script>
	export default {
		name: "Aside",
		data() {
			return {
				acitveItem: '0'
			}
		},
		props: {
			subMenuName: {
				type: String,
				required: true
			}
		},
		computed: {
			subMenu() {
				let menu = this.$store.getters.getSubMenu(this.subMenuName);
				return menu.children;
			}
		},
		watch: {},
		methods: {
			handleOpen: function(){
				
			},
			handleClose: function(){
				
			}
		},
		beforeCreated() {},
		created() {},
		mounted() {},
		components: {}
	}
</script>

<style>
.el-menu{
	border-right: none;
}
</style>