$(document).ready(function() {

  //create new tweet element
  const createTweetElement = function(obj) {
    //calculate the time passed by timeago library 
    const time = timeago.format(obj.created_at);

    const $tweet = $(`
    <article class="tweet">
        <header>
          <span><img src=${obj.user.avatars}> ${obj.user.name}</span>
          <span id="mention">${obj.user.handle}</span>
        </header>
        <p>${obj.content.text}</p>
        <footer>
          <span id="time-ago">${time}</span>
          <div><i class="fas fa-flag"></i><i class="fas fa-redo-alt"></i><i class="fas fa-heart"></i></div>
        </footer>
    </artical>
    `);
    return $tweet;
  };

  //render the new created tweet
  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    tweets.forEach(element => {
      const $tweet = createTweetElement(element);
      $('#tweets-container').append($tweet);
    });
  };

  //form submission event handler
  $('form').submit(function(event) {
    event.preventDefault();
    //check form validation
    if (!$(this).find('#tweet-text').val()) {
      alert("Tell me something, the tweet is empty.");
      return;
    } else if ($(this).find('.counter').val() < 0) {
      alert("Character number exceeds the maximum limit!");
      return;
    }
    //post tweet to server
    $.ajax({
      url: '/tweets',
      method: 'POST',
      //Data to be sent to the server.Serialize data submitted by form 
      data: $(this).serialize()
    })
    //use loadTweets() to fetch tweets and render the web page
    loadTweets();
  });

  //fetch tweets from server
  const loadTweets = function() {
    $.ajax({
      url: "/tweets",
      method: "GET"
    })
      .then(function(data) {
        renderTweets(data);
      })
  }
})
