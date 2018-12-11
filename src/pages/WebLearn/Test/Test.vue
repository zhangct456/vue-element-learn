<template>
	<div>
		<ImgButton v-model="img" @change="changeImg"></ImgButton>
		<input id="testfile" type="file" @change="getImgFile($event)" />
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
				pageNo: 1,
				pages: 15,
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
				console.log(dataURLtoBlob(this.img))
				console.log(this.img2)
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