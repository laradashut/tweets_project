const apiKeys = require('./apiKeys');
const twitter2pg = require('twitter2pg');
const Twit = require('twit');
const knex = require('knex')(require('../knexfile'));
const db = require('bookshelf')(knex);
const sentiment = require('sentiment');

const T = new Twit(apiKeys);
console.log('bot is stating ');

const params = {
  q: 'delta',
  count: 2
}

const stream = T.stream('statuses/filter', {track: ['delta airlines', '#delta', 'virgin airlines', '#virgin', 'united airlines', '#united', 'american airlines', '#americanairlines'], language: 'en' });


const storeTweets = (tweet) => {
  const sent_score = sentiment(tweet.text);

  knex('tweets').insert({
    id_str: tweet.id_str,
    created_at: tweet.created_at,
    tweet_text: tweet.text,
    retweeted_count: tweet.retweet_count,
    favourites_count: tweet.favorite_count,
    user_name: tweet.user.name,
    user_profile_image_url: tweet.user.profile_image_url,
    sentiment_score: sent_score.score
  })
  .then();
}

stream.on('tweet', storeTweets);
