const weatherData = {
	"Ocean City": {
		temp: 70,
		wind: 10,
		humidity: 88,
		precipChance: 25,
		forecast: [],
	},
	Syracuse: {
		temp: 40,
		wind: 40,
		humidity: 20,
		precipChance: 110,
	},
	"San Francisco": {
		temp: 65,
		wind: 5,
		humidity: 60,
		precipChance: 0,
	},
};

document.getElementById("location").addEventListener("change", (evt) => {
	updateHTML();
});

const updateHTML = () => {
	const selectedCity = document.getElementById("location").value;
	// console.log(weatherData.Syracuse); //prefered key does not have a space
	// console.log(weatherData["Syracuse"]);
	// console.log(weatherData.Ocean City) //will not run
	// console.log(weatherData["Ocean City"]); //bracket notation because key has a space
	// console.log(weatherData[selectedCity]);

	// document.getElementById("todaysTemp").innerHTML =
	// 	weatherData[evt.target.value];
	console.log(weatherData[selectedCity]);
	document.getElementById("todaysTemp").innerHTML =
		weatherData[selectedCity].temp;

	document.getElementById(
		"todaysDetails"
	).innerHTML = `Precipitation: ${weatherData[selectedCity].precipChance}%<br />
		Humidity: ${weatherData[selectedCity].humidity}%<br />
		Wind: ${weatherData[selectedCity].wind}mph`;
};

updateHTML();
