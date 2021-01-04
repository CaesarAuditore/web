<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-avatar
          :size="50"
          :src="userInfo.userinfo.userinfoProfile"
          style="float: left"
        />
        <div class="title">
          欢迎您：{{ userInfo.userNickname }}
          <span class="userId">UID:{{ userInfo.userId }}</span>
        </div>
      </div>
      <el-row>邮箱：{{ userInfo.userEmail }}</el-row>
      <el-row>性别： {{ userInfo.userinfo.userinfoGender }}</el-row>
      <el-row>电话：{{ userInfo.userinfo.userinfoTel }}</el-row>
      <el-row>生日：{{ userInfo.userinfo.userinfoBirthday }}</el-row>
      <el-row>职业：{{ userInfo.userinfo.userinfoProfession }}</el-row>
      <el-row>星座：{{ userInfo.userinfo.userinfoStartsign }}</el-row>
      <el-row>地址：{{ userInfo.userinfo.userinfoAddress }}</el-row>
      <el-row>简介：{{ userInfo.userinfo.userinfoRemark }}</el-row>
      <el-row>注册时间：{{ userInfo.userRegister }}</el-row>
      <el-row>最后登录时间:{{ userInfo.userLastlogin }}</el-row>

      <el-button @click="dialogUserInfoVisible = true">编辑个人资料</el-button>
      <el-button @click="dialogUserPwdVisible = true">修改密码</el-button><br />
    </el-card>
    <DialogUserInfo
      :formModel="userInfo"
      :dialogUserInfoVisible.sync="dialogUserInfoVisible"
      @updateUserinfo="updateUserinfo"
    />
    <DialogUserPwd
      :dialogUserPwdVisible.sync="dialogUserPwdVisible"
      @updatePwd="updatePwd"
    />
  </div>
</template>
<script>
import DialogUserInfo from "@/components/DialogUserInfo.vue";
import DialogUserPwd from "@/components/DialogUserPwd.vue";
export default {
  components: { DialogUserInfo, DialogUserPwd },
  data() {
    return {
      userInfo: {},
      avatarUrl:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      dialogUserInfoVisible: false,
      dialogUserPwdVisible: false
    };
  },
  methods: {
    updateUserinfo(model) {
      this.putRequest("/PravdaWeb/user/userinfo", model);
    },
    updatePwd(model) {
      this.putRequest("/PravdaWeb/user/userinfo/updatePwd", model);
    }
  },
  mounted() {
    this.getRequest("/PravdaWeb/user/userinfo").then(resp => {
      this.userInfo = resp;
    });
  }
};
</script>
<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
.el-row {
  margin-bottom: 10px;
}
.title {
  margin-top: 15px;
  font-size: 20px;
}
.userId {
  padding: 2px;
  margin-left: 10px;
  color: white;
  background-color: gray;
  font-size: 15px;
}
</style>
