var Twitter = require('twitter');
var fs = require("fs");

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

var stream = client.stream('statuses/filter', {track: 'PMOIndia'});
stream.on('data', function(result) {
  console.log("Tweeted by ===>" + result.user.name + " ===> " +  "Tweet is ===> " + result.text + "===>");
  fs.appendFile("tweettttt.txt", JSON.stringify(result));
});

stream.on('error', function(error) {
  throw error;
});