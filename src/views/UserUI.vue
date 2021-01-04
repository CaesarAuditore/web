<template>
  <el-container>
    <el-header class="headTitle"><b>真理报</b></el-header>
    <el-header
      ><b class="headTitle"><NavMenuTop :items="nav_top_items"/></b
    ></el-header>
    <el-main>
      <UserContent class="middle" />
    </el-main>
  </el-container>
</template>

<script>
import UserContent from "@/views/UserContent.vue";
import NavMenuTop from "@/components/NavMenuTop.vue";
export default {
  name: "UserUI",
  components: { UserContent, NavMenuTop },
  data() {
    return {
      nav_top_items: [
        { text: "主页", url: "/" },
        { text: "热榜", url: "/hatmsg" },
        { text: "动态", url: "/development" },
        { text: "发表动态", url: "/SendMsg" },
        { text: "私信", url: "/contact" },
        { text: "个人中心", url: "/userinfo" }
      ]
    };
  }
};
</script>

<style scoped>
.headTitle {
  font-size: 50px;
  color: white;
  background-color: firebrick;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}
.middle {
  width: 500px;
  margin: auto;
}
</style>
