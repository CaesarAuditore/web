<template>
  <div class="clearfix">
    <div class="superAvatar">
      <el-avatar :size="45" :src="fromUser.userinfo.userinfoProfile" />
    </div>
    <div class="superComment">
      <span class="userNickname">{{ fromUser.userNickname }}</span>
      <el-button class="btnCmt" size="mini" @click="commenting = true"
        >让我来评评理</el-button
      >
      <div class="superCommentContent">
        <span class="at" v-if="userNickname != ''">@{{ userNickname }}</span
        >{{ cmt.cmtContent }}
      </div>
      <CommentInput v-if="commenting" @sendMsg="sendCmt" />
    </div>
  </div>
</template>
<script>
import CommentInput from "@/components/ContactInput.vue";
export default {
  props: ["CommentData"],
  components: { CommentInput },
  data() {
    return {
      commenting: false
    };
  },
  computed: {
    cmt() {
      return this.CommentData.cmt;
    },
    fromUser() {
      return this.CommentData.fromUser;
    },
    userNickname() {
      if (this.CommentData.user) {
        return this.CommentData.user.userNickname;
      }
      return "";
    }
  },
  methods: {
    sendCmt(cmt) {
      var cmtobj = {
        cmtContent: cmt,
        touserId: this.CommentData.fromUser.userId
      };
      alert(this.CommentData.fromUser.userId);
      this.$emit("sendChildCmt", cmtobj);
    }
  }
};
</script>
<style scoped>
.clearfix {
  zoom: 1;
}
.clearfix:after {
  content: "";
  display: block;
  visibility: hidden;
  height: 0;
  clear: both;
}
.superAvatar {
  float: left;
}
.childAvatar {
  float: left;
}
.userNickname {
  font-size: 14px;
  margin-top: 50px;
}
.superComment {
  float: left;
  margin-left: 15px;
  margin-top: 12px;
  text-align: left;
}
.superCommentContent {
  margin-top: 10px;
  width: 400px;
}
.btnCmt {
  float: right;
  margin-top: -6px;
}
.at {
  color: royalblue;
  margin-right: 10px;
}
</style>
