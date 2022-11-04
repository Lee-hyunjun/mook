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
      <h1>SEOUL <br>LOTTE TOWER</h1>
      <div class="img"></div>
    </div>

    <div id="item2">
      <h1>CITY POP<br>NEUKKIM ITNE</h1>
      <div class="box">
        <span>JP CITY</span> 
      </div>
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

    #item2{
        animation: fadeInRight 2s;
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
      margin-left: 50%;
      margin-top: 18vh;
      width: 40vw;
      height: 45vh;
      position: relative;
      // overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      >.img{
        background-image: url('https://cdn.jsdelivr.net/gh/Lee-hyunjun/mook@main/src/assets/aboutImg1.jpg');
        background-size: cover;
        position: relative;
        width: 75%;
        height: 75%;
      }
     
      >h1{
        position: absolute;
        color: white;
        font-size: 4.8vw;
        width: 110%;
        letter-spacing : -.2vw;
        z-index: 1;
        line-height: 5.5vw;
        top: 12%;
        right: 40%;
      }
    }

    #item1::before{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      -webkit-filter: blur(3px); 
      -moz-filter: blur(3px); 
      -o-filter: blur(3px); 
      -ms-filter: blur(3px); 
      filter: blur(3px);
      transform: scale(1.02);
      background-size: cover;
      background-image: url('https://cdn.jsdelivr.net/gh/Lee-hyunjun/mook@main/src/assets/aboutImg1.jpg');
      z-index: -1; 
      content: "";
    }

    #item2{
      margin-left: 10%;
      margin-top: 15vh;
      width: 40vw;
      height: 50vh;
      position: relative;
      // overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      >.box{
        // background-image: url('../../assets/aboutImg2.png');
        // background-size: cover;
        position: relative;
        border: 6px solid white;
        width: 80%;
        height: 75%;
        display: flex;
        align-items: center;
        justify-content: center;
        >span{
          font-family: BebasNeue-Regular;
          display: block;
          background: white;
          font-size: 3vw;
          font-weight: bold;
          color: black;
          padding: 1.5% 7% .5% 7%;
        }
      }
     
      >h1{
        position: absolute;
        color: white;
        font-size: 5vw;
        width: 110%;
        letter-spacing : -.2vw;
        z-index: 1;
        line-height: 5.5vw;
        text-align: right;
        bottom: 10%;
        right: -57%;
      }
    }

    #item2::before{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-size: cover;
      background-image: url('https://cdn.jsdelivr.net/gh/Lee-hyunjun/mook@main/src/assets/aboutImg2.png');
      z-index: -1; 
      content: "";
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
