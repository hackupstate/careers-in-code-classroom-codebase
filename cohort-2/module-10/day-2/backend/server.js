const cors = require('cors');
const express = require('express')

function createServer() {
  const app = express()
  app.use(express.json())
  app.use(cors());

  app.get('/ping', (req, res) => {
    res.send('Pong! ')
  })
  return app
};


module.exports = createServer