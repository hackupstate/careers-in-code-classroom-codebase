const express = require("express");
const server = express();
const cors = require("cors");
server.use(cors({ origin: "http://localhost:3000", credentials: true }));
const bodyParser = require("body-parser");
server.use(bodyParser.json());
const bcrypt = require("bcrypt");
const sessions = require("express-session");

const oneMonth = 1000 * 60 * 60 * 24 * 30; // creating 30 days from milliseconds

const { db, User, Post } = require("./db/db.js");

var SequelizeStore = require("connect-session-sequelize")(sessions.Store);
server.use(
	sessions({
		secret: "mysecretkey",
		cookie: { maxAge: oneMonth },
		store: new SequelizeStore({ db }),
	})
);

server.get("/", (req, res) => {
	res.send({ hello: "world" });
});

server.get("/loginStatus", (req, res) => {
	if (req.session.user) {
		res.send({ loggedIn: true });
	} else {
		res.send({ loggedIn: false });
	}
});

server.get("/logout", (req, res) => {
	req.session.destroy();
	res.send({ loggedIn: false });
});

server.post("/login", async (req, res) => {
	if (req.session.user) {
		res.send({ success: true, message: "they already had a session" });
	} else {
		const user = await User.findOne(
			{ where: { username: req.body.username } },
			{ raw: true }
		);
		if (!user) {
			res.send({ error: "username not found" });
		} else {
			const matchingPassword = await bcrypt.compare(
				req.body.password,
				user.password
			);
			if (matchingPassword) {
				req.session.user = user;
				res.send({ success: true, message: "open sesame" });
			} else {
				res.send({ error: "no go. passwords no match." });
			}
		}
	}
});

const authRequired = (req, res, next) => {
	if (!req.session.user) {
		res.status(401).send({ error: true, message: "you must be logged in" });
	} else {
		next();
	}
};

server.get("/posts", async (req, res) => {
	res.send({ posts: await Post.findAll() });
});

server.get("/post/:id", async (req, res) => {
	res.send({ post: await Post.findByPk(req.params.id) });
});
server.post("/post/:id", authRequired, async (req, res) => {
	const postDB = await Post.findByPk(req.params.id);
	postDB.content = req.body.postContent;
	postDB.title = req.body.postTitle;
	await postDB.save();
	res.send({ message: "Post updated" });
});

server.post("/post", authRequired, async (req, res) => {
	await Post.create({
		userID: req.session.user.id,
		content: req.body.postContent,
		title: req.body.postTitle,
	});
	res.send({ message: "Post created" });
});

server.delete("/post/:id", authRequired, async (req, res) => {
	await Post.destroy({ where: { id: req.params.id } });
	res.send({ success: true, message: "Post deleted" });
});

server.listen(3001, () => {
	console.log("Server running.");
});

const createFirstUser = async () => {
	const users = await User.findAll();
	if (users.length === 0) {
		User.create({
			username: "max",
			password: bcrypt.hashSync("supersecret", 10),
		});
	}
};

createFirstUser();
