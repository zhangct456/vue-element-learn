<!--图片按钮-->
<template>
	<div>
		<ImgButton v-model="imgs" @change="changeImg" :multiple="true"></ImgButton>
		<div class="clear">
			<img v-for="item in imgs" :src="item" />
		</div>
		<ImgButton v-model="imgs2" @change="changeImg"></ImgButton>
		<div>
			<img v-for="item in imgs2" :src="item" />
		</div>
	</div>
</template>
<style scoped="">
	img{
		width: 100px;
		height: 100px;
		float: left;
		margin: 5px;
	}
	.clear{
		zoom: 1;
	}
	.clear:after{
		content: '';
		display: block;
		clear: both;
	}
</style>
<script>
	import ImgButton from "@/components/ImgButton";
	
	export default {
		name: "ImgButtonTest",
		data() {
			return{
				imgs: [],
				imgs2: []
			}
		},
		props: [],
		computed: {
		},
		watch: {},
		methods: {
			changeImg(){
				console.log(this.imgs);
			}
		},
		beforeCreated() {
		},
		created() {
		},
		mounted() {
		},
		components: {
			ImgButton
		}
	}
</script>

<style>
</style>