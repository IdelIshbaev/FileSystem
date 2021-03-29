<template>
	<div class="btns">
      <button class="btn" @click="showInput = !showInput">NEW</button>
      <button class="btn">Delete</button>
	  <div :class="{inputName: showInput}"> 
		  <input  v-model="newname" 
		  	placeholder="type name for folder/file" 
			@keyup.enter="showInput = !showInput; createF()"/> 
	</div>
	 
    </div>
</template>


<script>
import {mapMutations, mapGetters} from 'vuex'
import filesystem from '../data/data'
export default {
	computed: mapGetters(["getCurrentFolder", "getFilesystem", "getActiveTree"]),
	methods:{
		// ...mapMutations(["deleteFolder"]),
		createF(){
			if(this.getActiveTree == true){
				console.log("create folder in tree")
				console.log(this.getCurrentFolder.children)
				this.getCurrentFolder.children.push(
					{
						name:this.newname,
						folder:true,
						children:[]
						})
			}else{
				console.log("create file in content zone")
				this.getCurrentFolder.children.push(
					{
						name: this.newname,
						folder:false,
						children:[]
						})
			}
			this.newname = ""
		},




		// deleteF(){
		// 	var temp = this.getFilesystem
		// 	console.log(temp)
		// 	this.recursDel(temp);
		// 	console.log(temp)
		// 	// this.deleteFolder(this.getCurrentFolder)
		// },
		recursDel(tempfiles){
			console.log(tempfiles)
			if(tempfiles.name == this.getCurrentFolder.name){
				console.log("done")
				tempfiles = null
			}else{
				for( var i = 0; i < tempfiles.children.length; i++){
					this.recursDel(tempfiles.children[i])
				}
			}
		}
	},
	data() {
		return{
			files: this.getFilesystem,
			newname: "",
			showInput: true
		}
  },
}
</script>
<style scoped>
.btns{
  text-align: center;
}
.btn{
  padding: 5px;
  width: 100px;
  margin: 10px;
}
.inputName{
	display: none;
}
</style>