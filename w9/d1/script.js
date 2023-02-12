const movieData = {
	"The Godfather": {
		price: 8,
		seats: [
			[
				{ occupied: true },
				{ occupied: false },
				{ occupied: false },
				{ occupied: false },
				{ occupied: true },
				{ occupied: true },
				{ occupied: false },
				{ occupied: false },
			],
			[
				{ occupied: false },
				{ occupied: false },
				{ occupied: false },
				{ occupied: false },
				{ occupied: false },
				{ occupied: true },
				{ occupied: true },
				{ occupied: true },
			],
		],
	},
};

console.log(movieData["The Godfather"].seats[1][4].occupied);

document.getElementById("movieSelector").onchange = (evt) => {
	console.log(evt.target.value);
	const selectedMovieSeats = movieData[evt.target.value].seats;
	console.log(selectedMovieSeats);
	let generatedHTML = "";
	for (const row of selectedMovieSeats) {
		//every time there is a new row, this runs
		generatedHTML += "<div>";
		for (const seat of row) {
			if (seat.occupied === true) {
				generatedHTML +=
					'<span class="material-symbols-outlined occupied"> chair </span>';
			} else {
				generatedHTML +=
					'<span class="material-symbols-outlined"> chair </span>';
			}
		}
		//seats are done being generated, before we go to next row
		generatedHTML += "</div>";
	}

	console.log(generatedHTML);
	document.getElementById("seats").innerHTML = generatedHTML;
};
