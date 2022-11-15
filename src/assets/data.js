import Vue from 'vue'
import Vuex from 'vuex'
import Vue2Editor from "vue2-editor";
import Notifications from 'vue-notification'


Vue.use(Vuex)
Vue.use(Vue2Editor);
Vue.use(Notifications)
export default new Vuex.Store({
    state: {
      url:null,
    },
   
})