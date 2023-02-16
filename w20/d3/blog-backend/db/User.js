import { DataTypes } from "sequelize";

const User = (db) => {
	return db.define("user", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		email: DataTypes.STRING,
		password: DataTypes.STRING,
		firstName: DataTypes.STRING,
	});
};

export default User;
