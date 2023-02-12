const animals = ["dog", "cat", "elephant"];

for (const animal of animals) {
	console.log(animal);
}

for (let i = 0; i < animals.length; i++) {
	console.log(i);
	console.log(animals[i]);
}

let counter = 0;

while (counter < 100) {
	console.log(counter);
	if (Math.random() < 0.5) {
		counter += 10;
	}
}

for (let loopCounter = 0; loopCounter < 100; loopCounter += 10) {
	// console.log(loopCounter);
}

const num = 0;

if (num < 0) {
	console.log("negative");
} else if (num == 0) {
	console.log("it's zero");
} else {
	console.log("positive");
}
