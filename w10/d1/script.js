const allButtons = document.getElementsByTagName("button");
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

for (let button of allButtons) {
	button.onclick = (event) => {
		button.innerHTML = "X";
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

		let randomRow = randomNumberBetween(0, 2);
		let randomCol = randomNumberBetween(0, 2);
		board[randomRow][randomCol] = "O";
		console.log(board);
		//FOR FUTURE SELF: The array is updating in a random spot, but is not updating the HTML yet
	};
}
