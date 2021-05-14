function numButtonPressed(num) {
	const screenDiv = document.getElementById("screen");

	if (screenDiv.innerHTML === "0") {
		screenDiv.innerHTML = num;
	} else {
		screenDiv.innerHTML = screenDiv.innerHTML + num;
	}
}

function equalButtonPressed() {
	const screenDiv = document.getElementById("screen");
	try {
		const result = eval(screenDiv.innerHTML);
		screenDiv.innerHTML = result;
	} catch (error) {
		console.error(error);
		const screenBeforeError = screenDiv.innerHTML;
		screenDiv.innerHTML = "ERROR";

		setTimeout(function () {
			screenDiv.innerHTML = screenBeforeError;
		}, 3000);
	}
}

function clearButtonPressed() {
	const screenDiv = document.getElementById("screen");
	if (screenDiv.innerHTML.length === 1) {
		screenDiv.innerHTML = 0;
	} else {
		screenDiv.innerHTML = screenDiv.innerHTML.slice(
			0,
			screenDiv.innerHTML.length - 1
		);
	}
}

function plusMinusButtonPressed() {
	const screenDiv = document.getElementById("screen");
	const currentResult = eval(screenDiv.innerHTML);
	screenDiv.innerHTML = currentResult * -1;
}

function percentButtonPressed() {
	const screenDiv = document.getElementById("screen");
	const currentResult = eval(screenDiv.innerHTML);
	screenDiv.innerHTML = currentResult / 100;
}

document.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		equalButtonPressed();
	}
	if (event.key === "Backspace") {
		clearButtonPressed();
	}
	const operatorSymbols = ["/", "*", "+", "-", "."];
	if (!isNaN(event.key) || operatorSymbols.includes(event.key)) {
		numButtonPressed(event.key);
	}
});
