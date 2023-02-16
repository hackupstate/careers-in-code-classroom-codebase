import Sequelize from "sequelize";
import PostModel from "./Post.js";
import UserModel from "./User.js";

const db = new Sequelize("postgres://hackupstate@localhost:5432/blog", {
	logging: false,
});
const Post = PostModel(db);
const User = UserModel(db);

const connectToDB = async () => {
	try {
		await db.authenticate();
		console.log("Connected to DB successfully");

		db.sync();
	} catch (error) {
		console.error(error);
		console.error("PANIC! DB POBLEM!");
	}
};

connectToDB();

export { db, Post, User };
