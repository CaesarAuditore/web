<template>
  <div>
    <ContactFrame
      v-for="(data, index) in ContactFrameData"
      class="contactFrame"
      :key="index"
      :ContactFrameData="data"
      :ContactUserConfig="getUserConfig(data.direction)"
    />
  </div>
</template>
<script>
import ContactFrame from "@/components/ContactFrame.vue";
export default {
  props: ["avatarUrl", "ContactFrameData", "ContactUserConfig"],
  components: { ContactFrame },
  data() {
    return {};
  },
  methods: {
    getUserConfig(dir) {
      if (dir == "left") {
        return this.ContactUserConfig.User;
      }
      return this.ContactUserConfig.From;
    }
  }
};
</script>
<style scoped>
.contactFrame {
  margin: 10px;
}
</style>
