const DataTypes = require("sequelize").DataTypes;

module.exports = (db) => {
	return db.define(
		"message",
		{
			messageID: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			sentTime: DataTypes.DATE,
			content: DataTypes.TEXT,
			received: DataTypes.BOOLEAN,
			userID: DataTypes.INTEGER,
			roomID: DataTypes.INTEGER,
		},
		{ timestamps: false }
	);
};
