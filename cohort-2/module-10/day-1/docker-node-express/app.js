const createServer = require("./server");
let port = process.env.PORT;
if (!port) {
  port = 3000;
}

let app = createServer();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});