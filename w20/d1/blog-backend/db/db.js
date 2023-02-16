import Sequelize from "sequelize";
import PostModel from "./Post.js";

const db = new Sequelize("postgres://hackupstate@localhost:5432/blog");
const Post = PostModel(db);

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

export { db, Post };
