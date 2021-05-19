/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(document).ready(function() {

  const createTweetElement = function(obj) {
    const $tweet = $(`
    <article class="tweet">
        <header>
          <span><img src=${obj.user.avatars}> ${obj.user.name}</span>
          <span id="mention">${obj.user.handle}</span>
        </header>
        <p>${obj.content.text}</p>
        <footer>
          <span id="time-ago">${obj.created_at}</span>
          <div><i class="fas fa-flag"></i><i class="fas fa-redo-alt"></i><i class="fas fa-heart"></i></div>
        </footer>
    </artical>
    `);
    return $tweet;
  };

    // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
})
