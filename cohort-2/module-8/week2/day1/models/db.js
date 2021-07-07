const Sequelize = require("sequelize");

const db = new Sequelize(`postgres://maxmatthews@localhost:5432/messages2`, {
	logging: false,
});

const connectToDB = async () => {
	try {
		await db.authenticate();
		console.log("DB connected successfully");
	} catch (e) {
		console.error(`DB connection failed. Everybody panic!`);
	}

	require("./Message")(db);
	db.sync();
};

connectToDB();

module.exports = { db };
