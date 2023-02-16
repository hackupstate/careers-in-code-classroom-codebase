import express from "express";
import cors from "cors";
import { db, Post, User } from "./db/db.js";
import bcrypt from "bcrypt";

const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
	res.send("Welcome to my blog API");
});

server.post("/newPost", async (req, res) => {
	await Post.create(req.body);
	res.send({ status: "ok" });
});

server.get("/posts", async (req, res) => {
	const posts = await Post.findAll();
	res.send({ posts });
});

server.get("/post/:id", async (req, res) => {
	const post = await Post.findByPk(req.params.id);
	res.send({ post });
});

server.delete("/post/:id", async (req, res) => {
	const post = await Post.findByPk(req.params.id);
	await post.destroy();
	res.send({ deleted: "he's dead, jim 🖖" });
});

server.post("/login", async (req, res) => {
	res.send({ loggedIn: true });
});

const serverStarted = async () => {
	const user = await User.findOne({ email: "max@zane.tech" });
	if (!user) {
		await User.create({
			email: "max@zane.tech",
			firstName: "Max",
			password: bcrypt.hashSync("qwerty", 10),
		});
	}
};
serverStarted();

server.listen(3001, () => {
	console.log("Server running on port 3001");
});
