import Vue from 'vue'
import Vuex from 'vuex'
import MsgService from './services/Msg.service.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msgs: null,
    filter: '',
  },
  mutations: {
    setMsgs(state, msgs) {
      state.msgs = msgs
    },
    setFilter(state, filter){
      state.filter = filter
    }
  },
  getters: {
    msgs(state) {
      return state.msgs
    }
  },
  actions: {
    remove(context, msgId){
      MsgService.remove(msgId).then(() => {
        context.dispatch('query')
      })
    },
    addMsg(context, msg) {
      MsgService.addMsg(msg).then(() => {
        context.dispatch('query')
      })
    },
    query(context, filter) {
      context.commit('setFilter', filter);
      var filter = context.state.filter;
      MsgService.query(filter).then(msgs => {
        context.commit('setMsgs', msgs)
      })
    },
  },
})
