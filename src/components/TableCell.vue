<template>
    <div class="TableCell">
        <label class="time">{{loacalstatus.time}}</label>
        <label class="gps">{{loacalstatus.gps}}</label>
    </div>
</template>

<script>
export default {
  name: "TableCell",
  props: {
    status: Object
  },
  data: function() {
    return {
      loacalstatus: this.status
    };
  }
};
</script>

<style lang="less" scoped>
</style>


