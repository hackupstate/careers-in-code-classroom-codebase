const vehicles = [
	{
		make: "Ford",
		models: [
			{
				name: "focus",
				class: "sedan",
				features: [
					"abs breaks",
					"daytime running lights",
					"sirius xm",
					"anti-theft locks",
				],
				doors: ["2 door", "4 door"],
			},
			{
				name: "exploer",
				class: "suv",
				features: [
					"abs breaks",
					"daytime running lights",
					"sirius xm",
					"power locks",
					"power windows",
				],
				doors: ["2 door", "4 door"],
			},
			{
				name: "f-150",
				class: "pickup-truck",
				features: [
					"abs breaks",
					"daytime running lights",
					"sirius xm",
					"anti-theft locks",
				],
				doors: ["2 door", "4 door"],
			},
		],
	},
	{
		make: "Chevrolet",
		models: [
			{
				name: "cruze",
				class: "sedan",
				features: [
					"abs breaks",
					"daytime running lights",
					"sirius xm",
					"moon-roof",
				],
				doors: ["2 door", "4 door"],
			},
			{
				name: "tahoe",
				class: "suv",
				features: [
					"abs breaks",
					"daytime running lights",
					"sirius xm",
					"moon-roof",
					"anti-theft locks",
				],
				doors: ["2 door", "4 door"],
			},
			{
				name: "silverado",
				class: "pickup-truck",
				features: [
					"abs breaks",
					"daytime running lights",
					"sirius xm",
					"power locks",
					"power windows",
				],
				doors: ["2 door", "4 door"],
			},
		],
	},
	{
		make: "toyota",
		models: [
			{
				name: "venza",
				class: "sedan",
				features: [
					"abs breaks",
					"daytime running lights",
					"sirius xm",
					"moon-roof",
				],
				doors: ["2 door", "4 door"],
			},
			{
				name: "highlander",
				class: "suv",
				features: [
					"abs breaks",
					"daytime running lights",
					"sirius xm",
					"moon-roof",
					"anti-theft locks",
				],
				doors: ["2 door", "4 door"],
			},
			{
				name: "tundra",
				class: "pickup-truck",
				features: [
					"abs breaks",
					"daytime running lights",
					"sirius xm",
					"power locks",
					"power windows",
				],
				doors: ["2 door", "4 door"],
			},
		],
	},
];

//print out all the vehicle types
// console.log(vehicles[0].type);
// console.log(vehicles[1].type);
// console.log(vehicles[2].type);
for (const carDetails of vehicles) {
	console.log(carDetails.make);
}

//print out all the models in Chevrolet
for (const model of vehicles[1].models) {
	console.log(model.name);
}

//print out all the class names along with the type of model
for (const manufacturer of vehicles) {
	for (const model of manufacturer.models) {
		console.log(model.class, manufacturer.make);
	}
}

//print out all the features
for (const manufacturer of vehicles) {
	for (const model of manufacturer.models) {
		for (const feature of model.features) {
			console.log(model.name + ": " + feature);
		}
	}
}
//print out your door preference with each name
for (const manufacturer of vehicles) {
	for (const car of manufacturer.models) {
		console.log(car.name + " " + car.doors[1]);
	}
}
