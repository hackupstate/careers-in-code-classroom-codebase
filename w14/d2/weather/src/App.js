import "./App.css";
import { useEffect } from "react";

function App() {
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

	return (
		<div className="App">
			<div className="container">
				<div className="row">
					<div className="col-2 text-center" id="weatherIcon">
						☁️
					</div>
					<div className="col-2">
						<div id="currentTemp">68°</div>
						<div>°F | °C</div>
					</div>
					<div className="col-4">
						Precipitation: 55%
						<br />
						Humidity: 40%
						<br />
						Wind: 10 mph
					</div>
					<div className="col-4 text-end">
						Manlius, NY 13104
						<br />
						Thursday 7:33 pm
						<br />
						Cloudy
					</div>
				</div>
				{/* End of row 1 */}
				<hr />
				<div className="row" id="forecastRow">
					<ForecastDay day="Thur" icon="❄️" temp={22} />
					<ForecastDay day="Fri" icon="☀️" temp={72} />
					<ForecastDay day="Sat" icon="🌧" temp={32} />
					<ForecastDay day="Sun" icon="☔️" temp={42} />
					<ForecastDay day="Mon" icon="🌈" temp={52} />
				</div>
				{/* End of row 2 */}
			</div>
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
			<p className="forecastIcon">{icon}</p>
			<p>{temp}°</p>
		</div>
	);
};

export default App;
