exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('Players', function(table) {
    table.increments().primary()
    table.string('firstName')
    table.string('surName')
    table.string('knickName')
    table.string('favHand')
    table.string('favHeadsUp')
    table.string('leastFavHeadsUp')
    table.string('image')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Players')
}
