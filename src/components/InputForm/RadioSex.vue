<template>
  <el-radio-group v-model="newValue">
    <el-radio label="男">男</el-radio>
    <el-radio label="女">女</el-radio>
  </el-radio-group>
</template>

<script>
export default {
  props: ["config", "value", "alter"],
  computed: {
    newValue: {
      get: function() {
        if (!this.value) {
          this.$emit("input", "男");
        }
        return this.value;
      },
      set: function(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>
