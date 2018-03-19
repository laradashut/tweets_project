exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('brands', function (table) {
      table.increments('id').unsigned().primary()
      table.string('brand_name', 1000).notNullable()
      table.foreign('id')
    }),
    knex.schema.createTableIfNotExists('tweets', function (table) {
      table.increments('id').unsigned().primary()
      table.string('id_str', 1000).notNullable()
      table.string('created_at', 1000).nullable()
      table.string('tweet_text', 100000).nullable()
      table.integer('retweeted_count').nullable()
      table.integer('favourites_count').nullable()
      table.string('user_name', 1000).nullable()
      table.string('user_profile_image_url', 1000).nullable()
      table.integer('sentiment_score').nullable()
      table.integer('brand_id').references('brands.id').onDelete('CASCADE')
      table.foreign('id')
    }),
    knex.schema.createTableIfNotExists('sentiment_data', function (table) {
      table.increments('id').unsigned().primary()
      table.integer('brand_id').references('brands.id').onDelete('CASCADE')
      table.integer('tweet_id').references('tweets.id').onDelete('CASCADE')
      table.integer('tweet_score').notNullable()
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('brands'),
    knex.schema.dropTable('tweets'),
    knex.schema.dropTable('sentiment_data')
  ])
}
