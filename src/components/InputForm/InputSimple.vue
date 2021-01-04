<template>
  <el-input
    :placeholder="config.label"
    v-model="newValue"
    v-if="config.type == 'InputSimple'"
  >
  </el-input>
  <el-input
    placeholder="请输入密码"
    v-model="newValue"
    show-password
    v-else-if="config.type == 'InputPwd'"
  >
  </el-input>
  <el-input
    type="textarea"
    :rows="5"
    placeholder="请输入内容"
    v-model="newValue"
    maxlength="200"
    show-word-limit
    v-else-if="config.type == 'InputArea'"
  >
  </el-input>
  <el-input
    placeholder="请输入手机号"
    type="tel"
    v-model="newValue"
    v-else-if="config.type == 'InputPhone'"
  >
  </el-input>
  <el-input
    placeholder="请输入邮箱"
    type="email"
    v-model="newValue"
    v-else-if="config.type == 'InputEmail'"
  >
  </el-input>
</template>

<script>
export default {
  props: ["config", "value"],
  computed: {
    newValue: {
      get: function() {
        return this.value;
      },
      set: function(value) {
        this.$emit("tableSelect");
        this.$emit("input", value);
      }
    }
  }
};
</script>
