const Sequelize = require("sequelize");

const db = new Sequelize(`postgres://maxmatthews@localhost:5432/messages2`, {
	// logging: false,
});

const Message = require("./Message")(db);
const User = require("./User")(db);
const Room = require("./Room")(db);

const connectToDB = async () => {
	try {
		await db.authenticate();
		console.log("DB connected successfully");
	} catch (e) {
		console.error(`DB connection failed. Everybody panic!`);
	}

	db.sync();
};

Message.belongsTo(User, { foreignKey: "userID" });
Message.belongsTo(Room, { foreignKey: "roomID" });

connectToDB();

module.exports = { db, Message, User, Room };
