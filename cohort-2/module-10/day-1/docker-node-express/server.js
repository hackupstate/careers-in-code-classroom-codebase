const express = require('express')



function createServer() {
  const app = express()
  app.use(express.json())

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  return app
};


module.exports = createServer