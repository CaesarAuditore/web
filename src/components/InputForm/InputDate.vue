<template>
  <el-date-picker v-model="newValue" :type="date" placeholder="请选择日期">
  </el-date-picker>
</template>

<script>
export default {
  props: ["value"],
  computed: {
    newValue: {
      get: function() {
        return this.value;
      },
      set: function(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>
