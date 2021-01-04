<template>
  <div>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="(url, index) in imgsUrl" :key="index">
        <el-image :src="url" class="img" fit="contain" />
      </el-carousel-item>
    </el-carousel>
    <CommentInput @sendMsg="sendCmt" />
    <CommentList :comments="comments" @sendChildCmt="sendChildCmt" />
  </div>
</template>

<script>
import CommentList from "@/components/CommentList.vue";
import CommentInput from "@/components/ContactInput.vue";
export default {
  components: { CommentList, CommentInput },
  data() {
    return {
      msgVO: {},
      avatarUrl:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    };
  },
  computed: {
    user() {
      return this.msgVO.user;
    },
    msg() {
      return this.msgVO.msg;
    },
    imgsUrl() {
      var pics = this.msgVO.pictures;
      if (pics == undefined) {
        return;
      }
      return pics.map(item => {
        return item.picUrl;
      });
    },
    comments() {
      return this.msgVO.comments;
    }
  },
  methods: {
    sendCmt(cmt) {
      this.postRequest("/PravdaWeb/user/comment", {
        msgId: this.msg.msgId,
        cmtContent: cmt,
        touserId: -1
      }).then(resp => {
        this.respBeanMsg(resp);
      });
    },
    sendChildCmt(cmt) {
      this.postRequest("/PravdaWeb/user/comment", {
        msgId: this.msg.msgId,
        cmtContent: cmt.cmtContent,
        touserId: cmt.touserId
      }).then(resp => {
        this.respBeanMsg(resp);
      });
    }
  },
  mounted() {
    this.msgVO = this.$route.params.msgVO;
  }
};
</script>

<style scoped>
.img {
  height: 300px;
}
</style>
