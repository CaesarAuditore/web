<template>
  <el-card class="login">
    <div slot="header" class="clearfix">
      <span class="title">注册</span>
    </div>
    <el-form :model="form" :rules="rules" ref="form" label-width="auto">
      <el-form-item label="邮箱：" prop="userEmail">
        <el-input
          v-model="form.userEmail"
          placeholder="输入用户名或手机号"
          autofocus
        ></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="userPassword">
        <el-input
          placeholder="请输入密码"
          v-model="form.userPassword"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label-width="0">
        <el-button type="primary" @click="submit">注册</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      form: {
        userEmail: "",
        userPassword: ""
      },
      rules: {
        userEmail: { pattern: /^\w+@\w+\.com$/, message: "输入格式不符" },
        userPassword: { pattern: /^[\d|a-z]{6,12}$/, message: "输入格式不符" }
      }
    };
  },
  methods: {
    submit() {
      var flag;
      this.$refs["form"].validate(valid => {
        if (valid) {
          flag = true;
        } else {
          flag = false;
        }
      });
      if (!flag) {
        return;
      }
      this.postRequest("/PravdaWeb/user/user/insertRegister", this.form).then(
        resp => {
          if (resp.status == 200) {
            this.$notify({
              title: "成功",
              message: resp.msg,
              type: "success"
            });
            this.$router.push({ path: "/Login" });
          } else {
            this.$notify.error({
              title: "错误",
              message: resp.msg
            });
          }
        }
      );
    }
  }
};
</script>

<style scoped>
.login {
  position: absolute;
  left: 0px;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 460px;
  height: 300px;
  padding: 20px;
  background: #fff;
}
.login .el-form .el-form-item {
  margin-top: 10px;
  margin-bottom: 30px;
}
.title {
  font-size: 22px;
}
</style>
