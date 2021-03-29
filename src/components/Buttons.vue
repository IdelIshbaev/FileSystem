<template>
	<div class="btns">
      <button class="btn" @click="showInput = !showInput">NEW</button>
      <button class="btn" @click="deleteF">Delete</button>
	  <button class="btn" @click="showInput = !showInput; rename = true">Rename</button>
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
	computed: mapGetters(["getCurrentFolder", "getFilesystem", "getActiveTree", "getcurrentFileInContent"]),
	methods:{
		...mapMutations(["updateCurrentFolder"]),
		createF(){
			if(this.getActiveTree == true){
				if(this.rename == false){
					this.getCurrentFolder.children.push(
						{
							name:this.newname,
							folder:true,
							children:[]
							})
				}else{
					this.getCurrentFolder.name = this.newname
					this.rename == false
				}
			}else{
				if(this.rename == false){
					this.getCurrentFolder.children.push(
						{
							name: this.newname,
							folder:false,
							children:[]
							})
				}else{
					this.getcurrentFileInContent.name = this.newname
					this.rename == false
				}
			}
			this.newname = ""
		},
		deleteF(){
			if(this.getActiveTree == true){
				var temp = this.getFilesystem
				this.recursDel(temp, this.getCurrentFolder);
				this.updateCurrentFolder({})
			}else if( this.getActiveTree == false){
				var temp = this.getFilesystem
				this.recursDel(temp, this.getcurrentFileInContent);
			}
		},
		recursDel(tempfiles, checkObj){
			for(var i = 0; i < tempfiles.children.length; i++){
				if(tempfiles.children[i].name == checkObj.name){
					tempfiles.children.splice(i, 1)
					return;
				}
			}
			for( var i = 0; i < tempfiles.children.length; i++){
				this.recursDel(tempfiles.children[i], checkObj)
			}
		}
	},
	data() {
		return{
			files: this.getFilesystem,
			newname: "",
			showInput: true,
			rename: false
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