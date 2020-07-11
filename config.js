//Config for liking tweets
exports.keywords = ["#100DaysofCode"]; // array of hashtags to follow ["#100DaysofCode"]
exports.blockedTerms = ["bot", "coupon"]; // array of terms that the tweet screen name should not have.
exports.blockedTermsText = ["coupon", "discount", "hiring"];
exports.maxFollower = 5000; //max follower user can have
exports.maxRetweet = 10; //max retweet a tweet can have
exports.maxFavorite = 10; // max likes a tweet can have
exports.accountsToFollow = [
  "341643950", //ossia
  "870038005", //traversymedia
  "1069636036291112960", // developedbyed
]; // Retweet contents from these accounts
// TODO add more accounts soon
