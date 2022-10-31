import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Main from './mainPage.vue';
import Mobile from './Mobile.vue';

Vue.config.productionTip = false

Vue.use(VueRouter); // router 기능 확장 선언

const routes = [
    // 이곳에 router 를 등록할 것 입니다.
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/index',
      name: 'mobile',
      component: Mobile
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