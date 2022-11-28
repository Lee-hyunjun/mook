<template>
  <div class="Project_more">
    <iframe :src=url title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="Prodject_texts">
      <h1>TEST-TITLE</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
      <p>Odio consequuntur unde beatae earum nostrum magni sequi fugiat recusandae, labore maiores quasi doloremque rerum autem a eos, eligendi ex sit nisi</p>
      <span> earum nostrum magni sequi fugiat recusandae, labore maiores quasi doloremque rerum autem a eos, eligendi</span>
    </div>
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
    color: white;
    >iframe{
      width: 100%;
      height: 95%;
    }
    .Prodject_texts{
      padding-top: 3vh;
      display: block;
      border-top: 2px solid rgb(72, 70, 70);
      // border-bottom: 2px solid rgba(46 ,46, 46  ,50%);
      margin: 6vh 0 7vh 0;
      margin-bottom: 100px;
      width: 100%;
      height: 41vh;
      >h1{
        font-family: 'BebasNeue-Regular' !important;
        font-size: 2.5vw;
        margin-bottom: 4vh;
      }
      >p{
        font-family: 'BebasNeue-Regular' !important;
        font-size: 1.3vw;
        width: 60%;
        margin-bottom: 2vh ;
      }
      >span{
        font-family: 'BebasNeue-Regular' !important;
        font-size: 0.8vw;
        width: 25%;
        margin-top: 5vh ;
        display: block;
        opacity: .7;
      }
    }
  }

</style>
