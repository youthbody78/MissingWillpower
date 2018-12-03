$(document).ready(function(){
//owlCarousel
  $("#course-group").owlCarousel({
  	animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    margin:0,
    smartSpeed:1000,
    loop:true,
    nav:false,
    dots: true,
    dotsData:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
  });
})