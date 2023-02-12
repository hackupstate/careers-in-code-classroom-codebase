// const allButtons = document.getElementsByTagName("button");
let board = [
	["", "", ""],
	["", "", ""],
	["", "", ""],
];

//SOURCE: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
const randomNumberBetween = (min, max) => {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const updateHTML = () => {
	console.log(board);
	let htmlToUpdate = "";
	let buttonCounter = 1;
	for (let row of board) {
		htmlToUpdate += "<div>";
		for (let col of row) {
			if (col === "X" || col === "O") {
				htmlToUpdate += `<button id="b${buttonCounter}">${col}</button>
				`;
			} else {
				htmlToUpdate += `<button onclick="buttonClicked(event)" id="b${buttonCounter}">&nbsp;</button>
				`;
			}

			buttonCounter++;
		}
		htmlToUpdate += "</div>";
	}
	document.getElementById("board").innerHTML = htmlToUpdate;
};

updateHTML();

const checkForPlayerWin = () => {};

const checkForComputerWin = () => {};

// for (let button of allButtons) {
const buttonClicked = (event) => {
	if (event.target.id === "b1") {
		board[0][0] = "X";
	} else if (event.target.id === "b2") {
		board[0][1] = "X";
	} else if (event.target.id === "b3") {
		board[0][2] = "X";
	} else if (event.target.id === "b4") {
		board[1][0] = "X";
	} else if (event.target.id === "b5") {
		board[1][1] = "X";
	} else if (event.target.id === "b6") {
		board[1][2] = "X";
	} else if (event.target.id === "b7") {
		board[2][0] = "X";
	} else if (event.target.id === "b8") {
		board[2][1] = "X";
	} else if (event.target.id === "b9") {
		board[2][2] = "X";
	}

	//call a function here that checks to see if the player won

	//if the player won, alert them ELSE

	//make the computer move
	let randomRow = randomNumberBetween(0, 2);
	let randomCol = randomNumberBetween(0, 2);
	for (let i = 0; i < 1000; i++) {
		if (board[randomRow][randomCol] === "") {
			break;
		} else {
			randomRow = randomNumberBetween(0, 2);
			randomCol = randomNumberBetween(0, 2);
		}
	}

	if (board[randomRow][randomCol] !== "") {
		alert("Something went wrong making a computer move");
	} else {
		board[randomRow][randomCol] = "O";
		updateHTML();

		//call a function check to see if computer won, if so alert
	}

	console.log(board);
	//FOR FUTURE SELF: The array is updating in a random spot, but is not updating the HTML yet
};
// }
