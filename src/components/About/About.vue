<template>
  <div class="About">
    <div class="whatIsThis">
      W<br>
      H<br>
      A<br>
      T<br>
      I<br>
      S<br> 
      T<br>
      H<br>
      I<br>
      S
    </div>

    <div id="item1">
      <div class="img"></div>
      <div class="text">
        <p class="aboutUs"></p>
        <span></span>
      </div>
    </div>

    <div id="item2">
      <div class="img"></div>
      <div class="text">
        <p class="aboutUs"></p>
        <span></span>
      </div>
    </div>

    <div id="item3">
    </div>

    <!-- <div id="item1">
      <h1>WOW CITY POP<br></h1>
      <div class="img"></div>
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
          opacity: 2;
          transform: translateZ(0);
      }
  }

  #item1{
      animation: fadeInLeft 1s;
  }

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
            opacity: 2;
            transform: translateZ(0);
        }
    }




  .About{
    margin: 0 auto;
    margin-top: 8vh;
    width: 80%;
    height: 92vh;
    padding-bottom: 30vh;
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
      height: 80vh;
      z-index: 1;
      position: relative;
      >.img{
        width: 20%;
        height: 80%;
        background-size: cover;
        background-image: url("https://cdn.jsdelivr.net/gh/Lee-hyunjun/mook@main/src/assets/about/content1.png");
      }
    }
    #item2{
      width: 100%;
      height: 80vh;
      z-index: 1;
      position: relative;
      >.img{
        width: 30%;
        height: 85%;
        background-size: cover;
        background-image: url("https://cdn.jsdelivr.net/gh/Lee-hyunjun/mook@main/src/assets/about/content2.png");
      }
    }

    #item3{
      width: 100%;
      height: 88vh;
      background-size: cover;
      background-image: url("https://cdn.jsdelivr.net/gh/Lee-hyunjun/mook@main/src/assets/about/cmpyGroup.png");
    }

  }

  .About::before{
    content: " ";
    background-image: url('https://cdn.jsdelivr.net/gh/Lee-hyunjun/mook@main/src/assets/backgroundPattern.png');
    background-size: cover;
    opacity: 0.2;
    width: 100vw;
    height: 140vh;
    position: absolute;
    top: -18vh;
    left: -10vw
  }

</style>
