const Sequelize = require("sequelize");

const db = new Sequelize(`postgres://maxmatthews@localhost:5432/appliances`, {
	logging: false,
});

const Customer = require("./Customer")(db);

const connectToDB = async () => {
	await db.authenticate();
	console.log(`DB Connected successfully`);

	db.sync();
};

connectToDB();

module.exports = { db, Customer };
