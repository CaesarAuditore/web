<template>
  <el-card class="box-card">
    <div slot="header" class="header clearfix">
      <router-link :to="{ name: 'OtherUserInfo', params: { id: msg.userId } }">
        <el-avatar :size="50" :src="user.userinfo.userinfoProfile" />
      </router-link>
      <div class="userNickname">
        <span>{{ user.userNickname }}</span>
      </div>
      <i
        class="btnCollect el-icon-toilet-paper"
        :class="collectClass"
        @mouseover="CollectOver"
        @mouseout="CollectOut"
        @click="CollectCilck"
      />
      <i
        class="btnThumb el-icon-toilet-paper"
        :class="thumbClass"
        @mouseover="thumbOver"
        @mouseout="thumbOut"
        @click="thumbCilck"
      />
    </div>
    <router-link
      :to="{
        name: 'SingleDevelopment',
        params: { id: msg.msgId, msgVO: msgVO }
      }"
      >{{ msg.msgContent }}</router-link
    >
    <div>
      <router-link
        v-for="(url, index) in imgsUrlNumLimit"
        :key="index"
        :style="imgStyle"
        :to="{
          name: 'SingleDevelopment',
          params: { id: msg.msgId, msgVO: msgVO }
        }"
        class="img"
      >
        <el-image :src="url" :style="imgStyle" fit="cover"
      /></router-link>
      <router-link
        :style="imgStyle"
        :to="{
          name: 'SingleDevelopment',
          params: { id: msg.msgId, msgVO: msgVO }
        }"
        class="img"
        v-if="imgsUrl.length > 9"
      >
        <div :style="imgStyle" class="imgLast">
          <i class="el-icon-circle-plus-outline addIcon" />
          <el-image :src="imgsUrl[8]" :style="imgStyle" fit="cover" />
        </div>
      </router-link>
    </div>
  </el-card>
</template>

<script>
export default {
  props: ["msgVO"],
  data() {
    return {
      collectClass:
        this.msgVO.collectId == -1 ? "el-icon-star-off" : "el-icon-star-on",
      thumbClass: this.msgVO.thumbId == -1 ? "thumbout" : "thumbover"
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
      return pics.map(item => {
        return item.picUrl;
      });
    },
    imgsUrlNumLimit() {
      var imgsUrl = this.imgsUrl;
      var imgNum = imgsUrl.length;
      if (imgNum > 9) {
        return imgsUrl.slice(0, 8);
      }
      return imgsUrl;
    },
    imgStyle() {
      var imgNum = this.imgsUrl.length;
      var imgLen;
      if (imgNum < 4) {
        imgLen = 400 / imgNum;
      } else {
        imgLen = 400 / 3;
      }
      return {
        width: imgLen + "px",
        height: imgLen + "px"
      };
    }
  },
  methods: {
    CollectOver() {
      this.collectClass = "el-icon-star-on";
    },
    CollectOut() {
      this.collectClass =
        this.msgVO.collectId == -1 ? "el-icon-star-off" : "el-icon-star-on";
    },
    CollectCilck() {
      var collectId = this.msgVO.collectId;
      if (collectId == -1) {
        var msgId = this.msg.msgId;
        this.putRequest("/PravdaWeb/user/collect/add/" + msgId).then(resp => {
          if (resp.status == 200) {
            this.$notify({
              title: "成功",
              message: resp.msg,
              type: "success"
            });
            this.collectClass = "el-icon-star-on";
            this.msgVO.collectId = resp.obj.colId;
          } else {
            this.$notify.error({
              title: "错误",
              message: resp.msg
            });
          }
        });
        return;
      }
      this.putRequest("/PravdaWeb/user/collect/" + collectId).then(resp => {
        if (resp.status == 200) {
          this.$notify({
            title: "成功",
            message: resp.msg,
            type: "success"
          });
          this.collectClass = "el-icon-star-off";
          this.msgVO.collectId = -1;
        } else {
          this.$notify.error({
            title: "错误",
            message: resp.msg
          });
        }
      });
    },
    thumbOver() {
      this.thumbClass = "thumbover";
    },
    thumbOut() {
      this.thumbClass = this.msgVO.thumbId == -1 ? "thumbout" : "thumbover";
    },
    thumbCilck() {
      var thumbId = this.msgVO.thumbId;
      if (thumbId == -1) {
        var msgId = this.msg.msgId;
        this.putRequest("/PravdaWeb/user/thumb/add/" + msgId).then(resp => {
          if (resp.status == 200) {
            this.$notify({
              title: "成功",
              message: resp.msg,
              type: "success"
            });
            this.thumbClass = "thumbover";
            this.msgVO.thumbId = resp.obj.tbId;
          } else {
            this.$notify.error({
              title: "错误",
              message: resp.msg
            });
          }
        });
        return;
      }
      this.putRequest("/PravdaWeb/user/thumb/" + thumbId).then(resp => {
        if (resp.status == 200) {
          this.$notify({
            title: "成功",
            message: resp.msg,
            type: "success"
          });
          this.thumbClass = "thumbout";
          this.msgVO.thumbId = -1;
        } else {
          this.$notify.error({
            title: "错误",
            message: resp.msg
          });
        }
      });
    }
  }
};
</script>

<style scoped>
a {
  text-decoration-line: none;
  color: #000;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  text-align: left;
}
>>> .el-card__header {
  padding: 8px 15px;
}
.el-avatar {
  float: left;
  margin-left: 0;
}
.el-button {
  margin-right: 6px;
}
.userNickname {
  float: left;
  margin: 15px;
  font-size: 20px;
}
.img {
  float: left;
  margin: 5px;
}
.img:hover {
  filter: brightness(60%);
}
.imgLast {
  float: left;
  position: relative;
}

.imgLast .el-image {
  filter: brightness(50%);
  margin: 0;
  z-index: 0;
}
.addIcon {
  position: absolute;
  left: 40px;
  top: 40px;
  font-size: 50px;
  color: white;
  z-index: 50;
}
.btnCollect {
  font-size: 40px;
  float: right;
  margin-top: 6px;
  margin-right: 15px;
}
.el-icon-star-on {
  color: tomato;
  cursor: pointer;
}
.btnThumb {
  font-size: 40px;
  float: right;
  margin-top: 6px;
  margin-right: 15px;
}
.el-icon-toilet-paper {
  cursor: pointer;
}
.thumbout {
  color: #000;
}
.thumbover {
  color: tomato;
}
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
</style>
