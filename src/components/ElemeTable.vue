<template>
<div>
    <el-table :data="tableData5" stripe style="width: 100%" row-key="feedbackId" :expand-row-keys="expands" @row-click="rowClick">
        <el-table-column type="expand">
            <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="用户ID">
            <span>{{ props.row.userId }}</span>
          </el-form-item>
          <el-form-item label="用户名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="描述" >
            <span>{{ props.row.content }}</span>
          </el-form-item>
          <el-form-item label="设备型号">
            <span>{{ props.row.deviceModel }}</span>
          </el-form-item>
          <el-form-item label="系统版本">
            <span>{{ props.row.systemVersion }}</span>
          </el-form-item>
          <el-form-item label="ethAddress">
            <span>{{ props.row.ethAddress }}</span>
          </el-form-item>
          <el-form-item label="Email">
            <span>{{ props.row.mailAddress }}</span>
          </el-form-item>
          <el-form-item label="feedbackImages">
            <el-button v-if="props.row.feedbackImages.length" type="text" v-for="(item, index) in props.row.feedbackImages" v-bind:key="index" @click="dialogVisible = true;currentImageIndex=index">images{{index}} </el-button>
            <span v-if="!props.row.feedbackImages.length">暂无反馈图片</span>
            <el-dialog v-if="props.row.feedbackImages.length" title="反馈图片" :visible.sync="dialogVisible" fullscreen="true" close-on-click-modal="true"	top="0vh">
                <img v-if="props.row.feedbackImages.length" :src="props.row.feedbackImages[currentImageIndex].imageName" />
            </el-dialog>
            <!-- <span v-for="(item, index) in props.row.feedbackImages" v-bind:key="index" v-bind:target="_blank"><a v-bind:href="item.imageName">images{{index}}</a></span> -->
          </el-form-item>
        </el-form>
      </template>
        </el-table-column>
        <el-table-column label="用户ID" prop="userId">
        </el-table-column>
        <el-table-column label="用户名称" prop="name">
        </el-table-column>
        <el-table-column label="描述" prop="content">
        </el-table-column>
        <el-table-column label="设备型号" prop="deviceModel">
        </el-table-column>
    </el-table>
    <div class="pagination">
      <el-button type="primary" icon="el-icon-arrow-left" id="last" @click="lastPage" :disabled="page==1?true:false">上一页</el-button>
      <span class="currentPage">{{page}}</span>
      <el-button type="primary" id="next" @click="nextPage" :disabled="tableData5.length<5?true:false">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      currentImageIndex: 0,
      tableData5: [],
      dialogVisible: false,
      expands: []
    };
  },
  methods: {
    updateFeedback: function() {
      const signKey = "Ub9xq1Ju~T&.g%B7?8!]OpB+ab,b7q19w";
      var timeUnix = this.$moment().valueOf();
      var splitTs = timeUnix + signKey;
      var sArry = splitTs.split("");
      var pArray = new Array();
      for (var i = 0; i < sArry.length; i += 2) {
        pArray.push(sArry[i]);
      }
      var md5Str = pArray.join("");
      var signParam = this.$crypto
        .createHash("md5")
        .update(md5Str)
        .digest("hex");
      var baseUrl =
        process.env.NODE_ENV === "development"
          ? "/api"
          : "https://wallet.iotchain.io";
      var resUrl =
        baseUrl +
        "/wallet/feedback/query?sign=" +
        signParam +
        "&time=" +
        timeUnix +
        "&page=" +
        this.page;
      this.$ajax
        .get(resUrl)
        .then(response => {
          if (response.data.code == 200) {
            this.tableData5 = response.data.data;
          }
        })
        .catch(function(error) {
          console.log(error.message);
        });
    },
    lastPage: function() {
      this.page--;
      this.updateFeedback();
    },
    nextPage: function() {
      this.page++;
      this.updateFeedback();
    },
    rowClick: function(row) {
      var itemIndex = this.expands.indexOf(row.feedbackId);
      if (itemIndex < 0) {
        this.expands.push(row.feedbackId);
      } else {
        this.expands.splice(itemIndex, 1);
      }
    }
  },
  mounted: function() {
    this.updateFeedback();
  }
};
</script>

<style lang="less" scoped>
.demo-table-expand {
  font-size: 0;
  label {
    width: 90px;
    color: #99a9bf;
  }
  p {
    width: 90px;
    color: #99a9bf;
  }
  .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
    .el-dialog {
      img {
        display: block;
        margin: 0 auto 0;
        height: 100%;
        max-height: 700px;
        width: auto;
      }
    }
  }
}
.pagination {
  margin-top: 60px;
  .currentPage {
    padding: 0 20px 0 20px;
  }
}
</style>

