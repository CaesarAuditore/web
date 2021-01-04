<template>
  <el-input :value="value" @input="tableSelect($event)"> </el-input>
</template>

<script>
export default {
  props: ["config", "value"],
  methods: {
    tableSelect(val) {
      this.$emit("input", val);
      this.$emit("tableSelect");
    }
  }
};
</script>
