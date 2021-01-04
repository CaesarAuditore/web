<template>
  <div>
    <Message
      class="msg"
      v-for="(msg, index) in MsgData"
      :key="index"
      :msgVO="msg"
    />
  </div>
</template>

<script>
import Message from "@/components/Message.vue";
export default {
  components: { Message },
  data() {
    return {
      MsgData: []
    };
  },
  mounted() {
    this.getRequest("/PravdaWeb/user/userinfo").then(resp => {
      var userId = resp.userId;
      this.getRequest("/PravdaWeb/user/msg/getTop10MsgVO").then(resp2 => {
        resp2.forEach(item => {
          var cols = item.collects;
          if (cols == "") {
            item.collectId = -1;
          }
          var col = cols.find(item2 => item2.userId == userId);
          if (col) {
            item.collectId = col.colId;
          } else {
            item.collectId = -1;
          }

          var tbs = item.thumbs;
          if (tbs == "") {
            item.thumbId = -1;
          }
          var tb = tbs.find(item2 => item2.userId == userId);
          if (tb) {
            item.thumbId = tb.tbId;
          } else {
            item.thumbId = -1;
          }
        });
        this.MsgData = resp2;
      });
    });
  }
};
</script>

<style scoped>
.msg {
  margin-bottom: 20px;
}
</style>
