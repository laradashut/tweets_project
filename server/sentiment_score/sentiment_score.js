const { knex } = require('../../db')

const calculateBuckets = (brand, normalTime = '2018-02-13 15:55:47') => {
  // var normalTime = removeStr(setNormalTime(startTime));
  var futureTime = removeStr(addFiveMin(normalTime))
  knex.raw(`SELECT * FROM tweets WHERE tweet_text LIKE '%${brand}%' AND created_date > '${normalTime}' AND created_date < '${futureTime}'`)
    .then((tweets) => {
      let allTweets = []
      allTweets = tweets.rows

      let averageSentScore = alweets => {
        let sum = 0

        if (allTweets.length === 0) {
          return sum
        }

        for (let i = 0; i < allTweets.length; i++) {
          sum += allTweets[i].ssentiment_score
        }
        let ave = sum / allTweets.length
        return ave
      }

      let aveSentScore = averageSentScore(allTweets)
      return [brand, aveSentScore, futureTime]
    })
    .then((input) => {
      knex('buckets')
        .insert({brand: input[0], sent_score: input[1], last_tweet_date: input[2]})
        .then(() => {
          // console.log(input[0], input[1]);
        })
    })
    .then(function () {
      // if futureTime is > currentTime
      // then setTimeout for 5 mins
      // else run all the time
      console.log('my future', futureTime)
      var currentTime = new Date()
      var currentNormal = removeStr(setNormalTime(currentTime))

      if (futureTime > currentNormal) {
        console.log('sfasdf')
        setTimeout(() => { calculateBuckets(brand, futureTime) }, 3000)
      } else {
        calculateBuckets(brand, futureTime)
      }
    })
}
calculateBuckets('United')
calculateBuckets('Virgin')
calculateBuckets('American')
calculateBuckets('Delta')

function setNormalTime (time) {
  var now = new Date(time)
  now.setHours(now.getHours() - 8)
  return now
}

function addFiveMin (time) {
  var now = new Date(time)
  now.setHours(now.getHours() - 8)
  now.setMinutes(now.getMinutes() + 5)
  return now
}

function removeStr (date) {
  var str = JSON.stringify(date).split('')
  str[11] = ' '
  str[24] = ''
  return str.join('')
}
