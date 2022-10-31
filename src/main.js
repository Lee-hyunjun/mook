import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';


import Home from './components/Home/VideoScroll.vue';

Vue.config.productionTip = false

Vue.use(VueRouter); // router 기능 확장 선언

const routes = [
    // 이곳에 router 를 등록할 것 입니다.
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },



];

// router 객체생성
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

new Vue({
  render: h => h(App),
  router // router 추가
}).$mount('#app')

export default router