import express from "express";
import cors from "cors";
// const express = require('expresss')

const server = express();

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
	res.send("Hello world!");
});

server.get("/data", (req, res) => {
	console.log(req.query);
	const num1 = parseInt(req.query.num1);
	const num2 = parseInt(req.query.num2);
	res.send({ hello: "world", sum: num1 + num2 });
});

server.get("/add/:num1/:num2", (req, res) => {
	const num1 = parseInt(req.params.num1);
	const num2 = parseInt(req.params.num2);
	res.send({ sum: num1 + num2 });
});

server.post("/add", (req, res) => {
	console.log(req.body);
	res.send({ sum: parseInt(req.body.num1) + parseInt(req.body.num2) });
});

server.listen(3001);
