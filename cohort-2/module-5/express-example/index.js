const express = require('express');
const app = express();

function myRoute(req, res) {
  res.status(200);
  res.set('Content-Type', 'text/html');
  res.send('<p>Hello world!</p>');
}

app.get('/', myRoute);

app.listen(5000);
