//stores the movie titles and their prices in an object
const movies = {
	"The Godfather": { price: 8, seats: [] },
	"Finding Nemo": { price: 9, seats: [] },
	"Citizen Kane": { price: 10, seats: [] },
	"Toy Story": { price: 11, seats: [] },
};
let selectedMovie;
let numSelectedSeats = 0;

//gets the select from the HTML using an ID
const movieDropdown = document.getElementById("movieDropdown");
//placeholder for the new options we are about to generate
let options = "<option></option>";

// console.log(Object.keys(movies));
// console.log(Object.values(movies));
// console.log(Object.entries(movies));

// for (const movieTitle of Object.keys(movies)) {
// 	options += "<option>" + movieTitle + "</option>";
// }

for (const [key, value] of Object.entries(movies)) {
	// console.log(key, value);
	// options +=
	// 	"<option value='" +
	// 	key +
	// 	"'>" +
	// 	key +
	// 	" ($" +
	// 	value.price +
	// 	")" +
	// 	"</option>";
	options += `<option value="${key}">${key} ($${value.price})</option>`;
}

movieDropdown.innerHTML = options;

movieDropdown.addEventListener("change", (event) => {
	selectedMovie = event.target.value;
	updateSeatsHTML();
});

const updateSeatsHTML = () => {
	let seatsHTML = "";

	try {
		for (const [rowIndex, row] of movies[selectedMovie].seats.entries()) {
			seatsHTML += "<div>";
			for (const [colIndex, col] of row.entries()) {
				seatsHTML += `<span 
				data-rowIndex="${rowIndex}" 
				data-colIndex="${colIndex}" 
				onclick="seatClicked(event)" 
				class="material-symbols-outlined seat 
				${col.occupied ? "occupied" : ""} 
				${col.selected ? "selected" : ""}"> chair </span>`;
			}
			seatsHTML += "</div>";
		}

		seatsHTML += `<div id="screen">Screen</div>`;

		if (numSelectedSeats > 0) {
			seatsHTML += `<div>You have ${numSelectedSeats} seats selected for a total of $${
				numSelectedSeats * movies[selectedMovie].price
			}`;
			seatsHTML += `<button onclick="checkout()">Checkout</button>`;
		}

		document.getElementById("seats").innerHTML = seatsHTML;
	} catch (error) {
		console.log(error);
		document.getElementById("seats").innerHTML = "";
	}
};

const generateSeats = () => {
	for (const movie of Object.values(movies)) {
		for (let numRows = 0; numRows < 8; numRows++) {
			let row = [];
			for (let numCols = 0; numCols < 8; numCols++) {
				row.push({ occupied: Math.random() < 0.5, selected: false });
			}
			movie.seats.push(row);
		}
	}
	console.log(movies);
};

generateSeats();

const seatClicked = (event) => {
	const rowIndex = event.target.getAttribute("data-rowIndex");
	const colIndex = event.target.getAttribute("data-colIndex");

	const clickedOnSeat = movies[selectedMovie].seats[rowIndex][colIndex];
	clickedOnSeat.selected = true;
	numSelectedSeats++;

	updateSeatsHTML();

	console.log(movies[selectedMovie].seats);
};

const checkout = () => {
	for (const row of movies[selectedMovie].seats) {
		for (const col of row) {
			if (col.selected) {
				col.occupied = true;
				col.selected = false;
			}
		}
	}
	numSelectedSeats = 0;

	updateSeatsHTML();
};
