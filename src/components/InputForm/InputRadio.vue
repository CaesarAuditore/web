<template>
  <el-radio-group v-model="newValue">
    <el-radio
      v-for="(config, index) in configs"
      :key="index"
      :label="config.value"
      >{{ config.label }}</el-radio
    >
  </el-radio-group>
</template>

<script>
export default {
  props: ["configs", "value"],
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
