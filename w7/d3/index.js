let num1 = 6;
const num2 = 5;

// console.log(6 == "6");
// console.log(6 === "6");

if (num1 === num2) {
	/* This will run when the numbers are equal
	This is a comment too.
	*/
	// console.log("Two of the same number");
} else {
	console.log("Different numbers");
}

if (num1 < 5) {
	console.log("That's a small number");
} else if (num2 == 6) {
	console.log("Devil at work");
} else if (num1 < 10) {
	console.log("Medium number");
} else {
	console.log("Must be a bigger number");
}

const animals = ["Dog", "Cat", true, "Snake"];
const myPets = ["Elephant", "Dog"];
console.log(animals[0]);
console.log(animals[2]);

if (animals[0] === myPets[1]) {
	console.log("You've got a doggo");
} else {
	console.log("IDK what animals you have");
}

const students = [
	{ firstName: "Karin", lastName: "Thorne" },
	{
		firstName: "Ariel",
		grade: "F",
		comments: ["Max is awesome", "Best Teacher Ever"],
	},
];
console.log(students[1].comments[1]);

for (let i = 0; i < animals.length; i++) {
	console.log("Animal #" + (i + 1) + ": " + animals[i]);
}

for (const animal of animals) {
	console.log("A animal is: " + animal);
}

let i = 0;
while (i < 10) {
	console.log("Loop has run " + i + " times");
	i = i + 2;
}

const fruits = ["apple", "orange", "banana"];
for (let i = 0; i < 4; i++) {
	try {
		if (fruits[i]) {
			console.log(fruits[i]);
		} else {
			console.log(foots);
		}
	} catch (err) {
		console.log(err);
	}
}
