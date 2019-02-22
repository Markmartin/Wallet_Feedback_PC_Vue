<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <TableView v-bind:slist="tabledata"></TableView> -->
    <ElemeTable></ElemeTable>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import TableView from "./components/TableView.vue";
import ElemeTable from "./components/ElemeTable.vue";

export default {
  name: "app",
  data: function() {
    return {};
  },
  components: {
    // HelloWorld: HelloWorld,
    TableView: TableView,
    ElemeTable: ElemeTable
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
