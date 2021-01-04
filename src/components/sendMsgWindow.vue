<template>
  <div>
    <el-input
      class="contentInput"
      type="textarea"
      resize="none"
      :autosize="rowSet"
      v-model="msg"
    />
    <el-button
      class="contentBtn"
      type="danger"
      plain
      size="small"
      @click="sendMsg"
    >
      发送
    </el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rowSet: { minRows: 4, maxRows: 10 },
      msg: ""
    };
  },
  methods: {
    sendMsg() {
      this.$emit("sendMsg", this.msg);
      this.msg = "";
    }
  }
};
</script>
<style scoped>
.contentBtn {
  position: absolute;
  z-index: 999;
  right: 0;
  bottom: 0;
}
</style>
