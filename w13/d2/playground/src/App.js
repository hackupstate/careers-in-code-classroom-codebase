import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import { useState } from "react";

function App() {
	const name = "Max Matthews";
	const age = 8;
	const [counter, setCounter] = useState(0);
	const [cards, setCards] = useState([
		{
			num: 1,
			text: "First card",
		},
		{
			num: 2,
			text: "Shocker second card",
		},
		{
			num: 3,
			text: "My last card",
		},
		{
			num: -1,
			text: "New card, party time!",
		},
	]);

	const nameAndAgeCombiner = () => {
		if (age < 6) {
			return "Youngin'";
		} else {
			return "Geiser";
		}
	};

	const destination = "https://nytimes.com";

	const buttonClicked = () => {
		console.log("hit");
		setCounter(counter + 1);
		console.log(counter);
	};

	return (
		<div className="App">
			<p>Button has been clicked {counter} times</p>
			<button onClick={buttonClicked}>Click me!</button>
			<h1>
				Hello, {name}. You have {age} years of experience.
			</h1>
			<h2>{nameAndAgeCombiner()}</h2>
			<h2>{age <= 5 ? "Young guy" : "Old guy"}</h2>
			<a href={destination}>Link</a>
			<h2>It is {new Date().toLocaleTimeString()}.</h2>
			<div className="row">
				{cards.map((card) => {
					return <Card num={card.num} text={card.text} />;
				})}
			</div>
		</div>
	);
}

export default App;
