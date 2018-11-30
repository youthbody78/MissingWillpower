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

  //menu-toggle
  $(".menu-toggle").click(function() {
    $(".menu-toggle").toggleClass("close");
    $("#overlay").toggleClass('open');
  });

  //recommend-detail
  $('#recommend-btn-1').click(function(){
    $('#reccommend-detail-1').fadeIn();
  })
  $('#recommend-btn-2').click(function(){
    $('#reccommend-detail-2').fadeIn();
  })
  $('#recommend-btn-3').click(function(){
    $('#reccommend-detail-3').fadeIn();
  })
  $('#detail--closeBtn-1').click(function(){
    $('#reccommend-detail-1').fadeOut();
  })
  $('#detail--closeBtn-2').click(function(){
    $('#reccommend-detail-2').fadeOut();
  })
  $('#detail--closeBtn-3').click(function(){
    $('#reccommend-detail-3').fadeOut();
  })
  

});

//loading
document.onreadystatechange = function(){
  if(document.readyState === "complete"){
    $('#loading').fadeOut();
  }
} 












