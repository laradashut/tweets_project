-- DROP DATABASE IF EXISTS twitter_analysis;
CREATE DATABASE IF NOT EXISTS twitter_analysis;

\connect twitter_analysis;

CREATE TABLE brands (
  brand_id serial PRIMARY KEY,
  brand_name text
);

CREATE TABLE tweets (
  tweet_id serial PRIMARY KEY,
  created_at text NOT NULL,
  tweet_text text,
  retweeted_count text,
  favourites_count text,
  user_name text,
  user_profile_image_url text,
  sentiment_score_id int,
  brand_id int
) INHERITS (brands);


CREATE TABLE sentiment_analysis (
  sent_id serial PRIMARY KEY,
  brand_id int,
  tweet_id int,
  tweet_score int
) INHERITS (tweets, brands);

INSERT INTO brands (brand_name) VALUES ('DELTA');

INSERT INTO tweets (, created_at, text, retweeted_count, favourites_count, user_name, user_profile_image_url, sentiment_score_id, brand_id)
VALUES ('3432', 'NOV 11 2017', 'HELLO WORLD', '2', '4', 'JOHN SMITH', NULL, 0.5, 2);



INSERT INTO sentiment_analysis (brand_id, tweet_id, tweet_score) VALUES (1, 1, 0.5);
