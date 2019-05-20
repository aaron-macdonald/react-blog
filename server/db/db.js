const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

//====================================================
function getPlayers() {
  return knex('Players')
    .select()
}
//====================================================
function getGames() {
  return knex('Games')
    .select()
}
//====================================================
function getTable() {
  return knex('Games')
    .join('Gamedata', 'Games.id', '=', 'Gamedata.game_id')
    .join('Players', 'Players.id', '=', 'Gamedata.player_id')
    .select('player_id', 'knickName', 'position', 'buyin', 'rebuys', 'addons', 'prizemoney' )
}
//====================================================
function getPlayerData(id) {
  return knex ('Players')
  .join('Gamedata', 'Players.id', '=', 'Gamedata.player_id')
  .join('Games', 'Games.id', '=', 'Gamedata.game_id')
}
//====================================================
function getGameData(id) {
  return knex('Gamedata')
    .join('Players', 'Players.id', '=', 'Gamedata.player_id')
}
//====================================================
function addPlayer(e) {
  return knex('players')
    .insert({
      firstName: e.firstName,
      surName: e.surName,
      knickName: e.knickName,
      favHand: e.favHand,
      favHeadsUp: e.favHeadsUp,
      leastFavHeadsUp: e.leastFavHeadsUp,
      image: e.image
    })
}
//====================================================
function editPlayer(id, e) {
  return knex('Players')
    .where('id', id)
    .update({
      firstName: e.firstName,
      surName: e.surName,
      knickName: e.knickName,
      favHand: e.favHand,
      favHeadsUp: e.favHeadsUp,
      leastFavHeadsUp: e.leastFavHeadsUp,
      image: e.image
    })
}
//====================================================
module.exports = {
  getPlayers,
  getGames,
  getTable,
  getPlayerData,
  getGameData,
  addPlayer,
  editPlayer
}
