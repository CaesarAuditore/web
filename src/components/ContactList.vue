<template>
  <ul class="msgList">
    <li>
      <el-button
        class="btnOpenList"
        size="mini"
        type="success"
        plain
        v-show="!showNickname"
        @click="$emit('openList')"
      >
        展开
      </el-button>
    </li>
    <li v-for="(data, index) in ContactListData" :key="index">
      <div class="msg" @click="$emit('contact', index)">
        <el-avatar :size="50" :src="data.userinfo.userinfoProfile" />
        <b class="userNickname" v-show="showNickname">{{
          data.userNickname
        }}</b>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["ContactListData", "showNickname"]
};
</script>
<style scoped>
.el-avatar {
  position: absolute;
  left: 8px;
  top: 8px;
}
.msgList {
  list-style: none;
  overflow-y: auto;
  margin: 0;
  padding: 0;
}
.msg {
  width: 100%;
  height: 70px;
  position: relative;
  text-align: left;
  cursor: pointer;
  background-color: white;
}
.msg:hover {
  filter: brightness(80%);
  transition: 400ms;
}
.userNickname {
  position: absolute;
  left: 70px;
  top: 20px;
  font-size: 18px;
}
.btnOpenList {
  border-radius: 0;
  border: 0;
  width: 100%;
}
</style>
