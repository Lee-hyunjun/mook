<template>
    <div class="Nav">
        <div class="logo">
            <img id="logo" src="https://cdn.jsdelivr.net/gh/Lee-hyunjun/mook@main/src/whitelogo.png" alt="">
        </div>
        <div class="Side">
            <input class="burger-check" v-model="chk" type="checkbox" id="burger-check" @change="changeLogo" /><label class="burger-icon" for="burger-check"><span class="burger-sticks"></span></label>
            <div class="SideMore">
                <div class="Menus" id="Menus">
                    <div>
                        <h1 @click="goPage('HOME')">HOME</h1>
                    </div>
                    <div>
                        <h1 @click="goPage('ABOUT')">ABOUT</h1>
                    </div>
                    <div>
                        <h1 @click="goPage('PROJECT')">PROJECT</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
  name: 'Side',
  components: {
  },

  data() {
    return {
      chk :false,
    };
  },

  methods:{
    goPage(page){
      switch (page) {
        case 'HOME':
          this.$router.push({name:'Home'})
          this.chk = false;
          this.changeLogo()
        break;
        case 'ABOUT':
          this.$router.push({name:'About'})
          this.chk = false;
          this.changeLogo()
        break;
        case 'PROJECT':
          this.$router.push({name:'Project'})
          this.chk = false;
          this.changeLogo()
        break;
      }
      
      
      
    },

    changeLogo(){
      if (this.chk === true) {
        document.getElementById("logo").style.color = 'black';
        document.getElementById("Menus").style.color = 'black';
      }else{
        document.getElementById("logo").style.color = 'white';
        document.getElementById("Menus").style.color = 'white';
      }
    }
  }
}
</script>

<style lang="scss">
    .Nav{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 8vh;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo{
          padding-left:  5vw;
          #logo{
            padding-top: 1vh;
            width: 10vw;;
            position: relative;
            transition: 0.25s;
            z-index: 3;
          }
        }

    }
    .SideMore{
		width: 100vw;
		height: 100vh;
        background: white;
        transition: 1s;
        position: absolute;
        left: 0;
        top: -100vh;
        z-index: 2;
        display: flex;
        justify-content: flex-end;
        .Menus{
            transition: .25s;
            width: 40vw;
            margin-top:10vh;
            margin-right:10vw;
            h1{
                font-size: 3.5vw;
                text-align: right;
                margin-top:2vh;
            }
        }
    }

    .burger-icon {
        position: relative;
        cursor: pointer;
    display: inline-block;
    z-index: 3;
    padding: 8px 0;
    padding-right: 5vw;
    user-select: none;

    width: auto;
    margin: 0;
    }

    .burger-icon .burger-sticks {
    background: white;
    display: block;
    height: 2px;
    border-radius: 5px;
    position: relative;
    transition:  .2s ease-out;
    width: 18px;
    }

    .burger-icon .burger-sticks:before,
    .burger-icon .burger-sticks:after {
    background: white;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
    }

    .burger-icon .burger-sticks:before {
    top: 5px;
    }

    .burger-icon .burger-sticks:after {
    top: -5px;
    }

    .burger-check {
    display: none;
    }

    .burger-check:checked~.SideMore {
        top: 0;
    }

    .burger-check:checked~.burger-icon .burger-sticks {
        background: transparent;
    }

    .burger-check:checked~.burger-icon .burger-sticks:before {
        background: black;
    transform: rotate(-45deg);
    }

    .burger-check:checked~.burger-icon .burger-sticks:after {
        background: black;
    transform: rotate(45deg);
    }

    .burger-check:checked~.burger-icon:not(.steps) .burger-sticks:before,
    .burger-check:checked~.burger-icon:not(.steps) .burger-sticks:after {
    top: 0;
    }

</style>
