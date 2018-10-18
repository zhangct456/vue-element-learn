<template>
	<div class="Login">
		<div class="topNav">
        <div class="wrapbox"><img src="images/logo.png" ><span>后台管理系统</span></div>
	    </div>
	    <div class="cont">
	        <div class="loginBox">
	            <h2><span>欢迎登录</span></h2>
	            <p><em>账号</em><input class="inpt" type="text" placeholder="请输入您的账号" /><span>用户名不能为空</span></p>
	            <p><em>密码</em><input class="inpt" type="password" placeholder="请输入您的密码" /><span>密码不能为空</span></p>
	            <p><em>验证码</em><input class="inpt" type="number" placeholder="请输入验证码" /><span>验证码不能为空</span></p>
	            <input class="btns btnBlue" type="button" value="登录" @click="loginFn()">
	        </div>
	    </div>
	    <div class="footer">© 2017-2018 优选商城 版权所有  京ICP备14026205号 京公网安备13011445号</div>
	</div>
</template>

<script>
export default {
	name: "Login",
    components: {
    },
    props: {},
    data() {
      return {
      };
    },
    watch: {},
    computed: {},
    methods: {
    	loginFn: function() {
    		this.$router.push({name: "main"});
    	}
    },
    created() {
    },
    mounted() {
    }
};
</script>

<style>
</style>