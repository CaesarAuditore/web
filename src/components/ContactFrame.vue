<template>
  <div class="clearfix" :class="ContactFrameData.direction">
    <div class="avatar">
      <el-avatar :size="45" :src="ContactUserConfig.avatarUrl" />
    </div>
    <div class="frame">
      <span class="userNickname">{{ ContactUserConfig.userNickname }}</span>
      <div class="frameContent">
        <div class="triangleOutside"></div>
        <div class="triangleInside"></div>
        <span class="content">{{ ContactFrameData.contactContent }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["ContactFrameData", "ContactUserConfig"],
  data() {
    return {};
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
.frameContent {
  width: max-content;
  max-width: 240px;
  min-height: 30px;
  position: relative;
  padding: 6px 10px 0 10px;
  border: 1px solid gray;
}

.triangleOutside {
  width: 0;
  height: 0;
  border: 8px solid transparent;

  position: absolute;
}
.triangleInside {
  width: 0;
  height: 0;
  border: 7px solid transparent;

  position: absolute;
}
.content {
  font-size: 16px;
}
.userNickname {
  font-size: 12px;
}

.left .frame {
  float: left;
  margin-left: 20px;
  text-align: left;
}
.left .frameContent {
  border-radius: 0 6px 6px 6px;
  background-color: white;
}
.left .avatar {
  float: left;
}
.left .triangleOutside {
  border-right-color: gray;
  transform: rotate(135deg);
  top: -9px;
  left: -8px;
}
.left .triangleInside {
  border-right-color: white;
  transform: rotate(135deg);
  top: -7px;
  left: -6px;
}

.right .frame {
  float: right;
  margin-right: 20px;
  text-align: right;
}
.right .avatar {
  float: right;
}
.right .triangleOutside {
  border-right-color: gray;
  transform: rotate(45deg);
  top: -9px;
  right: -8px;
}
.right .triangleInside {
  border-right-color: tomato;
  transform: rotate(45deg);
  top: -7px;
  right: -6px;
}
.right .frameContent {
  border-radius: 6px 0 6px 6px;
  background-color: tomato;
}
</style>
