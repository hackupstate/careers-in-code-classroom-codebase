const express = require("express");
const server = express();
const cors = require("cors");
server.use(cors());
const bodyParser = require("body-parser");
server.use(bodyParser.json());

const { Client } = require("pg");
const db = new Client({ user: "maxmatthews", database: "messages1" });
db.connect();
// db.query("SELECT NOW()", (err, res) => {
// 	console.log(res);
// });
server.get(`/messages`, async (req, res) => {
	const messagesDB = await db.query(
		`SELECT id, content, timestamp, received FROM messages`
	);
	res.send({
		messages: messagesDB.rows.map((message) => {
			// console.log(message);
			return { ...message, text: message.content };
		}),
	});
});

server.post(`/messages`, async (req, res) => {
	const insertQuery = await db.query(`INSERT INTO messages 
	(timestamp, received, content)
	VALUES (NOW(), false, '${req.body.text}')`);

	const messagesDB = await db.query(
		`SELECT id, content, timestamp, received FROM messages`
	);
	res.send({
		messages: messagesDB.rows.map((message) => {
			// console.log(message);
			return { ...message, text: message.content };
		}),
	});
});

server.put("/messages/:id", async (req, res) => {
	const updateQuery = await db.query(
		`UPDATE messages SET content='${req.body.text}' WHERE id=${req.params.id}`
	);
	const messagesDB = await db.query(
		`SELECT id, content, timestamp, received FROM messages`
	);
	res.send({
		messages: messagesDB.rows.map((message) => {
			// console.log(message);
			return { ...message, text: message.content };
		}),
	});
});

server.delete("/messages/:id", async (req, res) => {
	const deleteQuery = await db.query(
		`DELETE FROM messages WHERE id=${req.params.id}`
	);
	const messagesDB = await db.query(
		`SELECT id, content, timestamp, received FROM messages`
	);
	res.send({
		messages: messagesDB.rows.map((message) => {
			// console.log(message);
			return { ...message, text: message.content };
		}),
	});
});

server.get("/", (req, res) => {
	res.send("Hello World");
});

server.listen(3001, () => {
	console.log(`Backend Server listening on port 3001`);
});
