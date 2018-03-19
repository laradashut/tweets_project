
'use strict'
const express = require('express')
const router = express.Router()
// const bodyParser = require('body-parser')
const { knex } = require('../../db')

router.route('/')
  .get((req, res) => {
    knex.select()
      .from('tweets')
      .where('tweet_text', 'like', `%${req.body.brand}%`)
      .then((tweets) => {
        res.send(tweets)
      })
  })

module.exports = router
