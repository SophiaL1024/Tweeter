$(document).ready(function() {

  //create new tweet element
  const createTweetElement = function(obj) {
    //calculate the time passed by timeago library 
    const time = timeago.format(obj.created_at);
    const $tweet = $(` <article class="tweet"></artical>`)
    const $tweetHead = $(`   
        <header>
          <span><img src=${obj.user.avatars}> ${obj.user.name}</span>
          <span id="handle">${obj.user.handle}</span>
        </header>`);
    //escape unsafe text
    const $tweetBody = $('<p>').text(`${obj.content.text}`);
    const $tweetFoot = $(`<footer>
          <span id="time-ago">${time}</span>
          <div><i class="fas fa-flag"></i><i class="fas fa-redo-alt"></i><i class="fas fa-heart"></i></div>
        </footer>`);
    $tweet.append($tweetHead);
    $tweet.append($tweetBody);
    $tweet.append($tweetFoot);
    return $tweet;
  };

  //render the new created tweet
  const renderTweets = function(tweets) {
    //on each rendering, empty all children
    $('#tweets-container').empty();
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    tweets.forEach(element => {
      const $tweet = createTweetElement(element);
      $('#tweets-container').prepend($tweet);
    });
  };

  //form submission event handler
  $('form').submit(function(event) {
    event.preventDefault();
    //check form validation, display error message by jQuery 
    if (!$(this).find('#tweet-text').val()) {
      $('#error').html($(`<i class="fas fa-exclamation-triangle"></i>Tell me something, the tweet is empty. <i class="fas fa-exclamation-triangle"></i>`));
      $('#error').slideDown();
      return;
    } else if ($(this).find('.counter').val() < 0) {
      $('#error').html($(`<i class="fas fa-exclamation-triangle"></i>Too long. Character number exceeds the maximum limit! <i class="fas fa-exclamation-triangle"></i>`));
      $('#error').slideDown();
      return;
    }
    //clear former error message
    $('#error').html('');
    $('#error').css("display", "none");
    //post tweet to server
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: $(this).serialize() //Data to be sent to the server.Serialize data submitted by form.
    })
      //after submiting, refetch the message
      .then(() => {
        loadTweets();
        $('#tweet-text').val(''); //clear the textarea
      })
  });

  //define a function to fetch tweets from server
  const loadTweets = function() {
    $.ajax({
      url: "/tweets",
      method: "GET"
    })
      .then(function(data) {
        renderTweets(data);
      })
  }

  //call the loadTweets function when page loading
  loadTweets();
})
