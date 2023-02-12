// #1 Import packages we need from npm
import express from "express";
import cors from "cors";
import Postgres from "pg";

// #2 Setup express and cors and json parsing
const server = express();
server.use(cors());
server.use(express.json());

// #3 Configure database client from pg package and include WHICH database to use
const client = new Postgres.Client({
	database: "chat",
});

// #4 Actually connect to the DB using the info above
client.connect();

server.get("/", (req, res) => {
	res.send("Hello World");
});

// #14 Express matches request to /messages to this function
server.get("/messages", async (req, res) => {
	// #15 Use the client from #3 & #4 to run a SQL query in postgres and store the results in dbResult
	const dbResult = await client.query("SELECT * FROM messages");
	console.log(dbResult);

	// #16 Send back the resulting rows in an JSON object with a key of messages in the RESponse
	res.send({ messages: dbResult.rows });
});

// #25 Request comes in to POST a new message
server.post("/message", async (req, res) => {
	//#26 Generate an SQL insert statement and run it that includes the message's text from the req's body (#24E)
	await client.query(
		`INSERT INTO messages (text, timestamp, sent) VALUES ('${req.body.text}', NOW(), true)`
	);
	res.send({ messages });
});

// #5 Listen on port 3001 for incoming requests
server.listen(3001, () => {
	console.log("Server is running on port 3001");
});
