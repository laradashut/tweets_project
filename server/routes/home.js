'use strict'
const express = require('express')
const router = express.Router()
// const bodyParser = require('body-parser')
const { knex } = require('../../db')

router.route('/:brand')
  .get((req, res) => {
    const { brand } = req.params
    knex.raw(`select * from tweets where tweet_text like '%${brand}%'`)
      .then((tweets) => {
        res.send(tweets)
      })
  })
  // .post((req, res) => {
  //   console.log('in the correct route');
  //   res.status(201).send({ data: 'Posted!' });
  // });

// router.route('/')
//   .get((req, res) => {
//     const { brand } = req.params;
//
//     console.log(req)
//     knex.select()
//         .from('tweets')
//         .where('tweet_text', 'like', '%', `${brand}%`, '%')
//         .then((tweets) => {
//           res.send(tweets);
//         })
//     // res.status(200).send('Hello World!');
//   })
//   .post((req, res) => {
//     console.log('in the correct route');
//     res.status(201).send({ data: 'Posted!' });
//   });

module.exports = router
