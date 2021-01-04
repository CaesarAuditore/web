<template>
  <el-select
    v-model="newValue"
    filterable
    placeholder="请选择"
    @change="change"
  >
    <el-option v-for="(item, index) in optionData" :key="index" :value="item">
      <span style="float: left">{{ item }}</span>
    </el-option>
  </el-select>
</template>

<script>
export default {
  props: ["value", "optionData"],
  computed: {
    newValue: {
      get: function() {
        return this.value;
      },
      set: function(value) {
        this.$emit("input", value);
      }
    }
  },
  methods: {}
};
</script>
