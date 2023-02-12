const movieData = {
	"The Godfather": {
		price: 8,
		seats: [],
	},
	Shawshank: {
		price: 9,
		seats: [],
	},
	Casablanca: {
		price: 10,
		seats: [],
	},
	"Citizen Kane": {
		price: 11,
		seats: [],
	},
};

for (const movie of Object.values(movieData)) {
	for (let numRows = 0; numRows < 8; numRows++) {
		let row = [];
		for (let numCols = 0; numCols < 8; numCols++) {
			row.push({ selected: false, occupied: Math.random() < 0.5 });
		}
		movie.seats.push(row);
	}
}

let selectedMovieSeats;

const updateHTML = () => {
	let generatedHTML = "";
	for (const [rowIndex, row] of selectedMovieSeats.entries()) {
		generatedHTML += "<div>";
		for (const [colIndex, seat] of row.entries()) {
			if (seat.occupied === true) {
				generatedHTML +=
					'<span class="material-symbols-outlined occupied"> chair </span>';
			} else if (seat.selected === true) {
				generatedHTML +=
					'<span class="material-symbols-outlined selected"> chair </span>';
			} else {
				generatedHTML +=
					`<span 
					onclick="seatClicked(event)"
					data-rowIndex="${rowIndex}"
					data-colIndex="` +
					colIndex +
					`" 
					class="material-symbols-outlined"> 
					chair 
					</span>`;
			}
		}
		generatedHTML += "</div>";
	}

	document.getElementById("seats").innerHTML = generatedHTML;
};

document.getElementById("movieSelector").onchange = (evt) => {
	console.log(evt.target.value);
	selectedMovieSeats = movieData[evt.target.value].seats;
	updateHTML();
};

const seatClicked = (event) => {
	const rowIndex = event.target.getAttribute("data-rowIndex");
	const colIndex = event.target.getAttribute("data-colIndex");
	selectedMovieSeats[rowIndex][colIndex].selected = true;
	updateHTML();
};
