const db = require('../')

const Tweets = db.Model.extend({
  tableName: 'tweets',
  brands: function () {
    return this.belongsTo('Brands')
  }
})

module.exports = db.model('Tweets', Tweets)
