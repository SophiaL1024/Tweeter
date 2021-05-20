$(document).ready(function() {

  //toggle the form
  $('#compose').click(function() {
    $(this).parents().filter('body').find('#new-tweet').slideToggle();
  });
  // $(this).parents().filter('body').find('#tweet-text').focus();

  $(document).scroll(function(){
    $(this).find('#to-top').css("display","block");
    $(this).find('#nav-div').css("display","none");
  })

  $('#to-top').click(function(){
    $("html, body").animate({
      scrollTop: 0
  }, 200);
  })
});