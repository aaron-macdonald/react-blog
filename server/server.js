const express = require('express')
const cors = require('cors')

const players = require('./routes/players')
const games = require('./routes/games')
const table = require('./routes/table')

const server = express()
server.use(cors())
server.use(express.static('public'))

server.use('/api/v1/players', players)
server.use('/api/v1/games', games)
server.use('/api/v1/table', table)

module.exports = server
