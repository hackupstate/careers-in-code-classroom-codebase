import "./App.css";
import { useState } from "react";

function App() {
	// #4C Make num variables in state
	const [num1, setNum1] = useState("");
	const [num2, setNum2] = useState("");
	const [sum, setSum] = useState();

	// #2 Make function for when button is clicked
	const buttonClickedQuery = async () => {
		// #4A Get numbers that were typed in
		// #4E Make sure values come out of state
		console.log(num1, num2);
		const response = await fetch(
			`http://localhost:3001/data?num1=${num1}&num2=${num2}`
		);
		const data = await response.json();
		console.log(data);
		setSum(data.sum);
	};

	const buttonClickedRoute = async () => {
		const response = await fetch(
			`http://localhost:3001/add/${num1}/${num2}`
		);
		const data = await response.json();
		setSum(data.sum);
	};

	// POST BODY
	const buttonClicked = async () => {
		const response = await fetch(`http://localhost:3001/add`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ num1, num2 }),
		});
		const data = await response.json();
		setSum(data.sum);
	};

	return (
		<div className="App">
			{/* #1A Add first input with type and placeholder (value and onChange come later) */}
			<input
				type="number"
				placeholder="Num1"
				// #4B Add value and onChange
				value={num1}
				onChange={(evt) => {
					setNum1(evt.target.value);
				}}
			/>
			{/* #1B Add second input */}
			<input
				type="number"
				placeholder="Num2"
				// #4D Add num2 from state
				value={num2}
				onChange={(evt) => {
					setNum2(evt.target.value);
				}}
			/>
			{/* #1C Make button that user clicks on to add */}
			{/* #3 Link button clicked function to button onClick */}
			<button onClick={buttonClicked}>Add Em' Up</button>
			{sum && <p>Sum: {sum}</p>}
		</div>
	);
}

export default App;
