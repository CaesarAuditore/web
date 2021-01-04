<template>
  <el-dialog
    title="修改密码"
    width="600px"
    :visible.sync="dialogUserPwdVisible"
    :before-close="closeEdit"
  >
    <el-form
      label-width="80px"
      style="max-width:500px"
      :model="formModel"
      :rules="rules"
      ref="form"
    >
      <el-form-item :key="index" label="原密码" label-position="right">
        <InputSimple :config="pwdConfig" v-model="formModel.oldPwd" />
      </el-form-item>
      <el-form-item :key="index" label="新密码" label-position="right">
        <InputSimple :config="pwdConfig" v-model="formModel.newPwd" />
      </el-form-item>
      <el-form-item :key="index" label="确认密码" label-position="right">
        <InputSimple :config="pwdConfig" v-model="confirmPwd" />
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button @click="closeEdit()">取 消</el-button>
      <el-button type="primary" @click="submitEdit()">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import InputSimple from "@/components/InputForm/InputSimple.vue"; //普通
export default {
  props: ["dialogUserPwdVisible"],
  components: {
    InputSimple
  },
  data() {
    return {
      formModel: {},
      confirmPwd: "",
      pwdConfig: { type: "InputPwd", label: "请输入原密码" }
    };
  },
  methods: {
    submitEdit() {
      this.$emit("updatePwd", this.formModel);
      this.$emit("update:dialogUserPwdVisible", false);
    },
    closeEdit() {
      this.$emit("update:dialogUserPwdVisible", false);
    }
  }
};
</script>
