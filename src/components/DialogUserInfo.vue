<template>
  <el-dialog
    title="编辑个人资料"
    width="600px"
    :visible.sync="dialogUserInfoVisible"
    :before-close="closeEdit"
  >
    <el-form
      label-width="80px"
      style="max-width:500px"
      :model="formModel"
      :rules="rules"
      ref="form"
    >
      <el-form-item :key="index" label="用户名" label-position="right">
        <InputSimple
          :config="usernameConfig"
          v-model="formModel.userNickname"
        />
      </el-form-item>
      <el-form-item :key="index" label="性别" label-position="right">
        <InputRadio
          :configs="SexConfig"
          v-model="formModel.userinfo.userinfoGender"
        />
      </el-form-item>

      <el-form-item :key="index" label="邮箱" label-position="right">
        <InputSimple :config="emailConfig" v-model="formModel.userEmail" />
      </el-form-item>

      <el-form-item :key="index" label="电话" label-position="right">
        <InputSimple
          :config="phoneConfig"
          v-model="formModel.userinfo.userinfoTel"
        />
      </el-form-item>

      <el-form-item :key="index" label="生日" label-position="right">
        <InputDate v-model="formModel.userinfo.userinfoBirthday" />
      </el-form-item>

      <el-form-item :key="index" label="职业" label-position="right">
        <InputSimple
          :config="professionConfig"
          v-model="formModel.userinfo.userinfoProfession"
        />
      </el-form-item>

      <el-form-item :key="index" label="星座" label-position="right">
        <InputSelect
          :optionData="starSignOptionData"
          v-model="formModel.userinfo.userinfoStartsign"
        />
      </el-form-item>

      <el-form-item :key="index" label="地址" label-position="right">
        <InputSimple
          :config="addressConfig"
          v-model="formModel.userinfo.userinfoAddress"
        />
      </el-form-item>
      <el-form-item :key="index" label="简介" label-position="right">
        <InputSimple
          :config="remarkConfig"
          v-model="formModel.userinfo.userinfoRemark"
        />
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button @click="closeEdit()">取 消</el-button>
      <el-button type="primary" @click="submitEdit()">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import InputSimple from "@/components/InputForm/InputSimple.vue"; //普通
import InputSelect from "@/components/InputForm/InputSelect.vue"; //下拉框
import InputRadio from "@/components/InputForm/InputRadio.vue";
import InputDate from "@/components/InputForm/InputDate.vue"; //日期
export default {
  props: ["formModel", "dialogUserInfoVisible"],
  components: {
    InputSimple,
    InputSelect,
    InputRadio,
    InputDate
  },
  data() {
    return {
      usernameConfig: { type: "InputSimple", label: "请输入用户名" },
      professionConfig: { type: "InputSimple", label: "职业" },
      emailConfig: { type: "InputEmail" },
      SexConfig: [
        { value: "男", label: "男" },
        { value: "女", label: "女" }
      ],
      phoneConfig: { type: "InputPhone" },
      starSignOptionData: [
        "金牛",
        "双子",
        "双鱼",
        "处女",
        "魔羯",
        "巨蟹",
        "水瓶",
        "天秤",
        "白羊",
        "射手",
        "天蝎",
        "狮子"
      ],
      addressConfig: { type: "InputSimple", label: "请输入地址" },
      remarkConfig: { type: "InputArea" }
    };
  },
  methods: {
    submitEdit() {
      this.$emit("updateUserinfo", this.formModel);
      this.$emit("update:dialogUserInfoVisible", false);
    },
    closeEdit() {
      this.$emit("update:dialogUserInfoVisible", false);
    }
  }
};
</script>
