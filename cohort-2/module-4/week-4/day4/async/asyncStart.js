// callback hell
function convertNumbers(arr, callback) {
	setTimeout(function () {
		callback([parseInt(arr[0]), parseInt(arr[1])]);
	}, 1000);
}

function addNumbers(arr, callback) {
	setTimeout(function () {
		callback(arr[0] + arr[1]);
	}, 1000);
}

function calculateAverage(sum, callback) {
	setTimeout(function () {
		callback(sum / 2);
	}, 1000);
}

convertNumbers(["1", "3"], function (convertResult) {
	console.log(`Converted: ${convertResult}`);
	addNumbers(convertResult, function (sum) {
		console.log(`Sum: ${sum}`);
		calculateAverage(sum, function (average) {
			console.log(`Average: ${average}`);
		});
	});
});

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

console.log(convertNumbers(["1", "2"]));

convertNumbers(["1", "2"])
	.then(function (convertedNumbers) {
		console.log(`Converted: ${convertedNumbers}`);
		return addNumbers(convertedNumbers);
	})
	.then(function (sum) {
		console.log(`Sum: ${sum}`);
		return calculateAverage(sum);
	})
	.then(function (average) {
		console.log(`Average: ${average}`);
	});

// async/await
(async function () {
	const convertedNumbers = await convertNumbers(["1", "2"]);
	console.log(`Converted: ${convertedNumbers}`);

	const sum = await addNumbers(convertedNumbers);
	console.log(`Sum: ${sum}`);

	const average = await calculateAverage(sum);
	console.log(`Average: ${average}`);
})();

//random number example
function generateRandomNumber(order) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			const randNum = Math.floor(Math.random() * 10);
			console.log(`Generated ${order} number: ${randNum}`);
			resolve(randNum);
		}, Math.random() * 10000);
	});
}

(async function () {
	console.time("Total Run Time");
	let randNum1 = generateRandomNumber(`first`);
	let randNum2 = generateRandomNumber(`second`);
	console.log("We can do more work here while the numbers are being generated");
	[randNum1, randNum2] = await Promise.all([randNum1, randNum2]); //then wait until the numbers are generated
	console.log(randNum1, randNum2);
	console.timeEnd("Total Run Time");
})();
