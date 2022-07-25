const Sequelize = require("sequelize");

const db = new Sequelize("postgres://hackupstate@localhost:5432/blog", {
	logging: false,
});
const User = require("./User")(db);
const Post = require("./Post")(db);

const connectToDB = async () => {
	try {
		await db.authenticate();
		console.log("Connected successfully");
		db.sync(); //{ force: true }
	} catch (error) {
		console.error(error);
		console.error("PANIC! DB PROBLEMS!");
	}
};

connectToDB();

module.exports = { db, User, Post };
