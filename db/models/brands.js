const db = require('../')

const Brands = db.Model.extend({
  tableName: 'brands',
  brands: function () {
    return this.hasMany('Tweets')
  }
})

module.exports = db.model('Brands', Brands)
