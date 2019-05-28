import request from 'superagent'

// To get around cors for now
const localhost = 'http://localhost:5000' 

export function getPlayers () {
  return request.get(localhost + '/api/v1/players/players')
    .then(result => {
      const players = result.body
      return players
    })
    .catch(err => {
      throw Error('Cannot get players!')
    })
}

export function addPlayer (player) {
  return request.post(localhost + '/api/v1/players/player/add')
  .send(player)
  .then(result => {
    return result.body
  })
  .catch(err => {
    throw Error('Cannot add a player!')
  })
}

export function updatePlayer (player) {
  const{id} = player
  return request.put(localhost + `/api/v1/players/player/${id}/edit`)
  .send(player)
  .then(result => {
    return result.body
  })
  .catch(err => {
    throw Error('Cannot update player!')
  })
}

export function getPlayerData(id) {
  return request.get(localhost + `/api/v1/players/players/player/${id}`)
  .send(id)
  .then(result => {
    return JSON.parse(result.text)
  })
  .catch(err => {
    throw Error('Cannot get player data')
  })
}

export function getGames() {
  return request.get(localhost + '/api/v1/games/games')
    .then(result => {
      const games = result.body
      return games
    })
    .catch(err => {
      throw Error('Cannot get games!')
    })
}

export function getGameData(id) {
  return request.get(localhost + `/api/v1/games/games/game/${id}`)
    .send(id)
    .then(result => {
      return JSON.parse(result.text)
    })
    .catch(err => {
      throw Error('Cannot get gamedata!')
    })
}

export function getTableData(id) {
  return request.get(localhost + `/api/v1/table/table`)
    .then(result => {
      return JSON.parse(result.text)
    })
    .catch(err => {
      throw Error('Cannot get table data!')
    })
}
