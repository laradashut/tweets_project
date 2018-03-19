exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('buckets', function (table) {
      table.increments('id')
      table.string('brand')
      table.integer('sent_score')
      table.timestamp('timestamp').defaultTo(knex.fn.now())
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('brands')
  ])
}
