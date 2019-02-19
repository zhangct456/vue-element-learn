<template>
	<div>
		<ImgButton v-model="img" @change="changeImg" :multiple="true"></ImgButton>
		<img />
	</div>
</template>

<script>
	import ImgButton from "@/components/ImgButton"
	import {dataURLtoBlob} from "@/utils/imgFile"
	export default {
		name: "Test",
		components: {
			ImgButton
		},
		data() {
			return{
				img: '',
			}
		},
		methods: {
			msgListView(curPage) {
				//根据当前页获取数据
				this.pageNo = curPage; //翻到了第几页
				alert(this.pageNo);
				this.$remote.post("xxxxxx.do", params, function(data) {

				})
			},
			changeImg() {
				console.log(this.img)
			},
			getImgFile(event) {
				console.log(event.target.value);
			}
		},
		props: [],
		computed: {},
		watch: {},
		beforeCreated() {},
		created() {},
		mounted() {}
	}
</script>

<style>
	.aside-box {
		background-color: #545c64;
	}
</style>