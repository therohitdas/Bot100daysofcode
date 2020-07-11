<h1 align="center">Welcome to TwitterBot #100daysofcode 👋</h1>

<p>  
<a href="#" target="_blank">  
<img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />  
</a>

<a href="https://twitter.com/TheRohitDas" target="_blank">  
<img alt="Twitter: TheRohitDas" src="https://img.shields.io/twitter/follow/TheRohitDas.svg?style=social" />  
</a>  
<a href="https://github.com/therohitdas/" target="_blank">  
<img alt="GitHub followers" src="https://img.shields.io/github/followers/therohitdas?label=Follow%20TheRohitDas&style=social">  
</a>  
<a href="https://twitter.com/100daysofcoders" target="_blank">  
<img alt="Twitter: 100daysofcoders" src="https://img.shields.io/twitter/follow/100daysofcoders.svg?style=social" />  
</a>  
</p>  
  


> A nodejs Twitter bot that likes #100daysofcode tweets and retweets awesome programming content.

### 🏠 [Homepage](#)

### ✨ [Demo Account](https://twitter.com/100daysofcoders)

## Features

1. **Only likes tweet of people who need it**: In the config file, you can find few variables that decide if it should engage with the Tweet. By default, it engages with accounts having -


    * low follower count

    * low tweet engagement rates.

2. **Avoids SPAM tweets**: It checks if the tweet is possibly spam by analyzing:


    * Tweet's text.

    * Author's username.

    * Author's name.

3. **Follows popular accounts:** Retweets tweet from popular accounts that consistently put out quality tweets for developers.

> Please review [config.js file](/blob/master/config.js) and add your favourite accounts by opening pull requests.


## Setup

Check the [config.js file](/blob/master/config.js) and change the values as per need.

You will also need a twitter developer account and your API keys.

Follow Twitter's official guide to getting everything you need - [Quick Start](https://developer.twitter.com/en/docs/labs/filtered-stream/quick-start)

If you are using Heroku add this API keys using Heroku CLI ([Tutorial](https://devcenter.heroku.com/articles/config-vars)) to the variables named -
 `BOT_CONSUMER_KEY, BOT_CONSUMER_SECRET, BOT_ACCESS_TOKEN and BOT_ACCESS_TOKEN_SECRET`

If you deployed it anywhere else, create a .env and copy this -

```js

BOT_CONSUMER_KEY =

BOT_CONSUMER_SECRET =

BOT_ACCESS_TOKEN =

BOT_ACCESS_TOKEN_SECRET =

```

Fill it with your API keys.

## Install

```sh

npm install

```

## Usage

```sh

npm start

```
---

## Feature Requests

Together we can make the best Twitter bot for #100DaysofCode.

So, please submit feature request by opening issues.

If you want to improve the code or add new features :

1. Fork the repo

2. Do your Magic

3. Submit a Pull request.



## Author

🤴🏽 **Rohit Das**

- Twitter: [@TheRohitDas](https://twitter.com/TheRohitDas)

- Github: [@TheRohitDas](https://github.com/TheRohitDas)

- LinkedIn: [@TheRohitDas](https://linkedin.com/in/TheRohitDas)

## Show your support

Give a ⭐️ if this project helped you!
