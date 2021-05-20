$(document).ready(function() {

  //toggle the form
  $('#compose').click(function() {
    $(this).parents().filter('body').find('#new-tweet').slideToggle();
  });
  // $(this).parents().filter('body').find('#tweet-text').focus();

  //when 
  $(document).scroll(function() {
    if($(this)){
      $(this).find('#to-top').css("display", "block");
      $(this).find('#nav-div').css("display", "none");
    }
  })

  //go up to the top of page 
  $('#to-top').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 200);
  })
});