const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json())

const db = require('../db/db')

//====================================================
router.get('/players', (req, res) => {
  db.getPlayers()
    .then(result => {res.json(result)})
    .catch(err => res.status(500).end)
})
//====================================================
router.post('/player/add', (req, res) => {
  let player = req.body
  db.addPlayer(player)
  .then(result => res.json(result))
  .catch(err => res.status(500).end)
})
//====================================================
router.put('/player/:id/edit', (req, res) => {
  let {id} = req.body
  db.editPlayer( id, req.body)
    .then(result => res.json(result))
    .catch(err => res.status(500).end)
})
//====================================================
router.get('/players/player/:id', (req, res) => {
  let {id} = req.body
  db.getPlayerData(id)
    .then(result => {res.json(result)})
    .catch(err => res.status(500).end)
})
//====================================================
module.exports = router
