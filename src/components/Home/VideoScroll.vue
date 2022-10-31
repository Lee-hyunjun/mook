<template>


		<swiper id="Home"
			:direction="'vertical'"
			:pagination="{
				clickable: true,
			}"
			:modules="modules"
			class="mySwiper"
		>
			<swiper-slide class="video_box">
					<video loop="" autoplay="" muted="" >
						<source src="http://flipevil.com/wp-content/uploads/2021/01/SEOUL.mp4" type="video/mp4">
					</video>
			</swiper-slide>
			<swiper-slide class="video_box">
					<video loop="" autoplay="" muted="" >
						<source src="http://flipevil.com/wp-content/uploads/2021/01/dumb.mp4" type="video/mp4">
					</video>
			</swiper-slide>
			<swiper-slide class="video_box">
					<video loop="" autoplay="" muted="" >
						<source src="http://flipevil.com/wp-content/uploads/2021/01/instagram.mp4" type="video/mp4">
					</video>
			</swiper-slide>
		</swiper>

</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

import 'swiper/swiper-bundle.css'
// import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


	export default {
		name: 'App',
		components: {
			Swiper, SwiperSlide
		},
		directives: {
			swiper: directive
		},
		data() {
			return {
				// $this : $,
				videoNum: 0,
				scrollY : 0,
				// Navigation,
				Pagination,
				// Scrollbar,
				// A11y,
			};
		},


		
		created() {
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
		>.video_box{
			width: 100%;
			height: 100%;
			background: black;
			>video{
				opacity: 0.2;
				display: block;
				width: 100%;
				z-index: 2;
				height: 100%;
				object-fit: cover;
			}
		}
	}
</style>
