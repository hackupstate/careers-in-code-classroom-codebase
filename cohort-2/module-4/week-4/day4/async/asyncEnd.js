// function convertNumbers(arr, functionToCall) {
// 	setTimeout(function () {
// 		console.log("numbers converted");
// 		functionToCall([parseInt(arr[0]), parseInt(arr[1])]);
// 	}, 1000);
// }

// function addNumbers(arr, deliverSumResults) {
// 	setTimeout(function () {
// 		console.log("numbers added");
// 		deliverSumResults(arr[0] + arr[1]);
// 	}, 1000);
// }

// function calculateAverage(sum, deliverFinalResult) {
// 	setTimeout(function () {
// 		console.log("Average calculated");
// 		deliverFinalResult(sum / 2);
// 	}, 1000);
// }

// convertNumbers(["1", "5"], function (convertResult) {
// 	addNumbers(convertResult, function (sum) {
// 		calculateAverage(sum, function (average) {
// 			console.log("Welcome to callback hell");
// 			console.log(average);
// 		});
// 	});
// });

//Promise
function convertNumbers(arr) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			resolve([parseInt(arr[0]), parseInt(arr[1])]);
		}, 1000);
	});
}

function addNumbers(arr) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			resolve(arr[0] + arr[1]);
		}, 1000);
	});
}

function calculateAverage(sum) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			resolve(sum / 2);
		}, 1000);
	});
}

// convertNumbers(["5", "10"])
// 	.then(function (convertedNumbers) {
// 		return addNumbers(convertedNumbers);
// 	})
// 	.then(function (sum) {
// 		return calculateAverage(sum);
// 	})
// 	.then(function (result) {
// 		console.log(result);
// 	});

// async function myAsyncFunction() {
// 	const convertedNumbers = await convertNumbers(["3", "9"]);
// 	console.log(convertedNumbers);

// 	const sum = await addNumbers(convertedNumbers);
// 	console.log(sum);

// 	const average = await calculateAverage(sum);
// 	console.log(average);
// }

// myAsyncFunction();

function generateRandomNumber(order) {
	console.log(`starting to generate ${order} number`);
	const howLongToGenerateNumber = Math.random() * 10000;
	console.log(howLongToGenerateNumber);
	return new Promise(function (resolve) {
		setTimeout(function () {
			const randNum = Math.floor(Math.random() * 10);
			console.log(`Generated ${order} number: ${randNum}`);
			resolve(randNum);
		}, howLongToGenerateNumber);
	});
}

async function generateTwoRandomNumbers() {
	console.time(`Total Run Time`);
	let rand1 = generateRandomNumber("first");
	let rand2 = generateRandomNumber("second");

	console.log(
		`Some other code work here while the other functions are running ${5 + 2}`
	);
	[rand1, rand2] = await Promise.all([rand1, rand2]);

	console.log(rand1, rand2);
	console.timeEnd(`Total Run Time`);
}
generateTwoRandomNumbers();
