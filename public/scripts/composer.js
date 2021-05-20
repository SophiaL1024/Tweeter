$(document).ready(function() {

  //toggle the form
  $('#compose').click(function() {
    $(this).parents().filter('body').find('#new-tweet').slideToggle();
  });
  // $(this).parents().filter('body').find('#tweet-text').focus();

  //scroll event handler. When scrollTop >150 show to-top btn and hide nav btn, and vice versa.
  $(document).scroll(function() {
    if($(this).scrollTop()>150){
      $(this).find('#to-top').css("display", "block");
      $(this).find('nav>div').css("display", "none");
    }else{
      $(this).find('#to-top').css("display", "none");
      $(this).find('nav>div').css("display", "flex");
    }
  })

  //go up to the top of page 
  $('#to-top').click(function() {
    $(window).scrollTop(0);
  })

});