<template>
    <div class="tableview">
        <div class="contentContainer">
            <TableCell v-for="(item, index) in list" v-bind:key="index" v-bind:status="item"></TableCell>
        </div>
    </div>
</template>

<script>
import TableCell from "./TableCell.vue";
export default {
  name: "TableView",
  props: {
    slist: Array
  },
  data: function() {
    return {
      list: this.slist
    };
  },
  components: {
    TableCell: TableCell
  }
};
</script>

<style lang="less" scoped>
</style>
