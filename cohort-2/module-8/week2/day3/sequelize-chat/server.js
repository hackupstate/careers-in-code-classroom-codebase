const express = require("express");
const server = express();

const cors = require("cors");
server.use(cors());

const bodyParser = require("body-parser");
server.use(bodyParser.json());

const { db } = require("./models/db");
const { Message, User, Room } = require("./models/db");

server.get("/playground", async (req, res) => {
	// await User.create({
	// 	username: "max",
	// 	password: "superSecret",
	// 	displayName: "Max Matthews",
	// });
	// await Room.create({ name: "Cool Kids Only" });
	// await Room.create({ name: "The Rest of the Kids" });

	// await Message.create({
	// 	sentTime: new Date(),
	// 	content: "Look ma! My first message",
	// 	received: false,
	// 	userID: 1,
	// 	roomID: 2,
	// });

	// const messageDB = await Message.findOne({
	// 	where: { content: "Look ma! My first message" },
	// });

	// const userDB = await User.findOne({ where: { userID: messageDB.userID } });

	const messageDB = await Message.findOne({
		where: { content: "Look ma! My first message" },
		include: [User, Room],
	});

	res.send({ messageDB });
});
server.get(`/`, (req, res) => {
	res.send({ hello: "world" });
});

server.get(`/messages`, async (req, res) => {
	res.send({ messages: await Message.findAll() });
});

server.post(`/messages`, async (req, res) => {
	await Message.create({
		timestamp: new Date(),
		received: req.body.received,
		content: req.body.content,
	});

	const messages = await Message.findAll();

	res.send({ messages });
});

server.delete(`/messages/:id`, async (req, res) => {
	await Message.destroy({ where: { id: req.params.id } });

	res.send({ messages: await Message.findAll() });
});

server.put(`/messages/:id`, async (req, res) => {
	try {
		let myMessage = await Message.findOne({ where: { id: req.params.id } });
		myMessage.content = req.body.content;
		myMessage.timestamp = new Date();
		await myMessage.save();

		res.send({ messages: await Message.findAll() });
	} catch (err) {
		if (err.message === "Cannot set property 'content' of null") {
			await Message.create({
				timestamp: new Date(),
				received: req.body.received,
				content: req.body.content,
				id: req.params.id,
			});

			const messages = await Message.findAll();

			res.send({ messages });
		} else {
			res.send({ error: "Message does not exist to update" });
		}
	}
});

server.listen(3002, () => {
	console.log(`Server is running on 3002`);
});
