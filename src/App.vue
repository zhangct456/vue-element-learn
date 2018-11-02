<template>
  <div id="app">
	  <el-container class="all-box">
		  <el-header>
		  	<Header></Header>
		  </el-header>
		  <router-view/>
		</el-container>
  </div>
</template>

<script>
import Header from "@/components/Header"
export default {
  name: 'App',
  components: {
  	Header
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style>
.el-header{
	padding: 0;
}
.all-box{
	height: 100%;
}
</style>
