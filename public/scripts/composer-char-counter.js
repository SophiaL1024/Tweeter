$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    //calculate remaining characters by each input, and assign the value to counter
    $(this).parent().find('.counter').html(140 - $(this).val().length);

    //get the immediate value of counter, and check if it is negative
    const counts = $(this).parent().find('.counter').html();
    if (counts < 0) {
      $(this).parent().find('.counter').addClass('negative');
    } else {
      $(this).parent().find('.counter').removeClass('negative');
    }
  })
});