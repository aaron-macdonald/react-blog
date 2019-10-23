import request from 'superagent'

// To get around cors for now
const localhost = 'http://localhost:5000' 

export async function getPlayers () {
  try {
    const result = await request.get(localhost + '/api/v1/players/players');
      const players = result.body;
      return players;
  }
  catch (err) {
    throw Error('Cannot get players!');
  }
}

export async function addPlayer (player) {
  try {
    const result = await request.post(localhost + '/api/v1/players/player/add')
      .send(player);
    return result.body;
  }
  catch (err) {
    throw Error('Cannot add a player!');
  }
}

export async function updatePlayer (player) {
  const{id} = player
  try {
    const result = await request.put(localhost + `/api/v1/players/player/${id}/edit`)
      .send(player);
    return result.body;
  }
  catch (err) {
    throw Error('Cannot update player!');
  }
}

export async function getPlayerData(id) {
  try {
    const result = await request.get(localhost + `/api/v1/players/players/player/${id}`)
      .send(id);
    return JSON.parse(result.text);
  }
  catch (err) {
    throw Error('Cannot get player data');
  }
}

export async function getGames() {
  try {
    const result = await request.get(localhost + '/api/v1/games/games');
    const games = result.body;
    return games;
  }
  catch (err) {
    throw Error('Cannot get games!');
  }
}

export async function getGameData(id) {
  try {
    const result = await request.get(localhost + `/api/v1/games/games/game/${id}`)
      .send(id);
    return JSON.parse(result.text);
  }
  catch (err) {
    throw Error('Cannot get gamedata!');
  }
}

export async function getTableData(id) {
  try {
    const result = await request.get(localhost + `/api/v1/table/table`);
    return JSON.parse(result.text);
  }
  catch (err) {
    throw Error('Cannot get table data!');
  }
}
