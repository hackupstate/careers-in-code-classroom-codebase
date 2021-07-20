const DT = require("sequelize").DataTypes;

module.exports = (db) => {
	return db.define("customer", {
		customerID: {
			type: DT.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		firstName: DT.STRING,
		lastName: DT.STRING,
		phoneNumber: DT.STRING,
		address1: DT.STRING,
		address2: DT.STRING,
		city: DT.STRING,
		state: DT.STRING(2),
		zipCode: DT.STRING(5),
	});
};
