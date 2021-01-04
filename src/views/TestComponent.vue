<template>
  <div>
    {{ FUCK }}
    {{ a }}
    <el-input @input="model" :value="test[0].data" />
    <button class="btn" @click="change"><span>test</span></button>
    <button class="btn" @click="change2"><span>test2</span></button>
    <button class="btn" @click="change3"><span>test3</span></button>
    <button class="btn" @click="change4"><span>test4</span></button>
  </div>
</template>
<script>
export default {
  props: ["FUCK", "FUCKjson", "FUCKval", "a"],
  data() {
    return {};
  },
  computed: {
    test() {
      return this.FUCK;
    },
    test2() {
      return this.FUCKjson;
    }
  },
  methods: {
    model(val) {
      this.FUCK[0].data = val;
    },
    change() {
      this.test[0].data = "wdnmd";
    },
    change2() {
      this.test[0] = { data: "RUA!!!" };
    },
    change3() {
      this.test2.data = "aaaaaa233333";
    },
    change4() {
      this.FUCKval = "FUCK!!!";
    }
  }
};
</script>
