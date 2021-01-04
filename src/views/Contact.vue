<template>
  <el-row>
    <el-col :span="leftSpan">
      <ContactList
        :ContactListData="ContactListData"
        :showNickname="!Contacting"
        @openList="openList"
        @contact="contact"
      />
    </el-col>
    <el-col :span="rightSpan">
      <div class="contactWindow">
        <ContactWindow
          class="contactMsgWindow"
          :ContactFrameData="ContactFrameData"
          :ContactUserConfig="ContactUserConfig"
          :avatarUrl="avatarUrl"
        />
        <ContactInput class="contactInput" @sendMsg="sendMsg" />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import ContactWindow from "@/components/ContactWindow.vue";
import ContactList from "@/components/ContactList.vue";
import ContactInput from "@/components/ContactInput.vue";
export default {
  components: { ContactWindow, ContactList, ContactInput },
  data() {
    return {
      avatarUrl:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      Contacting: false,
      curUserId: -1,
      ContactListData: [],
      ContactFrameData: [],
      ContactUserConfig: {
        User: { avatarUrl: "", userNickname: "" },
        From: { avatarUrl: "", userNickname: "" }
      }
    };
  },
  computed: {
    leftSpan() {
      return this.Contacting ? 3 : 24;
    },
    rightSpan() {
      return this.Contacting ? 21 : 0;
    }
  },
  methods: {
    openList() {
      this.Contacting = false;
    },
    contact(index) {
      this.curUserId = -1;
      this.ContactFrameData = [];
      var user = this.ContactListData[index];
      var userId = user.userId;
      this.ContactUserConfig.User.avatarUrl = user.userinfo.userinfoProfile;
      this.ContactUserConfig.User.userNickname = user.userinfo.userNickname;
      this.getRequest(
        "/PravdaWeb/user/contact/getContactsByUsersId/" + userId
      ).then(resp => {
        resp.forEach(item => {
          if (item.touserId == userId) {
            item.direction = "right";
          } else {
            item.direction = "left";
          }
        });
        this.curUserId = userId;
        this.ContactFrameData = resp;
      });
      this.Contacting = true;
    },
    sendMsg(msg) {
      var curUserId = this.curUserId;
      if (curUserId == -1) {
        return;
      }
      this.postRequest("/PravdaWeb/user/contact", {
        touserId: curUserId,
        contactContent: msg
      }).then(resp => {
        if (resp.status == 200) {
          var item = {};
          item.direction = "right";
          item.contactContent = msg;

          this.ContactFrameData.push(item);
        }
      });
    }
  },
  mounted() {
    this.getRequest("/PravdaWeb/user/contact/getContactUsersByUserId/").then(
      resp => {
        this.ContactListData = resp;
      }
    );
    this.getRequest("/PravdaWeb/user/userinfo/").then(resp => {
      this.ContactUserConfig.From.avatarUrl = resp.userinfo.userinfoProfile;
      this.ContactUserConfig.From.userNickname = resp.userNickname;
    });
  }
};
</script>

<style scoped>
.contactWindow {
  width: 100%;
  height: 500px;
  position: relative;
}
.contactMsgWindow {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 96px;
  overflow: auto;
  background-color: honeydew;
}
.contactInput {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>
