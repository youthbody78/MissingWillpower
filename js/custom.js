$(document).ready(function(){

  

  //menu-toggle
  $(".menu-toggle").click(function() {
    $(".menu-toggle").toggleClass("close");
    $("#overlay").toggleClass('open');
  });

  //recommend-detail
  $('#recommend-btn-1').click(function(){
    $('#recommend-detail-1').fadeIn();
  })
  $('#recommend-btn-2').click(function(){
    $('#recommend-detail-2').fadeIn();
  })
  $('#recommend-btn-3').click(function(){
    $('#recommend-detail-3').fadeIn();
  })
  $('#detail--closeBtn-1').click(function(){
    $('#recommend-detail-1').fadeOut();
  })
  $('#detail--closeBtn-2').click(function(){
    $('#recommend-detail-2').fadeOut();
  })
  $('#detail--closeBtn-3').click(function(){
    $('#recommend-detail-3').fadeOut();
  })

  //teacher-detail
  $('#teacher-btn-1').click(function(){
    $('#teacher-detail-1').addClass('move');
    $('#teacher-detail-2').removeClass('move');
    $('#teacher-detail-3').removeClass('move');
  })
  $('#teacher-btn-2').click(function(){
    $('#teacher-detail-1').removeClass('move');
    $('#teacher-detail-2').addClass('move');
    $('#teacher-detail-3').removeClass('move');
  })
  $('#teacher-btn-3').click(function(){
    $('#teacher-detail-1').removeClass('move');
    $('#teacher-detail-2').removeClass('move');
    $('#teacher-detail-3').addClass('move');
  })
  

});

//loading
document.onreadystatechange = function(){
  if(document.readyState === "complete"){
    $('#loading').fadeOut();
  }
} 












