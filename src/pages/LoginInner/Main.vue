
<template>
  <div>
  	<div class="wrap">
  		<Aside :sub-menu="asideMenu" :section-title="sectionTitle"></Aside>
  		<div class="content">
  			<h2 class="title">{{sectionTitle.text}} <a class="btnRefresh" @click="refreshFn()">刷新</a></h2>
	  		<router-view/>
  		</div>
  	</div>
  </div>
</template>

<script>
import Aside from "@/components/Aside"

export default {
		name: "Main",
    components: {
    	Aside
    },
    props: {},
    data() {
      return {
      	asideMenu: [],
      	sectionTitle: {
      		text : "系统首页"
      	}
      };
    },
    watch: {},
    computed: {},
    methods: {
    	refreshFn() {
    		this.$router.go(0);
    	}
    },
    created() {
    },
    mounted() {
			var that = this;
			this.$commenData.getMenuList().then(function(){
				that.asideMenu = that.$commenData.getSubMenu('Main').children;
			}, function(){
				
			})
    }
};
</script>
<style>
	
</style>