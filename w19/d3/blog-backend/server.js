import express from "express";
import cors from "cors";
import { db, Post } from "./db/db.js";

const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
	res.send("Welcome to my blog API");
});

server.post("/post", async (req, res) => {
	await Post.create(req.body);
	res.send({ status: "ok" });
});

server.listen(3001, () => {
	console.log("Server running on port 3001");
});
