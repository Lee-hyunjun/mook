<template>
  <div class="Navs_m">
    <div class="NavLogo">
      <img src="../assets/mobile/mobile_logo.png" alt="Logo">
    </div>
    <div class="NavButton" @click="open">
      <p></p>
      <p></p>
      <p></p>
    </div>
    <div class="NavPop">
      <div>
        <img @click="close" src="../assets/mobile/nav/close_button.png" alt="close">
        <p @click="scroll(1)">About</p> 
        <p @click="scroll(2)">Business area</p> 
        <p @click="scroll(3)">Target</p> 
        <p @click="scroll(4)">Our goal</p> 
        <p @click="scroll(5)">Works</p> 
        <p @click="scroll(6)">Partners</p> 
        <p @click="scroll(7)">Contact</p> 
      </div>
    </div>
  </div>
</template>

<script>

// import Logo from "@/assets/logo.png"

export default {
  components: {
    // Logo
  },

  methods:{
    open(){
      document.getElementsByClassName("NavPop")[0].style.display = "block";
    },

    close(){
      document.getElementsByClassName("NavPop")[0].style.display = "none";
    },

    scroll(key){
      let top = 0;
      switch (key) {
        case 1:
          top = 0
          break;
        case 2:
          top = document.getElementsByClassName('mainContent_m')[0].offsetTop
          break;
        case 3:
          top = document.getElementsByClassName('content2Main_m')[0].offsetTop
          break;
        case 4:
          top = document.getElementsByClassName('content3Main_m')[0].offsetTop
          break;
        case 5:
          top = document.getElementsByClassName('content4Main_m')[0].offsetTop
          break;
        case 6:
          top = document.getElementsByClassName('content5Main_m')[0].offsetTop - document.getElementsByClassName('footContent')[0].scrollHeight;
          break;
      
        case 7:
          top = document.getElementsByClassName('content5Main_m')[0].offsetTop
          break;

        default:
          break;
      }
      document.documentElement.scrollTop = top
      this.close()
    }
  }
}
</script>

<style  lang="scss">
  .Navs_m{
    max-width: 1200px;
    width: 100%;
    z-index: 10;
    position: absolute;
    top: 0;


    .NavLogo{
      position: absolute; 
      top: 9vw;
      left: 6.5vw;
      >img{
        width: 40vw;     
      }
    }

    .NavButton{ 
      display: block;
      // width: 40px;
      height: 40px;
      flex-flow: wrap;
      position: fixed;
      top: 8vw;
      right: 7vw;
      z-index: 100;

      >p{
        width: 1.5vw;
        height: 1.5vw;
        background: white;
        border-radius: 100%;
        margin-bottom: 1vw;
        border: 1px solid #eaeaea;
      }
    } 
    .NavButton:hover{
      cursor: pointer;
    }
    .NavPop{
      background: rgba(0, 0, 0, .6);
      width: 100%;
      height: 100%;
      position: relative;
      height: 1000000px;
      z-index: 1000;
      display: none;
      justify-content: flex-end;

      >div{
        position: fixed;
        top:0;
        right:0;
        width: 50vw;
        height: 100%;
        background: #0d1741;
        margin-bottom: 5vw;
        padding-left: 4vw;
        padding-top: 5vw;

        >img{
          margin-bottom: 5vw;
          padding-left: 35vw;
          width: 43vw;
        }

        >p{
          font-size: 5.125vw;
          color: white;
          font-family: 'Objektiv Mk2 W03 Medium' , sans-serif;
          margin-bottom: 6vw;
        }
      }
    }
  }
</style>
