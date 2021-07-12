const express = require('express')
const port = 3000


function createServer() {
  const app = express()
  app.use(express.json())

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  return app
};


module.exports = createServer