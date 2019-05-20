/*eslint no-console: "off"*/
const server = require('./server')

const PORT = process.env.PORT || 5000

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
