<template>
  <div class="msg">
    <div class="msg-img">
      <img :src="msg.img" alt>
    </div>
    <div class="msg-txt">
      <p class="email-p">{{msg.email}}</p>
      <p class="msg-p">{{msg.msg}}</p>
    </div>
    <i @click="remove" class="far fa-trash-alt"></i>
  </div>
</template>

<script>
export default {
  name: "Msg",
  props: {
    msg: Object
  },
  methods: {
    remove(){
      this.$emit('remove', this.msg._id)
      
    }
  },
};
</script>

