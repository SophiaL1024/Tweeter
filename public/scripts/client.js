$(document).ready(function() {
  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

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

  renderTweets(data);

  //post tweet to server
  $('form').submit(function(event) {
    event.preventDefault();
    $.ajax({
      url: '/tweets',
      method: 'POST',
      //Data to be sent to the server.Serialize data submitted by form
      data: $(this).serialize()
    })
  })



})
