
exports.seed = function(knex, Promise) {
  return knex('Gamedata').insert([
    {id: 118, game_id: 15, player_id: 107, buyin: 20, rebuys: 0, addons: 0, position: 2, prizemoney: 120},
    {id: 119, game_id: 15, player_id: 102, buyin: 20, rebuys: 40, addons: 0, position: 1, prizemoney: 140},
    {id: 120, game_id: 15, player_id: 106, buyin: 20, rebuys: 40, addons: 0, position: 4, prizemoney: 0},
    {id: 121, game_id: 15, player_id: 103, buyin: 20, rebuys: 20, addons: 20, position: 7, prizemoney: 0},
    {id: 122, game_id: 15, player_id: 101, buyin: 20, rebuys: 0, addons: 0, position: 5, prizemoney: 0},
    {id: 123, game_id: 15, player_id: 104, buyin: 20, rebuys: 20, addons: 0, position: 8, prizemoney: 0},
    {id: 124, game_id: 15, player_id: 100, buyin: 20, rebuys: 20, addons: 0, position: 3, prizemoney: 50},
    {id: 125, game_id: 15, player_id: 109, buyin: 20, rebuys: 0, addons: 0, position: 6, prizemoney: 0},

    {id: 126, game_id: 16, player_id: 114, buyin: 20, rebuys: 20, addons: 0, position: 7, prizemoney: 0},
    {id: 127, game_id: 16, player_id: 101, buyin: 20, rebuys: 0, addons: 0, position: 1, prizemoney: 160},
    {id: 128, game_id: 16, player_id: 102, buyin: 20, rebuys: 40, addons: 0, position: 6, prizemoney: 0},
    {id: 129, game_id: 16, player_id: 103, buyin: 20, rebuys: 40, addons: 0, position: 3, prizemoney: 60},
    {id: 130, game_id: 16, player_id: 107, buyin: 20, rebuys: 40, addons: 0, position: 5, prizemoney: 0},
    {id: 131, game_id: 16, player_id: 105, buyin: 20, rebuys: 20, addons: 0, position: 2, prizemoney: 100},
    {id: 132, game_id: 16, player_id: 100, buyin: 20, rebuys: 20, addons: 0, position: 4, prizemoney: 0},


    {id: 133, game_id: 17, player_id: 100, buyin: 20, rebuys: 40, addons: 0, position: 1, prizemoney: 180},
    {id: 134, game_id: 17, player_id: 107, buyin: 20, rebuys: 0, addons: 0, position: 2, prizemoney: 160},
    {id: 135, game_id: 17, player_id: 102, buyin: 20, rebuys: 20, addons: 0, position: 3, prizemoney: 60},
    {id: 136, game_id: 17, player_id: 106, buyin: 20, rebuys: 20, addons: 0, position: 4, prizemoney: 0},
    {id: 137, game_id: 17, player_id: 103, buyin: 20, rebuys: 40, addons: 0, position: 5, prizemoney: 0},
    {id: 138, game_id: 17, player_id: 101, buyin: 20, rebuys: 100, addons: 0, position: 6, prizemoney: 0},
    {id: 139, game_id: 17, player_id: 104, buyin: 20, rebuys: 0, addons: 0, position: 7, prizemoney: 0},
    {id: 140, game_id: 17, player_id: 112, buyin: 20, rebuys: 20, addons: 0, position: 8, prizemoney: 0},

  ])
}
