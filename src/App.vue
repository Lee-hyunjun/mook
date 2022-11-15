<template>
  <div >
    <Side></Side>
    <router-view @setProjectUrl="setProjectUrl"  />
  </div>
</template>

<script>

import Side from '@/components/SideMenu.vue';
// import bgPattern from './assets/backgroundPattern.png';

export default {
  name: 'App',
  components: {
    Side
  },

  data(){
    return{
    }
  },

  methods:{
   
  }
}
</script>

<style lang="scss">
  *{
    font-family: GmarketSansTTFBold;
  }
  
  @font-face{
    src: url('https://cdn.jsdelivr.net/gh/Lee-hyunjun/mook@main/src/assets/fonts/GmarketSansTTF/GmarketSansTTFMedium.ttf');
    font-family: 'GmarketSansTTFMedium';
  }

  @font-face{
    src: url('https://cdn.jsdelivr.net/gh/Lee-hyunjun/mook@main/src/assets/fonts/GmarketSansTTF/GmarketSansTTFBold.ttf');
    font-family: 'GmarketSansTTFBold';
  }


  @font-face{
    src:url('https://cdn.jsdelivr.net/gh/Lee-hyunjun/mook@main/src/assets/fonts/BebasNeue-Regular.ttf');
    font-family: 'BebasNeue-Regular';
  }


  
  body{
    background: #141414;
  }
  // body::before{
  //   content: " ";
  //   background-image: url('./assets/backgroundPattern.png');
  //   background-size: cover;
  //   opacity: 0.2;
  //   width: 100vw;
  //   height: 140vh;
  //   position: absolute;
  //   top: -18vh;
  //   z-index: -1;
  // }
  *{
    margin: 0;
    padding: 0;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    
  }  
  *::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  body{
    position: relative;
  }
</style>
