$(document).ready(function() {
  $('#tweet-text').keypress(function() {

    //decrease the value of counter by each keypress
    $(this).parent().find('.counter').html(140-$(this).val().length-1);

    //get the immediate value of counter, and check if it is negative
   const counts = $(this).parent().find('.counter').html();    
    if (counts < 0) {
      $(this).parent().find('.counter').addClass('negative');
    };

  })

});