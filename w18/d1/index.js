import express from "express";

const server = express();

server.get("/", (req, res) => {
	res.send("Hello world!");
});

server.get("/data", (req, res) => {
	res.send({ hello: "world" });
});

server.listen(3001);
