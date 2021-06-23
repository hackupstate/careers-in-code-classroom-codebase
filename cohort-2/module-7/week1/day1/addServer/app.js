const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json())

app.get("/", (request, response) => {
    response.send("Hello World!")
});

//http://localhost:3000/add/5/6
app.get("/add/:num1/:num2", function (req, res) {
    console.log(req.params.num1)
    res.send(`${parseInt(req.params.num1) + parseInt(req.params.num2)}`);
})

//http://localhost:3000/add2?firstNum=2&secondNum=3
app.get("/add2", (req, res) => {
    console.log(req.query)
    res.send(`${parseInt(req.query.firstNum) + parseInt(req.query.secondNum)}`);
})


app.post("/add3", (req, res) => {
    console.log(req.body)
    res.send({ sum: req.body.num1 + req.body.num2, foo: "bar", myArr: ["Abc", "Def"] });
})

app.listen(3000, () => {
    console.log(`Server is running on port 3000`)
})
