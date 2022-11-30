let lastThingClicked;

const anyButtonClicked = (event) => {
	if (lastThingClicked) {
		lastThingClicked.classList.remove("lastClicked");
	}

	event.target.classList.add("lastClicked");
	lastThingClicked = event.target;
};

const buttonClicked = (event) => {
	anyButtonClicked(event);
	const buttonText = event.target.innerHTML;
	const screen = document.getElementById("screen");
	if (screen.innerHTML === "0" || screen.innerHTML === "ERROR") {
		screen.innerHTML = buttonText;
	} else {
		screen.innerHTML = screen.innerHTML + buttonText;
	}
};

const equalClicked = (event) => {
	try {
		//get the input from the screen
		const input = document.getElementById("screen").innerHTML;
		//run the input to get the output
		const output = eval(input);
		//put the output back on the screen
		document.getElementById("screen").innerHTML = output;
	} catch (error) {
		document.getElementById("screen").innerHTML = "ERROR";
	}
	anyButtonClicked(event);
};

const clearClicked = (event) => {
	anyButtonClicked(event);
	document.getElementById("screen").innerHTML = "0";
};

document.addEventListener("keydown", (event) => {
	//set up place to store the actual number getting pressed
	let numPressed;
	//check the event code to see what number was pressed
	if (event.code === "Digit1") {
		numPressed = 1; //store the number instead of the string with 'digit' in it
	} else if (event.code === "Digit2") {
		numPressed = 2;
	}

	//get the screen from the HTML
	const screen = document.getElementById("screen");
	//add the number pressed to the existing HTML in the screen
	screen.innerHTML = screen.innerHTML + numPressed;
});
