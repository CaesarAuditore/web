<template>
  <el-time-picker
    v-model="newValue"
    :picker-options="{
      selectableRange: '00:00:00 - 3:59:59'
    }"
    placeholder="选择时间长度"
  >
  </el-time-picker>
</template>

<script>
export default {
  props: ["value", "config"],
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
