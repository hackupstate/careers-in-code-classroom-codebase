const server = require("express")();
server.use(require("body-parser").json());
server.use(require("cors")());

const { db, Customer } = require("./models/db.js");

server.get("/", (req, res) => {
	res.send({ hello: "world" });
});

server.get("/customers/:pageNum", async (req, res) => {
	const page = parseInt(req.params.pageNum);
	res.send({
		customers: await Customer.findAndCountAll({
			limit: 5,
			offset: 5 * (page - 1),
		}),
	});
});

server.post("/customers", async (req, res) => {
	if (req.body.zipCode.length !== 5) {
		res.send({ error: "Zip code too short. Your front end cheater!" });
	} else {
		await Customer.create(req.body);
		res.send({ customers: await Customer.findAll() });
	}
});

server.listen(3001, () => {
	console.log("Server is running on 3001");
});
