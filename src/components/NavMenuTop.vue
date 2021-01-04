<template>
  <el-menu
    :default-active="routePath"
    mode="horizontal"
    background-color="#a55"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-menu-item
      v-for="(item, index) in items"
      :key="index"
      :index="item.url"
      :route="item.url"
    >
      <span slot="title">{{ item.text }}</span>
    </el-menu-item>
    <el-menu-item v-if="!isLogin" index="/login">
      <span slot="title">登录</span>
    </el-menu-item>
    <el-menu-item v-if="!isLogin" index="/register">
      <span slot="title">注册</span>
    </el-menu-item>
    <el-menu-item v-if="isLogin" @click="exit" index="/login">
      <span slot="title">退出账号</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      isLogin: false
    };
  },
  methods: {
    exit() {
      this.PostMapping("/PravdaWeb/user/user/loginout");
      sessionStorage.setItem("isLogin", false);
    }
  },
  mounted() {
    var isLogin = sessionStorage.getItem("isLogin");
    if (isLogin == undefined) {
      return;
    }
    this.isLogin = isLogin;
  }
};
</script>

<style scoped>
.el-menu-item {
  width: 200px;
  border-right: 1px solid #eeeeee;
}
.el-menu--horizontal {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
span {
  font-size: 20px;
}
</style>
