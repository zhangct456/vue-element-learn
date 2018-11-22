<template>
	<div>
		<input v-if="!multiple" class="img-file" type="file" @change="getImgFile($event)">
		<input v-else class="img-file" type="file" @change="getImgFile($event)" multiple="multiple">
		<input type="button" class="btns btnBlue" value="上传图片" @click="triggerFile($event)">
	</div>
</template>

<script>
	export default {
		name: "ImgButton",
		data() {
			return{
				currentValue: '',
				currentValues: []
			}
		},
		props: {
			value: {
			},
			multiple: {
				type: Boolean,
				default: false
			}
		},
		computed: {
		},
		watch: {},
		methods: {
			triggerFile: function($event) {
				$($event.target.parentElement.children[0]).trigger('click');
			},
			getImgFile: function($event) {
				let that = this;
				let reader = new FileReader();
				let reg = new RegExp("(.jpg|.JPG|.png|.PNG)$");
				if(!this.multiple){
					let file = $event.target.files["0"];
					if(file){
						if(!reg.test(file.name)){
							that.$alert({
								text: "文件格式不正确，请重新选择!(支持jpg/png)"
							});
							return
						}
						if(file.size > 5242880){
							that.$alert({
								text: "文件大小最大为5M，请重新选择!"
							});
							return
						}
						reader.readAsDataURL(file);
						reader.onload = function() {
							that.currentValue = reader.result;
							that.$emit('input', that.currentValue);
							that.$emit('change');
						}
					}
				}else {
					let files = $event.target.files;
					let getFileFns = [];
					for(let i = 0 ; i < files.length ; i ++){
						let getFileFn = new Promise(function(resolve, reject){
							let reader = new FileReader();
							let file = files[i];
							if(file){
								if(!reg.test(file.name)){
//									that.$alert({
//										text: "文件格式不正验，请重新选择!(支持jpg/png)"
//									});
									resolve();
								}
								if(file.size > 5242880){
//									that.$alert({
//										text: "文件大小最大为5M，请重新选择!"
//									});
									resolve();
								}
								reader.readAsDataURL(file);
								reader.onload = function() {
									let value = reader.result;
									that.currentValues.push(value);
									resolve();
								}
							}
						})
						getFileFns.push(getFileFn);
					}
					Promise.all(getFileFns).then(function(){
						that.$emit('input', that.currentValues);
						that.$emit('change');
					})
				}
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
	.img-file{
		display: none;
	}
</style>