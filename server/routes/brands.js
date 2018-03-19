'use strict'
const express = require('express')
const router = express.Router()
// const bodyParser = require('body-parser')
const { knex } = require('../../db')

router.route('/')
  .get((req, res) => {
    knex.select()
      .from('brands')
      .then((brand) => {
        res.send(brand)
      })
  })

module.exports = router
