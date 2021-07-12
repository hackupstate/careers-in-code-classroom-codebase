const createServer = require("./index");

let app = createServer();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});