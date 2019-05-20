exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('Games', function(table) {
    table.increments().primary()
    table.date('date')
    table.string('location')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Games')
}
