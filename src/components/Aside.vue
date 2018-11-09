<template>
	<div id="aside-box">
		<el-menu id="aside-scroll" :default-active="acitveItem" @select="handleSelect" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<template v-for="(item, index) in subMenu">
				<el-submenu :index="index+''" v-if="item.children&&item.children.length>0">
					<template slot="title">
						<i class="el-icon-menu"></i>
						<span>{{item.text}}</span>
					</template>
					<template v-for="(item2, index2) in item.children">
						<el-menu-item :index="index+'-'+index2">
							<i class="el-icon-document"></i>
							<span>{{item2.text}}</span>
						</el-menu-item>
					</template>
				</el-submenu>
				<el-menu-item :index="index+''" v-else>
					<i class="el-icon-document"></i>
					<span slot="title">{{item.text}}</span>
				</el-menu-item>
			</template>
		</el-menu>
		<div id="scroll">
			<div id="scrollBar"></div>
		</div>
	</div>
</template>

<script>
	import { fnScroll } from "@/utils"
	
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
			handleOpen: function(key, keyPath){
				this.resizeAsideScroll();
			},
			handleClose: function(key, keyPath){
				this.resizeAsideScroll();
			},
			handleSelect: function(key, keyPath){
				let arr = key.split('-');
				if(arr[1]){
					let nextPage = this.subMenu[arr[0]].children[arr[1]];
					this.$router.push({name: '__' + nextPage.name})
				}
			},
			resizeAsideScroll: function(){
				setTimeout(function(){
					fnScroll('#aside-box', '#aside-scroll', '#scroll', '#scrollBar');
				}, 300);
			}
		},
		beforeCreated() {},
		created() {},
		mounted() {
			this.$store.dispatch('getMenuList').then(this.resizeAsideScroll);
		},
		components: {}
	}
</script>

<style>
.el-menu{
	border-right: none;
}
#aside-box{
	height: 100%;
	overflow: hidden;
	position: relative;
}
#scroll{ width:5px; position:absolute; right:0; top:0; opacity:0; transition:opacity .3s;}
#scrollBar{ width:5px; background:#76839E; position:absolute; left:0; border-radius:5px;}
#aside-box:hover #scroll{ opacity:1;}
</style>