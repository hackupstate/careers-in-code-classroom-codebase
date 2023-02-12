console.log("Hello World");
console.log(5 + 10);

const num1 = 3;
const num2 = "4";
console.log(num1 + num2);

const firstName = "Max";
const lastName = "Matthews";
console.log("Name length is: " + (firstName.length + lastName.length));

const car = { make: "Toyota", model: "Rav4", year: 2002, dataIWant: false };
console.log(
	"My car is a " + car.make + " " + car.model + " (" + car.year + ")"
);

console.log(car["year"] + ": " + car["make"]);

const dataIWant = "make";
console.log(car[dataIWant]);
console.log(car["dataIWant"]);
console.log(car.dataIWant);
