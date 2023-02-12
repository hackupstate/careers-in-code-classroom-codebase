const weatherData = {
	"08226": {
		currentIcon: "☁️",
		currentTemp: 38,
		precipitation: 55,
		humidity: 40,
		wind: 10,
		currentCondition: "Cloudy",
		forecast: [
			{
				day: "Thur",
				conditionIcon: "🌞",
				tempature: 48,
			},
			{
				day: "Fri",
				conditionIcon: "🎅",
				tempature: -48,
			},
			{
				day: "Sat",
				conditionIcon: "🦄",
				tempature: 69,
			},
			{
				day: "Sun",
				conditionIcon: "🌈",
				tempature: 10,
			},
			{
				day: "Mon",
				conditionIcon: "❄️",
				tempature: 48,
			},
		],
	},
	13104: {
		currentIcon: "☀️",
		currentTemp: 95,
		precipitation: 25,
		humidity: 90,
		wind: 40,
		currentCondition: "Sunny",
		forecast: [
			{
				day: "Thur",
				conditionIcon: "🌞",
				tempature: 48,
			},
			{
				day: "Fri",
				conditionIcon: "🎅",
				tempature: -48,
			},
			{
				day: "Sat",
				conditionIcon: "🦄",
				tempature: 69,
			},
			{
				day: "Sun",
				conditionIcon: "🌈",
				tempature: 10,
			},
			{
				day: "Mon",
				conditionIcon: "❄️",
				tempature: 48,
			},
		],
	},
};

const updateHTML = (selectedZipCode) => {
	const selectedData = weatherData[selectedZipCode];
	document.getElementById("weatherIcon").innerHTML = selectedData.currentIcon;
	document.getElementById("currentTemp").innerHTML = selectedData.currentTemp;
};

document.getElementById("location").onchange = (evt) => {
	updateHTML(evt.target.value);
};

updateHTML("13104");
