import Vue from 'vue';
import App from '@/App.vue';
import VueRouter from 'vue-router';


import Home from '@/components/Home/VideoScroll.vue';
import About from '@/components/About/About.vue';
import Project from '@/components/Project/Project.vue';
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

    {
      path: '/About',
      name: 'About',
      component: About
    },

    {
      path: '/Project',
      name: 'Project',
      component: Project
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
