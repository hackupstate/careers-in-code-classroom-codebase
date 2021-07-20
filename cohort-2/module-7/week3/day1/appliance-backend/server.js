const server = require("express")();
server.use(require("body-parser").json());
server.use(require("cors")());

const { db, Customer } = require("./models/db.js");

server.get("/", (req, res) => {
	res.send({ hello: "world" });
});

server.get("/customers", async (req, res) => {
	res.send({ customers: await Customer.findAll() });
});

server.post("/customers", async (req, res) => {
	await Customer.create(req.body);
	res.send({ customers: await Customer.findAll() });
});

server.listen(3001, () => {
	console.log("Server is running on 3001");
});
