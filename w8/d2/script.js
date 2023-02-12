const buttonClicked = (event) => {
	const buttonText = event.target.innerHTML;
	const screen = document.getElementById("screen");
	if (screen.innerHTML === "0" || screen.innerHTML === "ERROR") {
		screen.innerHTML = buttonText;
	} else {
		screen.innerHTML = screen.innerHTML + buttonText;
	}
};

function equalClicked () {
	
}

const equalClicked = (event) => {
	try {
		const input = document.getElementById("screen").innerHTML;
		const output = eval(input);
		document.getElementById("screen").innerHTML = output;
	} catch (error) {
		document.getElementById("screen").innerHTML = "ERROR";
	}
};

const clearClicked = (event) => {
	document.getElementById("screen").innerHTML = "0";
};

document.addEventListener("keydown", (event) => {
	// console.log(event.key);
	const screen = document.getElementById("screen");
	const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
	if (numbers.includes(event.key)) {
		if (screen.innerHTML === "0" || screen.innerHTML === "ERROR") {
			screen.innerHTML = event.key;
		} else {
			screen.innerHTML = screen.innerHTML + event.key;
		}
	} else if (["*", "/", "+", "-"].includes(event.key)) {
		screen.innerHTML = screen.innerHTML + event.key;
	} else if (event.key === "Enter" || event.key === "=") {
		equalClicked();
	} else if (event.key === "Backspace") {
		clearClicked();
	}
});
