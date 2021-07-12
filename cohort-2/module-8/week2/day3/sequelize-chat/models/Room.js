const DataTypes = require("sequelize").DataTypes;

module.exports = (db) => {
	return db.define("room", {
		roomID: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING,
	});
};
