<template>
  <div class="slide_m">
     
    <!-- <div class="slideButton">
      <img @click="slideButton(1)" class="arrow1" src="../assets/arrow.png" alt="arrow">
      <img @click="slideButton(2)" class="arrow2" src="../assets/arrow.png" alt="arrow">
    </div> -->
    <div class="slides">
      <div id="TextMove" class="TextMove">
        <div class="slide1Text TextOpacity" id="slide1Text">
          <span>Why Business Design Lab?</span>
          <p>기업 문제를 함께 고민하고 </p>
          <p>최고의 전문가들과 최적의 해법을 찾아 </p>
          <p>기업 성장과 함께 나아갑니다.</p>
        </div>
      </div>
      <div class="slideImgs">
        <div id="slide1" class="slide1"></div>
        <div id="slide2" class="slide2"></div>
        <div id="slide3" class="slide3"></div>
      </div>
      <!-- <hooper :infiniteScroll="true" ref="slide"> -->
        <!-- <slide> -->
        <!-- </slide> -->
        <!-- <slide> -->
        <!-- </slide> -->
        <!-- <slide> -->
        <!-- </slide> -->
      <!-- </hooper> -->
      
    </div>
  </div>
</template>

<script>
// import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
  
  components: {
    // Hooper, Slide
  },

  data() {
    return {
      slide:1
    }
  },

  created(){
    // this.$refs.slide.mouseDrag = false
    // this.$refs.slide.shortDrag = false
    setTimeout(() => {
      this.slideButton(0)
    }, 10);

    setInterval(() => {
      this.slideButton(2);
    }, 5000);
  },

  methods:{
    slideButton(key){
    

      if (key === 1) {
        this.slide = this.slide - 1
      }else if(key === 2){
        this.slide = this.slide + 1
      }
      if (this.slide < 1) {
        this.slide = 3
      }
      if (this.slide > 3) {
        this.slide = 1
      }
      
          // var vel = document.getElementById("slide1Text")
          // var vel2 = document.getElementById("TextMove")
          // vel.classList.remove('TextOpacity')
          // vel2.classList.remove('TextMove')
          // void vel.offsetWidth;
          // void vel2.offsetWidth;
          // vel.classList.add("TextOpacity");
          // vel2.classList.add("TextMove");



          
      if (this.slide === 1) {
        // document.getElementById("slide1").style.animationName = "";
        document.getElementById("slide1").style.animation = 'TextMove 2s';
  
        document.getElementById("slide1").style.opacity = "1";
        document.getElementById("slide1").style.transform = "scale(1)";

        document.getElementById("slide2").style.opacity = "0";
        document.getElementById("slide3").style.opacity = "0";

        document.getElementById("slide2").style.transform = "scale(1.25)";
        document.getElementById("slide3").style.transform = "scale(1.25)";

      }else if(this.slide === 2){
        // document.getElementById("slide2").style.animationName = "TextMove";

        document.getElementById("slide2").style.opacity = "1";
        document.getElementById("slide2").style.transform = "scale(1)";

        document.getElementById("slide1").style.opacity = "0";
        document.getElementById("slide3").style.opacity = "0";
        document.getElementById("slide1").style.transform = "scale(1.25)";
        document.getElementById("slide3").style.transform = "scale(1.25)";
      }else if(this.slide === 3){
        // document.getElementById("slide3").style.animationName = "TextMove";
        
        document.getElementById("slide3").style.opacity = "1";
        document.getElementById("slide3").style.transform = "scale(1)";
        
        document.getElementById("slide1").style.opacity = "0";
        document.getElementById("slide2").style.opacity = "0";
        document.getElementById("slide1").style.transform = "scale(1.25)";
        document.getElementById("slide2").style.transform = "scale(1.25)";
      }
    }
  }
}
</script>

<style lang="scss">

  @keyframes TextMove {
    from {left: -100px;}
    to {left: 0px;}
  }

  @keyframes TextOpacity {
    from {opacity:0;}
    to {opacity:1;}
  }

  .TextMove{
    animation: TextMove 2s;
  }
  .TextOpacity{
    animation: TextOpacity 2s;
  }

  .slide_m{
    height: 190vw;
  
  
    .slideImgs{
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
    }
      .slideButton{
        position: absolute;
        top:70vw;
        padding: 0 4vw;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 8;

        img{
          width:1.7vw;
        }

        img:hover{
          cursor: pointer;
        }

        .arrow1{
          transform: rotate(180deg);
        }

      }
      .slides{
        width: 100%;
        height: 100%;
        overflow: hidden;

        >div:first-child{
          width: 1200px;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
            // height: 2216px;
          animation: TextMove 2s;
          z-index: 5;
        }

        .slide1Text{
          max-width: 1060px;
          width: 100%;
          max-height: 246px;
          height: 100%;
          margin: 0 auto;
          z-index: 10;
          animation: TextOpacity 2s;
          position: absolute;
          top: 43vw;
          left: 6.5vw;


          span{
            display: block;
            color: white;
            margin-bottom: 3vw;
            font-family: GmarketSansTTFMedium ,sans-serif;
            font-size: 3.75vw;
          }

          p{
            font-size: 4.375vw;
            font-weight: bold;
            color: white;
            font-family: GmarketSansTTFBold ,sans-serif;
          }
          
        }

        .slide1{
          background-image: url("../assets/mobile/slide/1.png");
          width: 100%;
          height: 100%;
          transition: 2s;
          opacity: 0;
          position: absolute;
          top:0;
          left: 0%;
          background-repeat: no-repeat;
          background-size: cover;
          transform:scale(1.25);
        }
        .slide2{
          background-image: url("../assets/mobile/slide/2.png");
          width: 100%;
          height: 100%;
          transition: 2s;
          opacity: 0;
          position: absolute;
          top:0;
          left: 0%;
          background-repeat: no-repeat;
          background-size: cover;
          transform:scale(1.25);
        }
        .slide3{
          background-image: url("../assets/mobile/slide/3.png");
          width: 100%;
          height: 100%;
          transition: 2s;
          opacity: 0;
          position: absolute;
          top:0;
          left: 0%;
          background-repeat: no-repeat;
          background-size: cover;
          transform:scale(1.25);
        }
      }
  }
</style>
