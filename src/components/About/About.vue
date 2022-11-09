<template>
  <div class="About">
    <div id="item1">
      <img src="https://cdn.jsdelivr.net/gh/Lee-hyunjun/mook@main/src/assets/about/content1.png" class="img"/>
      <div class="text">
        <p class="aboutUs"></p>
        <span></span>
      </div>
    </div>

    <div id="item2">
      <img src="https://cdn.jsdelivr.net/gh/Lee-hyunjun/mook@main/src/assets/about/content2.png" class="img"/>
      <div class="text">
        <p class="aboutUs"></p>
        <span></span>
      </div>
    </div>

    <img src="https://cdn.jsdelivr.net/gh/Lee-hyunjun/mook@main/src/assets/about/cmpyGroup.png" id="item3" />
    <img src="https://cdn.jsdelivr.net/gh/Lee-hyunjun/mook@main/src/assets/about/content3.png" id="item4" />
    <img src="https://cdn.jsdelivr.net/gh/Lee-hyunjun/mook@main/src/assets/about/content4.png" id="item5" />

    <!-- <div id="item1">
      <h1>WOW CITY POP<br></h1>
      <img class="img"></img>
    </div> -->
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  data() {
    return {

    };
  },

}
</script>

<style lang="scss">



  @keyframes fadeInLeft {
      0% {
          opacity: 0;
          transform: translate3d(50%, 0, 0);
      }

      30% {
          opacity: 0;
          transform: translate3d(30%, 0, 0);
      }

      
      60% {
          opacity: 0;
          transform: translate3d(20%, 0, 0);
      }

      to {
          opacity: 1;
          transform: translateZ(0);
      }
  }

  // #item1{
  //     animation: fadeInLeft 1s;
  // }

   @keyframes fadeInRight {
        0% {
            opacity: 0;
            transform: translate3d(-50%, 0, 0);
        }

        30% {
            opacity: 0;
            transform: translate3d(-30%, 0, 0);
        }

        
        60% {
            opacity: 0;
            transform: translate3d(-20%, 0, 0);
        }

        to {
            opacity: 1;
            transform: translateZ(0);
        }
    }




  .About{
    margin: 0 auto;
    margin-top: 8vh;
    width: 80%;
    padding-bottom: 10vh;
    position: relative;
    
    .whatIsThis{
      text-align: center;
      position: absolute;
      color: transparent;
      opacity: .15;
      -webkit-text-stroke: 5px rgb(110, 110, 110);
      font-size: 8vw;
      height: 100%;
      overflow: hidden;
      left: -10vw;
      top: -10vh;
    }

    #item1{
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      width: 100%;
      height: auto;
      z-index: 1;
      position: relative;
      margin-bottom: 5vh;
      animation: fadeInLeft 2s;
      >.img{
        display: block;
        width: 70%;
        height: auto;
      }
    }
    #item2{
      width: 100%;
      height: auto;
      z-index: 1;
      position: relative;
      animation: fadeInRight 2s;
      margin-bottom: 5vh;
      >.img{
        display: block;
        width: 70%;
        height: auto;
      }
    }

    #item3{
      display: block;
      position: relative;
      z-index: 1;
      margin: 0 auto;
      width: 56vw;
      height: auto;
    }

    
    #item4{
      display: block;
      position: relative;
      z-index: 1;
      margin-top: 10vh;
      width: 100%;
      height: auto;
    }

    #item5{
      display: block;
      position: relative;
      z-index: 1;
      margin-top: 10vh;
      width: 100%;
      height: auto;
    }



  }

  .About::before{
    content: " ";
    background-image: url('https://cdn.jsdelivr.net/gh/Lee-hyunjun/mook@main/src/assets/backgroundPattern.png');
    background-size: cover;
    opacity: 0.2;
    width: 100vw;
    height: 103%;
    position: absolute;
    top: -18vh;
    left: -10vw
  }

</style>
