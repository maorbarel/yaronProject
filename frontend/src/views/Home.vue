<template>
  <section>
    <div class="main">
      <div class="container">
        <form @submit.prevent="addMsg">
          <input v-model="newMsg.email" type="email" placeholder="Email" required>
          <textarea v-model="newMsg.msg" placeholder="Message" cols="30" rows="10" required></textarea>
          <button>Submit</button>
        </form>

        <div class="filter">
          <input @keyup="setFilter" v-model="filter" type="text" placeholder="Filter">
        </div>

        <MsgList :msgs="msgs" @remove="remove"/>
      </div>
    </div>
  </section>
</template>

<script>
import MsgList from "../components/MsgList";

export default {
  name: "home",
  data() {
    return {
      filter: "",
      newMsg: {
        email: "",
        msg: ""
      }
    };
  },
  components: {
    MsgList
  },
  computed: {
    msgs() {
      return this.$store.getters.msgs;
    }
  },
  methods: {
    addMsg() {
      var newMsg = JSON.parse(JSON.stringify(this.newMsg));
      this.$store.dispatch("addMsg", newMsg);
      this.newMsg.email = "";
      this.newMsg.msg = "";
    },
    setFilter() {
      this.$store.dispatch("query", this.filter);
    },
    remove(msgId) {
      this.$store.dispatch("remove", msgId);
    }
  },
  created() {
    this.$store.dispatch("query", this.filter);
  }
};
</script>


