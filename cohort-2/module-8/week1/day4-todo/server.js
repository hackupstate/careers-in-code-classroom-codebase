const express = require("express");
const server = express();
const cors = require("cors");
server.use(cors());
const bodyParser = require("body-parser");
server.use(bodyParser.json());

const { Client } = require("pg");
const db = new Client({ user: "maxmatthews", database: "todo" });
db.connect();
// db.query("SELECT NOW()", (err, res) => {
// 	if (err) {
// 		console.error(err);
// 	} else {
// 		console.log(res);
// 	}
// });

server.get(`/`, (req, res) => {
	res.send("Hello world my API is running!");
});

const getTodos = async () => {
	const todos = await db.query(`SELECT * FROM todos`);
	return todos.rows;
};

server.get(`/todos`, async (req, res) => {
	res.send({ todos: await getTodos() });
});

server.post(`/todos`, async (req, res) => {
	await db.query(`INSERT INTO todos
    (done, name, timestamp) VALUES (
        false,
        '${req.body.name}',
        NOW()
    )`);

	res.send({ todos: await getTodos() });
});

server.put(`/todos`, async (req, res) => {
	await db.query(
		`UPDATE todos SET name='${req.body.name}' WHERE id=${req.body.id}`
	);
	res.send({ todos: await getTodos() });
});

server.delete(`/todos`, async (req, res) => {
	await db.query(`DELETE FROM todos WHERE id=${req.body.id}`);
	res.send({ todos: await getTodos() });
});

server.listen(3001, () => {
	console.log(`Server is running on 3001`);
});
