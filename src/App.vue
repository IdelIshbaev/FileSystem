<template>
  <div id="app">
    <div class="tree">
      <h1>Folder Tree</h1>
      <Tree :filesystem="getFilesystem" />
    </div>
    <div class="content">
      <Content :content="getCurrentFolder"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import data from "./data/data"
import Tree from "./components/Tree"
import Content from "./components/Content"

export default {
  name: "app",
  computed: mapGetters(["getFilesystem", "getCurrentFolder"]),
  methods: mapActions(["getData"]),
  async mounted() {
    this.getData(data);
  },
  data(){
    return{
      filesystem: data
    }
  },
  components:{
    Tree,
    Content
  }
};
</script>

<style>
html, body{
	padding: 0;
	margin: 0;
}
.tree{
	display: inline-block;
	float: left;
	width: 47vw;
  height: 90vh;
  border: solid;
  padding: 10px;

}
.content{
	display: inline-block;
	float: left;
	width: 47vw;
  height: 90vh;
  border: solid; 
  padding: 10px;
}
</style>
