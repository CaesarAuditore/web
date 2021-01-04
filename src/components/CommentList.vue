<template>
  <div class="commentList">
    <Comment
      v-for="(comment, index) in comments"
      :key="index"
      class="comment"
      :CommentData="comment"
      @sendChildCmt="sendChildCmt"
    />
  </div>
</template>
<script>
import Comment from "@/components/Comment.vue";
export default {
  props: ["comments"],
  components: { Comment },
  computed: {},
  methods: {
    sendChildCmt(cmt) {
      this.$emit("sendChildCmt", cmt);
    }
  }
};
</script>
<style scoped>
.commentList {
  padding-top: 10px;
  background-color: gainsboro;
}
.comment {
  margin-left: 10px;
  margin-top: 10px;
}
</style>
