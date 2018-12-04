$(document).ready(function(){

  

  //menu-toggle
  $(".menu-toggle").click(function() {
    $(".menu-toggle").toggleClass("close");
    $("#overlay").toggleClass('open');
  });

  //recommend-detail
  $('#detail-btn-1').click(function(){
    $('#detail-1').fadeIn();
  })
  $('#detail-btn-2').click(function(){
    $('#detail-2').fadeIn();
  })
  $('#detail-btn-3').click(function(){
    $('#detail-3').fadeIn();
  })
  $('#detail--closeBtn-1').click(function(){
    $('#detail-1').fadeOut();
  })
  $('#detail--closeBtn-2').click(function(){
    $('#detail-2').fadeOut();
  })
  $('#detail--closeBtn-3').click(function(){
    $('#detail-3').fadeOut();
  })

  //teacher-detail
  $('#teacher-btn-1').click(function(){
    $('#teacher-detail-1').addClass('move');
    $('#teacher-detail-2').removeClass('move');
    $('#teacher-detail-3').removeClass('move');
    $('#teacher-detail__mobile-1').addClass('move');
    $('#teacher-detail__mobile-2').removeClass('move');
    $('#teacher-detail__mobile-3').removeClass('move');
  })
  $('#teacher-btn-2').click(function(){
    $('#teacher-detail-1').removeClass('move');
    $('#teacher-detail-2').addClass('move');
    $('#teacher-detail-3').removeClass('move');
    $('#teacher-detail__mobile-1').removeClass('move');
    $('#teacher-detail__mobile-2').addClass('move');
    $('#teacher-detail__mobile-3').removeClass('move');
  })
  $('#teacher-btn-3').click(function(){
    $('#teacher-detail-1').removeClass('move');
    $('#teacher-detail-2').removeClass('move');
    $('#teacher-detail-3').addClass('move');
    $('#teacher-detail__mobile-1').removeClass('move');
    $('#teacher-detail__mobile-2').removeClass('move');
    $('#teacher-detail__mobile-3').addClass('move');
  })
  

});

//loading
document.onreadystatechange = function(){
  if(document.readyState === "complete"){
    $('#loading').fadeOut();
  }
} 












