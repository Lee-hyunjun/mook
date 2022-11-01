<template>


	<swiper id="Home"
		:options="swiperOption"
		class="mySwiper"
	>
			<swiper-slide class="video_box"  data-swiper-parallax="-400">
					<video loop="" autoplay="" muted="" >
						<source src="http://flipevil.com/wp-content/uploads/2021/01/SEOUL.mp4" type="video/mp4">
					</video>
			</swiper-slide>
			<swiper-slide class="video_box"  data-swiper-parallax="-400">
					<video loop="" autoplay="" muted="" >
						<source src="http://flipevil.com/wp-content/uploads/2021/01/dumb.mp4" type="video/mp4">
					</video>
			</swiper-slide>
			<swiper-slide class="video_box"  data-swiper-parallax="-400">
					<video loop="" autoplay="" muted="" >
						<source src="http://flipevil.com/wp-content/uploads/2021/01/instagram.mp4" type="video/mp4">
					</video>
			</swiper-slide>
		</swiper>

</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import Vue from 'vue'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';
import {Swiper as SwiperClass, Mousewheel } from 'swiper/core';
import { Navigation, Pagination, Scrollbar, EffectFade, Autoplay, Parallax } from 'swiper';

SwiperClass.use([Mousewheel]);
Vue.use (getAwesomeSwiper(SwiperClass));
import "swiper/components/navigation/navigation.scss"; // *
import "swiper/components/effect-fade/effect-fade.scss"; // *
import "swiper/components/scrollbar/scrollbar.scss"; // *



	export default {
		name: 'App',
		components: {
			Swiper, SwiperSlide
		},
    setup() {
      return {
        modules: [Navigation, Pagination, Scrollbar, EffectFade, Autoplay, Parallax],
      };
    },
		data() {
			return {
				// $this : $,
				swiperOption: {
					direction: 'vertical',
          mousewheel: true,
          parallax: true,
          touchRatio: 0,
					pagination:{
						el: '.swiper-pagination',
            clickable: true,
					},
					speed: 1000,
          modules:this.modules
				},

				videoNum: 0,
				scrollY : 0,
				// Navigation,
				// Scrollbar,
				// A11y,
			};
		},


		
		created() {
			console.log(this.modules)
		},


		methods:{
			

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
	}
</style>
