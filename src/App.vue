<template>
  <router-view style="
    display: block;
" />
</template>

<script>

export default {
  name: 'App',
  components: {

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
</style>
