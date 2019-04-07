<template>
  <div class="msgs">
    <div class="msg-list">
      <Msg v-for="(msg,index) in msgs" 
          :msg="msg" 
          :key="index" 
          @remove="remove"
      ></Msg>
    </div>
  </div>
</template>

<script>
import Msg from "./Msg";

export default {
  name: "MsgList",
  props: {
    msgs: Array
  },
  components: {
    Msg
  },
  methods: {
    remove(msgId) {
      this.$emit("remove", msgId);
    }
  }
};
</script>
