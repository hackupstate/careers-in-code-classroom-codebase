import "./App.css";
import { useEffect, useState } from "react";
import pic1 from "./pic1.jpg";

function App() {
	const [weatherData, setWeatherData] = useState();
	const [forecastData, setForecastData] = useState([
		{ day: "Thur", temp: 22, icon: "❄️" },
		{ day: "Fri", temp: 32, icon: "🌞" },
		{ day: "Sat", temp: 42, icon: "🌈" },
		{ day: "Sun", temp: 52, icon: "🌧" },
		{ day: "Mon", temp: 62, icon: "☀️" },
	]);

	useEffect(() => {
		const makeAPICalls = async () => {
			const geocodingResponse = await fetch(
				"http://api.openweathermap.org/geo/1.0/direct?q=Manlius,NY,US&limit=5&appid=4db60a6d7c0d43ad51b560009b74f90d"
			);
			const geocodingData = await geocodingResponse.json();
			const lat = geocodingData[0].lat;
			const lon = geocodingData[0].lon;

			const currentWeatherResponse = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4db60a6d7c0d43ad51b560009b74f90d&units=imperial`
			);
			const currentWeatherData = await currentWeatherResponse.json();
			console.log(currentWeatherData);
			setWeatherData({
				temp: Math.round(currentWeatherData.main.temp),
				humidity: currentWeatherData.main.humidity,
				iconCode: currentWeatherData.weather[0].icon,
				currentCondition: currentWeatherData.weather[0].main,
			});
			console.log(currentWeatherData);

			//make another API call using OpenWeatherMap Daily Forecast API
			const forecastDataResponse = await fetch(
				`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=4db60a6d7c0d43ad51b560009b74f90d&units=imperial`
			);
			//parse the JSON
			const forecastJSON = await forecastDataResponse.json();
			//console.log the data to see the structure of the data
			console.log(forecastJSON);

			const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

			setForecastData([
				{
					day: days[new Date(forecastJSON.list[0].dt_txt).getDay()],
					temp: Math.floor(forecastJSON.list[0].main.temp),
					icon: forecastJSON.list[0].weather[0].icon,
				},
				{
					day: days[new Date(forecastJSON.list[8].dt_txt).getDay()],
					temp: forecastJSON.list[8].main.temp,
					icon: forecastJSON.list[8].weather[0].icon,
				},
				{
					day: "Sat",
					temp: forecastJSON.list[16].main.temp,
					icon: forecastJSON.list[16].weather[0].icon,
				},
				{ day: "Sun", temp: 52, icon: "🌧" },
				{ day: "Mon", temp: 62, icon: "☀️" },
			]);
			//use the setForecastData function using the use state format above to set...
			//...in the forecast data from the API response
		};
		makeAPICalls();
	}, []);

	// useEffect(() => {
	// 	fetch(
	// 		"http://api.openweathermap.org/geo/1.0/direct?q=Manlius,NY,US&limit=5&appid=4db60a6d7c0d43ad51b560009b74f90d"
	// 	)
	// 		.then((geocodingResponse) => {
	// 			return geocodingResponse.json();
	// 		})
	// 		.then((geocodingData) => {
	// 			console.log(geocodingData);
	// 		});
	// }, []);

	if (!weatherData) {
		return <div>Loading...</div>;
	}

	return (
		<div className="App">
			<div className="container">
				<div className="row">
					<div className="col-2 text-center" id="weatherIcon">
						<img
							src={`https://openweathermap.org/img/wn/${weatherData.iconCode}@2x.png`}
						/>
					</div>
					<div className="col-2">
						<div id="currentTemp">{weatherData.temp}°</div>
						<div>°F | °C</div>
					</div>
					<div className="col-4">
						Precipitation: 55%
						<br />
						Humidity: {weatherData.humidity}%
						<br />
						Wind: 10 mph
					</div>
					<div className="col-4 text-end">
						Manlius, NY 13104
						<br />
						{new Date().toLocaleTimeString()}
						<br />
						{weatherData.currentCondition}
					</div>
				</div>
				{/* End of row 1 */}
				<hr />
				<div className="row" id="forecastRow">
					{forecastData.map((dayInfo) => {
						return (
							<ForecastDay
								day={dayInfo.day}
								icon={dayInfo.icon}
								temp={dayInfo.temp}
							/>
						);
					})}
				</div>
				{/* End of row 2 */}
			</div>
			<img src={pic1} style={{ width: "25%" }} alt="Syracuse #1" />
			<img src="/pic2.jpg" style={{ width: "25%" }} alt="Syracuse #2" />
		</div>
	);
}

// //alternative way to recieve and use props
// const ForecastDay = (props) => {
// 	return (
// 		<div className="col text-center">
// 			<p>{props.day}</p>
// 			<p className="forecastIcon">{props.icon}</p>
// 			<p>{props.temp}°</p>
// 		</div>
// 	);
// };

const ForecastDay = ({ day, icon, temp }) => {
	return (
		<div className="col text-center">
			<p>{day}</p>
			<p className="forecastIcon">
				<img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
			</p>
			<p>{temp}°</p>
		</div>
	);
};

export default App;
