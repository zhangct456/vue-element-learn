<template>
  <div class="Header">
    <header>
	    <div class="logoArea"></div>
	    <ul class="nav">
	    		<li :class="{'act':index==activeMenu}" v-for="(item, index) in menuList">
	    			<a @click="choiceMenu(index)">{{item.text}}</a>
	    		</li>
	    </ul>
	    <dl class="user">
	        <dt>admin123123</dt>
	        <dd>
	            <a class="icon-set">账户设置</a>
	            <a class="icon-massage" data-num="99">消息</a>
	            <a class="icon-logout">退出系统</a>
	        </dd>
	    </dl>
	</header>
  </div>
</template>

<script>
  export default {
  	name: "Header",
    data() {
      return {
      	menuList: [],
      	activeMenu: 0
      }
    },
    props: [],
    computed: {},
    watch: {
    },
    methods: {
    	choiceMenu(index) {
    		this.activeMenu = index;
    		this.$router.push({name: this.menuList[index].name});
    	},
    	changeMenuActive(menuList, currentRootRoute){
    		for (let i = 0; i < menuList.length; i ++) {
    			if(menuList[i].url == currentRootRoute){
    				this.activeMenu = i;
    			}
    		}
    	}
    },
    beforeCreated() {
      console.log('component before created')
    },
    created() {
      console.log('component created')
    },
    mounted() {
    	//初始化修改选中状态
    	let currentRoute = window.location.hash.split('/');
    	let currentRootRoute = currentRoute[0] == "#" ? currentRoute[2] : currentRoute[1];
    	var that = this;
			this.$commenData.getMenuList().then(function(){
				that.menuList = that.$commenData.menuList;
				that.changeMenuActive(that.menuList, currentRootRoute);
			}, function(){
				
			})
    },
    components: {
    }
  }
</script>
<style>

</style>