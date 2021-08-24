$(document).ready(function(){
	$('.navbar-toggle').on('click', function () {
		$('.icon-bar-1').toggleClass("icon-bar-1-active"),
		$('.icon-bar-2').toggleClass("icon-bar-2-active"),
		$('.icon-bar-3').toggleClass("icon-bar-3-active");
	})
	$('.owl-carousel').owlCarousel({
	  loop:true,
	  margin:0,
	  dots: true,
	  nav: false,
	  responsiveClass:true,
	  navigation: false,
	  autoplay: false,
	  autoplayTimeout: 7000,
	  autoplaySpeed: 1000,
	  dotsSpeed: 1500,
	  responsive:{
	    0:{
	      items:1,
	      nav:false,
	      loop:true
	    	},
	    600:{
	      items:1,
	      nav:false,
	      loop:true
	      },
	    1000:{
	      items:1,
	      nav:false,
	      loop:true
	      }
	  }
	})
	$('.prev').click(function() {
    $('.banner-carousel').trigger('next.owl.carousel');
  });
  $('.next').click(function() {
    $('.banner-carousel').trigger('prev.owl.carousel');
  });
});