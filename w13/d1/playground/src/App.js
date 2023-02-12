import logo from "./logo.svg";
import "./App.css";

function App() {
	const name = "Max Matthews";
	const age = 8;

	const nameAndAgeCombiner = () => {
		if (age < 6) {
			return "Youngin'";
		} else {
			return "Geiser";
		}
	};

	const destination = "https://nytimes.com";

	return (
		<div className="App">
			<h1>
				Hello, {name}. You have {age} years of experience.
			</h1>
			<h2>{nameAndAgeCombiner()}</h2>
			<h2>{age <= 5 ? "Young guy" : "Old guy"}</h2>
			<a href={destination}>Link</a>
		</div>
	);
}

export default App;
