const DataTypes = require("sequelize").DataTypes;

module.exports = (db) => {
	return db.define(
		"message",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			timestamp: DataTypes.DATE,
			content: DataTypes.TEXT,
			received: DataTypes.BOOLEAN,
		},
		{ timestamps: false }
	);
};
