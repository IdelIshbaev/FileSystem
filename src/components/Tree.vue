<template>
	<div class="wrapper">
		<div 
			v-if="filesystem.folder"
			@click="show = !show; submit()"
			:style="{'margin-left': `${depth * 30}px`}"
			class="leaf"
			>
			<p class="foldername" :class="{chosen: filesystem == getCurrentFolder}">
				<!-- <span class="type">{{show ? '&#9660;' : '&#9658;'}}</span> -->
				<span class="folder"></span>
				<span > {{filesystem.name}}</span>
			</p>
		</div>
		<div v-if="show">
			<Tree
				v-for="child in filesystem.children" 
				:key="child.name"
				:filesystem="child"
				:depth="depth + 1"
			/>
		</div>
	</div>
</template>
<script>
import {mapMutations,mapGetters} from 'vuex'

export default {
  name: 'Tree',
computed: mapGetters(["getCurrentFolder"]),
  data() {
	return{
		show: false,
	}
  },
  props:{
	filesystem: Object,
	depth: {
		type: Number,
		default: 0
	}
  },
  methods: {
	...mapMutations(["updateCurrentFolder"]),
	submit(){
		// this code hide folder content on click
		// if(this.show === false){
		// 	this.updateCurrentFolder({})
		// }else{
		// 	this.updateCurrentFolder(this.filesystem)
		// }
		this.updateCurrentFolder(this.filesystem)

	},
	isShow(){
		if(this.isFolder){
			this.open = !this.open;
		}
	},
	cons(){
		console.log(this.filesystem)
	}
  }
}
</script>
<style scoped>
.foldername{
	display: inline-block;
	padding-right: 5px;
	padding-left: 5px;
	padding-bottom: 8px;
	margin: 8px;
}
.chosen{
	background: rgb(193, 206, 211);
	border-radius: 5px;
}

.leaf{
	text-align: left;
}
/* .chosen{
	background: rgb(169, 205, 219);
	border-radius: 5px;
} */
.folder {
width: 30px;
height: 20px;
display: inline-block;
margin: auto;
position: relative;
background-color: #708090;
border-radius: 0 3px 3px 3px;
/*box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.59);*/
margin-bottom: -8px;
margin-top: 12px;
}

.folder:before {
content: '';
width: 50%;
height: 0.2em;
border-radius: 0 20px 0 0;
background-color: #708090;
position: absolute;
top: -0.2em;
left: 0px;
}

</style>