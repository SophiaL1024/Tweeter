$(document).ready(function() {

  //toggle the form and get focus
  $('#compose').click(function() {
    $('#new-tweet').slideToggle();
    $('#tweet-text').focus();
  });

  //scroll event handler. When scrollTop >150 show to-top btn and hide nav btn, and vice versa.
  $(document).scroll(function() {
    if($(this).scrollTop()>100){
      $('#to-top').css("display", "block");
      $('nav>div').css("display", "none");
    }else{
      $('#to-top').css("display", "none");
      $('nav>div').css("display", "flex");
    }
  })

  //go up to the top of page, and slide down the textarea. 
  $('#to-top').click(function() {
    $(window).scrollTop(0);
    $('#new-tweet').slideDown();
    $('#tweet-text').focus();
  })

});