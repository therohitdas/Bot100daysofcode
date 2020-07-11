var Twit = require("twit");
const dotenv = require("dotenv");
const { sleep, isSpam, isValuable } = require("./utility");
const { keywords, accountsToFollow } = require("./config");

dotenv.config();

var T = new Twit({
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
});

//local variables
var counter = 0;
var likeCount = 0;
var retweetCount = 0;

const likeStream = T.stream("statuses/filter", { track: keywords });
const retweetStream = T.stream("statuses/filter", { follow: accountsToFollow });
console.log("Started....");

function startLikeStream() {
  likeStream.start();
}
function startRetweetStream() {
  retweetStream.start();
}

function like(favId) {
  T.post("favorites/create", { id: favId }, async (err, response) => {
    if (response.favorited) {
      counter += 1;
      likeCount += 1;
      console.log(
        likeCount.toString() +
          " Liked Tweet - " +
          response.id_str +
          " by - @" +
          response.user.screen_name
      );

      if (likeCount > 275) {
        console.log("Sleeping for next 2 hours likeCount = " + likeCount);
        likeCount = 0;
        likeStream.stop();
        setTimeout(startLikeStream, 1000 * 60 * 60 * 2);
      }

      await sleep(1000);
    } else if (err) {
      if (err.code == 226 || err.code == 205) {
        console.error("You fucked up!");
        likeStream.stop();
        process.exit(0);
      } else if (err.statusCode == 139) {
        console.error("Liked this tweet already!");
      } else if (err.code == 283) {
        console.error(err.message);
        likeStream.stop();
        console.log("Going to sleep .... likeCount = " + likeCount);
        setTimeout(startLikeStream, 1000 * 60 * 60 * 2);
      } else {
        console.error("Error: id - " + favId + " Message: " + err.message);
      }
    }
  });
}
function retweet(tweetId) {
  T.post("favorites/create", { id: tweetId }, async (err, response) => {
    if (response.favorited) {
      counter += 1;
      retweetCount += 1;
      console.log(
        retweetCount.toString() +
          " Retweeted Tweet - " +
          response.id_str +
          " by - @" +
          response.user.screen_name
      );

      if (retweetCount > 275) {
        console.log(
          "Sleeping for next 2 hours retweet count = " + retweetCount
        );
        retweetCount = 0;
        retweetStream.stop();
        setTimeout(startRetweetStream, 1000 * 60 * 60 * 2);
      }

      await sleep(1000);
    } else if (err) {
      if (err.code == 226 || err.code == 205) {
        console.error("You fucked up!");
        retweetStream.stop();
        process.exit(0);
      } else if (err.statusCode == 139) {
        console.error("Retweeted it already!");
      } else if (err.code == 283) {
        console.error(err.message);
        retweetStream.stop();
        console.log("Going to sleep .... Retweet Count = " + retweetCount);
        setTimeout(startRetweetStream, 1000 * 60 * 60 * 2);
      } else {
        console.error("Error: id - " + tweetId + " Message: " + err.message);
      }
    }
  });
}

likeStream.on("tweet", (tweet) => {
  if (!isSpam(tweet) && isValuable(tweet)) {
    like(tweet.id_str);
  } else {
    console.log("Tweet not worth interacting id-" + tweet.id_str);
  }
});

retweetStream.on("tweet", (tweet) => {
  if (!isSpam(tweet)) {
    retweet(tweet.id_str);
  } else {
    console.log("Tweet not worth interacting id-" + tweet.id_str);
  }
});
