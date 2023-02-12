// const makeAPICall = async () => {
// 	const response = await fetch(
// 		"https://owen-wilson-wow-api.onrender.com/wows/random"
// 	);
// 	const data = await response.json();
// 	console.log(data[0].video["1080p"]);
// 	const movieTitle = data[0].movie;

// 	let generatedHTML = "";

// 	generatedHTML += `<h1>${movieTitle}</h1>`;
// 	generatedHTML += `<video controls width="480" height="320">
// 		<source src="${data[0].video["1080p"]}" type="video/mp4"
// 	</video>`;

// 	document.getElementById("movieInfo").innerHTML = generatedHTML;
// };

// makeAPICall();
fetch("https://owen-wilson-wow-api.onrender.com/wows/random").then(
	(response) => {
		response.json().then((data) => {
			console.log(data[0].video["1080p"]);
			const movieTitle = data[0].movie;

			let generatedHTML = "";

			generatedHTML += `<h1>${movieTitle}</h1>`;
			generatedHTML += `<video controls width="480" height="320">
			<source src="${data[0].video["1080p"]}" type="video/mp4"
		</video>`;

			document.getElementById("movieInfo").innerHTML = generatedHTML;
		});
	}
);
