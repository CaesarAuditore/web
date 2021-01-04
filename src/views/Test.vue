<template>
  <div>
    {{ test }}
    <TestComponent
      :FUCK="test"
      :FUCKjson="test[0]"
      :FUCKval="test[0].data"
      :a="a"
    />
  </div>
</template>
<script>
import TestComponent from "@/views/TestComponent.vue";
export default {
  components: { TestComponent },
  data() {
    return {
      a: "dd",
      test: [{ data: "aa12aa" }]
    };
  }
};
</script>
