<template>
	<div class="editor">
		<textarea id="editor" name="content"></textarea>
	</div>
</template>

<script>
	import "@/assets/js/editor/kindeditor-all-min.js"
	import "@/assets/js/editor/lang/zh-CN.js"
	
	export default {
		name: "Editor",
		data() {
			return {

			}
		},
		props: [],
		computed: {},
		watch: {},
		methods: {},
		beforeCreated() {},
		created() {},
		mounted() {
				KindEditor.ready(function(K) {
			    	window.editor = K.create('#editor',{resizeType:0});
			    });
		},
		components: {}
	}
</script>

<style>
.editor{
	width: 800px;
	height: 300px;
}
</style>