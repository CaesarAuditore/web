import Vue from "vue";
import VueRouter from "vue-router";
import Register from "@/views/Register.vue";
import Test from "@/views/Test.vue";
import Login from "@/views/Login.vue";
import UserUI from "@/views/UserUI.vue";
import Recommend from "@/views/Recommend.vue";
import Development from "@/views/Development.vue";
import HatMsg from "@/views/HatMsg.vue";
import SingleDevelopment from "@/views/SingleDevelopment.vue";
import SendMsgWindow from "@/views/SendMsgWindow.vue";
import Contact from "@/views/Contact.vue";
import UserInfo from "@/views/UserInfo.vue";
import OtherUserInfo from "@/views/OtherUserInfo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/test",
    name: "Test",
    component: Test
  },
  {
    path: "/",
    name: "Home",
    component: UserUI,
    children: [
      {
        path: "/",
        name: "Recommend",
        component: Recommend
      },
      {
        path: "development",
        name: "Development",
        component: Development
      },
      {
        path: "hatmsg",
        name: "HatMsg",
        component: HatMsg
      },
      {
        path: "contact",
        name: "Contact",
        component: Contact
      },
      {
        path: "userinfo",
        name: "UserInfo",
        component: UserInfo
      },
      {
        path: "otheruserinfo/:id",
        name: "OtherUserInfo",
        component: OtherUserInfo
      },
      {
        path: "singledev/:id/:msgVO",
        name: "SingleDevelopment",
        component: SingleDevelopment
      },
      {
        path: "SendMsg",
        name: "SendMsgWindow",
        component: SendMsgWindow
      },
      {
        path: "collect",
        name: "Collect",
        component: UserInfo
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
