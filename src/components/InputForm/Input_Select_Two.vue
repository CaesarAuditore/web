<template>
  <div>
    <el-select
      v-model="newValue1"
      filterable
      placeholder="请选择"
      @change="change(value)"
    >
      <el-option
        v-for="(item, index) in optionData"
        :key="index"
        :value="item[0]"
      >
        <span style="float: left">{{ item[1] }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{
          item[0]
        }}</span>
      </el-option>
    </el-select>
    <el-select v-model="newValue2" filterable placeholder="请选择">
      <el-option
        v-for="(item, index) in optionData"
        :key="index"
        :value="item[0]"
      >
        <span style="float: left">{{ item[1] }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{
          item[0]
        }}</span>
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  props: ["config", "value", "optionData"],
  model: {
    prop: "checked",
    event: "change"
  },
  computed: {
    newValue1: {
      get: function() {
        return this.value;
      },
      set: function(value) {
        this.$emit("input", value);
      }
    },
    newValue2: {
      get: function() {
        return this.value;
      },
      set: function(value) {
        this.$emit("input", value);
      }
    }
  },
  methods: {
    change(value) {
      this.axios
        .get("/PravdaWeb/teacher/score/queryCourseOfTeacher", {
          params: { cno: value }
        })
        .then(function(resp) {
          var data = resp.data;
          alert(data);
          // var p=[["classNo","classNumber"],["cno","cname"]];
          // var option={};
          // p.forEach(i=>{
          //     var ret=data.map(item => {
          //         var d=i.map(j=>{
          //             return item[j];
          //         })
          //         return d;
          //     })
          //     option[i[0]]=ret;
          // })
          // for(var i in option){
          //     self.$set(self.optionData,i,option[i]);
          // }
        });
    }
  }
};
</script>
