<template>
  <div>
    <swiper id="Home"
      :options="swiperOption"
       @slideChange="changeSlide"
      class="mySwiper"
    >
        <swiper-slide class="video_box">
            <div class="overlay"></div>
            <video id="video1" data-swiper-parallax="45%"  loop="" autoplay="" muted="" playsinline >
              <source src="https://cdn.jsdelivr.net/gh/Lee-hyunjun/mook@main/src/assets/video1.mp4" type="video/mp4">
            </video>
        </swiper-slide>
        <swiper-slide class="video_box">
            <div class="overlay"></div>
            <video data-swiper-parallax="45%"  loop="" autoplay="" muted="" playsinline >
              <source src="https://cdn.jsdelivr.net/gh/Lee-hyunjun/mook@main/src/assets/video2.mp4" type="video/mp4">
            </video>
        </swiper-slide>
        <swiper-slide class="video_box">
            <div class="overlay"></div>
            <video data-swiper-parallax="45%"  loop="" autoplay="" muted="" playsinline >
              <source src="https://cdn.jsdelivr.net/gh/Lee-hyunjun/mook@main/src/assets/video4.mp4" type="video/mp4">
            </video>
        </swiper-slide>

      </swiper>
      
        <div class="slideNum">
          <p id="slideNum">{{slideNum}}</p>
          <p ><span id="line"></span></p>
          <p>3</p>
        </div>
    </div>
</template>

<script>


import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import Vue from 'vue'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';
import {Swiper as SwiperClass, Mousewheel } from 'swiper/core';
import { Navigation, Pagination, Scrollbar,Parallax, EffectFade, Autoplay  } from 'swiper';

SwiperClass.use([Mousewheel]);
Vue.use (getAwesomeSwiper(SwiperClass));
import "swiper/components/navigation/navigation.scss"; // *
import "swiper/components/pagination/pagination.scss"; // *
import "swiper/components/effect-fade/effect-fade.scss"; // *
import "swiper/components/scrollbar/scrollbar.scss"; // *



	export default {
		name: 'App',
		components: {
			Swiper, SwiperSlide 
		},
    setup() {
      return {
        modules: [Navigation, Scrollbar, EffectFade, Autoplay ],
      };
    },
		data() {
			return {
				// $this : $,
				swiperOption: {
					direction: 'vertical',
          mousewheel: true,
          // parallax: true,
          // touchRatio: 0,
          // pagination: {   //페이징 사용자 설정
          //   el: ".pagination_fraction",   //페이징 태그 클래스 설정 
          //   type : 'fraction'
          // },
          modules:[Parallax,Pagination],
					speed: 1000,
				},

				slideNum:1,
			};
		},


		
		created() {
  
		},

    watch:{
      slideNum(){
        switch (this.slideNum) {
          case 1:
            document.getElementById("line").style.width = "33.33%"
            document.getElementById("slideNum").style.opacity = 0;

            setTimeout(() => {
              document.getElementById("slideNum").style.opacity = 1;
            }, 500);
            
            break;
          case 2:
            document.getElementById("line").style.width = "66.66%"
            document.getElementById("slideNum").style.opacity = 0;

            setTimeout(() => {
              document.getElementById("slideNum").style.opacity = 1;
            }, 500);
            
            break;
          case 3:
            document.getElementById("line").style.width = "100%"
            document.getElementById("slideNum").style.opacity = 0;

            setTimeout(() => {
              document.getElementById("slideNum").style.opacity = 1;
            }, 500);
            
            break;
        }
      }
    },

		methods:{
      changeSlide(e){
        this.slideNum = e.activeIndex + 1
      }
		}
		
		
	}

</script>

<style lang="scss">
	#Home{
    
		// overflow-y:hidden;
		>* {
			display: block;
		}
		display: block;
		width: 100vw;
		height: 100vh;
		.video_box{
			width: 100%;
			height: 100%;
			background: black;
			>video{
				// opacity: 0.2;
				display: block;
				width: 100%;
				z-index: 2;
				height: 100%;
				object-fit: cover;
			}
		}
    .overlay{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      opacity: 1;
      background: -webkit-linear-gradient(top, black 0, transparent 50%, transparent 63%, rgba(0, 0, 0, 1) 100%);
      background: -webkit-gradient(linear, left top, left bottom, color-stop(0, black), color-stop(50%, transparent), color-stop(63%, transparent), to(rgba(0, 0, 0, 1)));
      background: -o-linear-gradient(top, black 0, transparent 50%, transparent 63%, rgba(0, 0, 0, 1) 100%);
      background: linear-gradient(to bottom, black 0, transparent 50%, transparent 63%, rgba(0, 0, 0, 1) 100%);
      -webkit-transition: all .65s ease;
      -o-transition: all .65s ease;
      transition: all .65s ease;
      // -webkit-backface-visibility: hidden;
      // backface-visibility: hidden;
    }

    .swiper-slide-active{
      >.overlay{
        opacity: 0.5;
      }
    }
	}
  .slideNum{
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 2;
      width: 25vw;
      height: 10vh;
      color: white;

      #slideNum{
        opacity: 1;
        transition: .5s;
      }
      >p:nth-child(2){
        width: 20vw;
        height: 1px;
        background: rgb(174, 174, 174);
        margin: 10px 0 10px 0;
        >span{
          transition: .5s;
          background: white;
          width: 33.33%;
          display: block;
          height: 1px;
        }
      }
      >p:not(:nth-child(2)){
        padding-left: 15px;
      }
    }
</style>
