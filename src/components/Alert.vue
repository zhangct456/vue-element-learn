<template>
	<div>
		<div v-show="alertFlag">
			<div class="alert_mask"></div>
			<div class="alert_box" :class="{'act':alertFlag}">
				<h2 class="alert_box_title">{{title}}</h2>
				<div>
					<p class="alert_box_text">{{text}}</p>
					<p class="alert_box_btn">
						<input type="button" class="" value="确认" @click="closeFn()">
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Alert",
		data() {
			return {

			}
		},
		props: [],
		computed: {},
		watch: {},
		methods: {
			closeFn: function() {
				this.close();
			}
		},
		beforeCreated() {},
		created() {},
		mounted() {},
		components: {}
	}
</script>

<style>
	.alert_mask {
		position: fixed;
		background-color: rgba(255, 255, 255, 0.75);
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 90;
	}
	
	.alert_box {
		position: fixed;
	    top: 50%;
	    margin-top: -100px;
	    min-height: 150px;
	    left: 50%;
	    margin-left: -200px;
	    width: 400px;
	    background: #fff;
	    text-align: center;
	    -webkit-box-shadow: 0 0 20px 0 rgba(74, 144, 226, 0.35);
	    box-shadow: 0 0 20px 0 rgba(74, 144, 226, 0.35);
	    z-index: 100;
	}
	
	.alert_box_title{
		line-height: 40px;
    	border-bottom: 1px solid rgba(74, 144, 226, 0.2);
	}
	
	.alert_box_text{
		padding: 20px 25px;
	}
	
	.alert_box_btn input{
		width: 120px;
	    height: 30px;
	    border: none;
	    border-radius: 4px;
	    background: rgb(105, 168, 241);
	    color: white;
	}
</style>