<template>
	<div>
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<template v-for="(item, index) in menu">
				<el-menu-item :index="'/'+item.url">{{item.text}}</el-menu-item>
			</template>
		</el-menu>
	</div>
</template>

<script>
	export default {
		name: "Header",
		data() {
			return {
				menu: [],
				activeIndex: ""
			}
		},
		props: {},
		computed: {
		},
		watch: {},
		methods: {
			handleSelect(key, keyPath) {
		    	console.log(key, keyPath);
		  }
		},
		beforeCreated() {},
		created() {
		},
		mounted() {
			let _this = this;
//			this.$remote.post("menu.do").then(function(data){
//				_this.menu = data.List;
//				let rootRoute = window.location.hash.split('/')[1];
//				_this.activeIndex = '/' + rootRoute;
//			})
			this.$store.dispatch('getMenuList').then(function(data){
				_this.menu = data;
				let rootRoute = window.location.hash.split('/')[1];
				_this.activeIndex = '/' + rootRoute;
			})
		},
		components: {}
	}
</script>

<style>

</style>