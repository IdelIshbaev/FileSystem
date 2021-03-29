<template>
  <div id="app" >
    <!-- <GlobalEvents 
      @dbclick="cons"
    ></GlobalEvents> -->
    <div class="tree" @click="activeTree = true; changeActiveTree()">
      <h1>Folder Tree</h1>
      <Tree :filesystem="getFilesystem" />
    </div>
    <div class="content" @click="activeTree = false; changeActiveTree()">
      <Content :content="getCurrentFolder"/>
    </div>
    <div>
      <Buttons />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import data from "./data/data"
import Tree from "./components/Tree"
import Content from "./components/Content"
import Buttons from "./components/Buttons"

export default {
  name: "app",
  computed: mapGetters(["getFilesystem", "getCurrentFolder"]),
  methods: {
    ...mapActions(["getData"]),
    ...mapMutations(["updateActiveZone"]),
    changeActiveTree(){
      this.updateActiveZone(this.activeTree)
    },
    cons(){
      console.log(this.activeTree)
    }
  },
  async mounted() {
    this.getData(data);
  },
  data(){
    return{
      filesystem: data,
      activeTree: true
    }
  },
  components:{
    Tree,
    Content,
    Buttons
  }
};
</script>

<style>
html, body{
	padding: 0;
	margin: 0;
}
.tree{
	/* display: inline-block; */
	float: left;
	width: 47vw;
  height: 87vh;
  border: solid;
  padding: 10px;

}
.content{
	/* display: inline-block; */
	float: left;
	width: 47vw;
  height: 87vh;
  border: solid; 
  padding: 10px;
}


</style>
