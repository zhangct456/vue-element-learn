<template>
	<div class="Aside">
		<div class="sideBar">
			<dl>
				<template v-for="(item, index) in subMenu">
					<dt :class="{'act':index==activeMenuSub[0]&&activeMenuSub[1]==-1}"@click="chioceMenu(item, index)"><img src="../assets/images/icon-sideBar-order.svg">{{item.text}}</dt>
					<dd v-for="(subItem, subIndex) in item.children">
						<a :class="{'act':index==activeMenuSub[0]&&subIndex==activeMenuSub[1]}" @click="chioceMenu2(item, index, subItem, subIndex)">{{subItem.text}}</a>
					</dd>
				</template>
			</dl>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Aside",
		data() {
			return {
				activeMenuSub: [0, 0]
			}
		},
		props: {
			subMenu: {
				type: Array,
				required: true
			},
			sectionTitle: {
				type: Object,
				required: true
			}
		},
		computed: {},
		watch: {
		},
		methods: {
			chioceMenu(item, index) {
				if(item.children&&item.children.length!=0){
					this.activeMenuSub = [index, 0];
				}else{
					this.activeMenuSub = [index, -1];
				}
				this.$router.push({name: "_" + item.name});
				if(item.children && item.children[0]){
					this.sectionTitle.text = item.children[0].text;
				}else{
					this.sectionTitle.text = item.text;
				}
			},
			chioceMenu2(item, index, subItem, subIndex) {
				this.activeMenuSub = [index, subIndex];
	  			this.$router.push({name: "__" + item.children[subIndex].name});
	  			this.sectionTitle.text = subItem.text
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