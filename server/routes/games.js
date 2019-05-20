const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json())

const db = require('../db/db')

router.get('/games', (req, res) => {
  db.getGames()
  .then(result => {res.json(result)})
  .catch(err => res.status(500).end)
})
//====================================================
router.get('/games/game/:id', (req, res) => {
  let {id} = req.body
  db.getGameData(id)
  .then(result => {res.json(result)})
  .catch(err => res.status(500).end)
})
//====================================================
module.exports = router
