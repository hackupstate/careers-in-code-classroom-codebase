const num1 = 5;
const num2 = 8;
const str = "dog";
const arr = ["dog", "cat", 5, 6, false];
const obj = { key: "value", animal: str, myList: arr };
const isTrue = true;
let myVar;
console.log(myVar); //undefined (or null)
const sum = num1 + num2;
console.log(sum);
console.log(obj.animal);
console.log(obj["animal"]);
const nameOfList = "myList";
console.log(obj[nameOfList][1]);

if (num1 === 5) {
	console.log("This code runs because num1 is 5");
} else {
	console.log("The number is not 5" + ". And the number is still not 5");
}

function myFunc1(param1) {
	console.log("this runs when func1 is called" + param1);
}

const myFunc2 = (param1) => {
	console.log("this runs when func2 is called" + param1);
};

myFunc1("hello");
myFunc2(true);

for (let i = 1; i <= 5; i++) {
	console.log(`This loop has run` + i + ` times`);
	console.log(`This loop has run ${i} times`);
}

/*
This loop has run 1 times
This loop has run 2 times
This loop has run 3 times
This loop has run 4 times
This loop has run 5 times
*/

for (let data of arr) {
	console.log(data);
}

let keepRunning = true;
let loopCount = 0;
while (keepRunning === true) {
	console.log("Loop running");
	loopCount++;
	if (loopCount > 5) {
		keepRunning = false;
	}
}

document.getElementById("id1").innerHTML = str;
document.getElementById("id1").onclick = () => {
	console.log("Id1 was clicked");
};
