import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

let messages = [
	{ text: "Received from Backend", timestamp: new Date(), sent: false },
];

server.get("/", (req, res) => {
	res.send("Hello World");
});

server.get("/messages", (req, res) => {
	res.send({ messages });
});

server.post("/message", (req, res) => {
	messages.push(req.body);
	res.send({ messages });
});

server.listen(3001, () => {
	console.log("Server is running on port 3001");
});
