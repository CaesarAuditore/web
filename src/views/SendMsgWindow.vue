<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <MsgInput @sendMsg="releaseMsg" />
    </div>
    <div class="imgUpload">
      <el-upload
        class="addFrame"
        ref="upload"
        action="/PravdaWeb/user/msg/releaseMsg"
        list-type="picture-card"
        :data="otherData"
        :auto-upload="false"
        :http-request="httpRequest"
        multiple
        :on-preview="handlePictureCardPreview"
        :on-success="handleSuccess"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
    </div>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </el-card>
</template>
<script>
import MsgInput from "@/components/ContactInput.vue";
export default {
  components: { MsgInput },
  data() {
    return {
      file: []
    };
  },
  methods: {
    handleRemove() {},
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleSuccess() {},
    releaseMsg(msg) {
      var msgJson = { msgContent: msg };
      var upData = new FormData();
      this.$refs.upload.submit();
      this.file.forEach(function(file) {
        upData.append("imgs", file, file.name);
      });
      upData.append("json", JSON.stringify(msgJson));
      this.postRequest("/PravdaWeb/user/msg/releaseMsg", upData).then(resp => {
        if (resp.status == 200) {
          this.$router.push({ path: "/" });
        }
      });
    },
    httpRequest(param) {
      this.file.push(param.file);
    }
  }
};
</script>
<style scoped>
>>> .el-upload {
  width: 133px;
  height: 133px;
}
>>> .el-upload-list--picture-card .el-upload-list__item {
  width: 133px;
  height: 133px;
}
.imgUpload {
  text-align: left;
}
</style>
