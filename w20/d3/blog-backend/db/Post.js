import { DataTypes } from "sequelize";

const Post = (db) => {
	return db.define("post", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: DataTypes.STRING,
		tagline: DataTypes.STRING,
		content: DataTypes.TEXT,
	});
};

export default Post;
