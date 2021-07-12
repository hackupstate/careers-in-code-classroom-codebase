const DataTypes = require("sequelize").DataTypes;

module.exports = (db) => {
	return db.define("user", {
		userID: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		username: DataTypes.STRING,
		password: DataTypes.STRING,
		displayName: DataTypes.STRING,
	});
};
