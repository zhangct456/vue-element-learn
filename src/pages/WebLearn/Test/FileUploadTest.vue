<!--测试文件上传-->
<template>
	<div>
		<input type="file" @change="changeFile($event)"/>
		<button @click="uploadFile()">上传</button>
	</div>
</template>

<script>
	export default {
		name: "FileUploadTest",
		data() {
			return{
				file: ''
			}
		},
		props: [],
		computed: {
		},
		watch: {},
		methods: {
			changeFile(event) {
				this.file = event.target.files[0];
			},
			uploadFile() {
				let formData = new FormData();
				
				formData.append("file", this.file);
				formData.append("info", "测试上传文件功能");
				
				let config = {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				};
				
				this.$remote.post('upload', formData, config).then((res) => {
					console.log(res);
				})
				
			}
		},
		beforeCreated() {
		},
		created() {
		},
		mounted() {
		},
		components: {}
	}
</script>

<style>
</style>