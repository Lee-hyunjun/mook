<template>
  <div class="Project_more">
    <iframe :src=url title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
import data from '@/assets/data.js';
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      url:data.state.url,
    };
  },

}
</script>

<style lang="scss">
  .Project_more{
    width: 80vw;
    height: 45vw;
    margin: 0 auto;
    padding-top: 3vw;
    >iframe{
      width: 100%;
      height: 100%;
    }
  }

</style>
