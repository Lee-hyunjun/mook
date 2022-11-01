<template>
  <div>
    <Side></Side>
    <router-view />
  </div>
</template>

<script>

import Side from './components/SideMenu.vue';

export default {
  name: 'App',
  components: {
    Side
  }
}
</script>

<style lang="scss">
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
