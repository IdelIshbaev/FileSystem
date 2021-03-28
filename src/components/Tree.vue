<template>
	<div class="wrapper">
		<div 
			v-if="filesystem.folder"
			@click="show = !show; submit()"
			:style="{'margin-left': `${depth * 20}px`}"
			class="leaf">
			<p>
				<!-- <span class="type">{{show ? '&#9660;' : '&#9658;'}}</span> -->
				<span class="folder"></span>
				{{filesystem.name}}
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
import {mapMutations} from 'vuex'

export default {
  name: 'Tree',
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
.leaf{
	text-align: left;
}
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