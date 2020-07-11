const {
  blockedTerms,
  blockedTermsText,
  maxFavorite,
  maxFollower,
  maxRetweet,
} = require("./config");

// Private Functions
// Function to check both username and screen name.
const nameCheck = (name) => {
  name = name.toLowerCase();
  // Checks if it is a popular known BOT
  if (name === "100xcode" || name === "codersnotesbot" || name === "xaelbot")
    return false;

  var passed = true;
  blockedTerms.every((e, i) => {
    if (name.indexOf(e) != -1) {
      passed = false;
      return false;
    } else {
      return true;
    }
  });
  return passed;
};

// Function to check both username and screen name.
const textCheck = (text) => {
  var passed = true;
  text = text.toLowerCase();

  blockedTermsText.every((e, i) => {
    if (text.indexOf(e) != -1) {
      passed = false;
      return false;
    } else {
      return true;
    }
  });
  return passed;
};

//Public Functions
exports.sleep = (millis) => {
  return new Promise((resolve) => setTimeout(resolve, millis));
};

exports.isValuable = (tweet) => {
  if (
    !tweet.favorited &&
    tweet.in_reply_to_status_id == null &&
    !tweet.is_quote_status &&
    tweet.text.indexOf("RT") != 0 &&
    tweet.favorite_count < maxFavorite &&
    tweet.user.followers_count < maxFollower &&
    tweet.retweet_count < maxRetweet
  )
    return true;
  else return false;
};

exports.isSpam = (tweet) => {
  if (
    tweet.entities.hashtags.length < 5 &&
    nameCheck(tweet.user.screen_name) &&
    nameCheck(tweet.user.name) &&
    textCheck(tweet.text)
  )
    return false;
  else return true;
};
