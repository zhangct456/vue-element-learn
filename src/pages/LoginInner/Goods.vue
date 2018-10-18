<template>
  <div>
  	<div class="wrap">
  		<Aside :sub-menu="asideMenu" :section-title="sectionTitle"></Aside>
  		<div class="content">
  			<h2 class="title">{{sectionTitle.text}} <a class="btnRefresh">刷新</a></h2>
	  		<router-view/>
  		</div>
  	</div>
  </div>
</template>

<script>
import Aside from "@/components/Aside"

export default {
		name: "Goods",
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
    	
    },
    created() {
    },
    mounted() {
    	var that = this;
			this.$commenData.getMenuList().then(function(){
				that.asideMenu = that.$commenData.getSubMenu('Goods').children;
			}, function(){
				
			})
    }
};
</script>
<style>
	
</style>